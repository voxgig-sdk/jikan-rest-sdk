package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/jikan-rest-sdk/go/utility/struct"
)

type JikanRestSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewJikanRestSDK(options map[string]any) *JikanRestSDK {
	sdk := &JikanRestSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *JikanRestSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *JikanRestSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *JikanRestSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *JikanRestSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *JikanRestSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *JikanRestSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *JikanRestSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("JikanRestSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *JikanRestSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *JikanRestSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath([]any{"data", "errors"}, res).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("JikanRestSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Anime returns a Anime entity bound to this client.
// Idiomatic usage: client.Anime(nil).List(nil, nil) or
// client.Anime(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Anime(data map[string]any) JikanRestEntity {
	return NewAnimeEntityFunc(sdk, data)
}


// Character returns a Character entity bound to this client.
// Idiomatic usage: client.Character(nil).List(nil, nil) or
// client.Character(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Character(data map[string]any) JikanRestEntity {
	return NewCharacterEntityFunc(sdk, data)
}


// Club returns a Club entity bound to this client.
// Idiomatic usage: client.Club(nil).List(nil, nil) or
// client.Club(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Club(data map[string]any) JikanRestEntity {
	return NewClubEntityFunc(sdk, data)
}


// External returns a External entity bound to this client.
// Idiomatic usage: client.External(nil).List(nil, nil) or
// client.External(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) External(data map[string]any) JikanRestEntity {
	return NewExternalEntityFunc(sdk, data)
}


// Genre returns a Genre entity bound to this client.
// Idiomatic usage: client.Genre(nil).List(nil, nil) or
// client.Genre(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Genre(data map[string]any) JikanRestEntity {
	return NewGenreEntityFunc(sdk, data)
}


// Magazine returns a Magazine entity bound to this client.
// Idiomatic usage: client.Magazine(nil).List(nil, nil) or
// client.Magazine(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Magazine(data map[string]any) JikanRestEntity {
	return NewMagazineEntityFunc(sdk, data)
}


// Manga returns a Manga entity bound to this client.
// Idiomatic usage: client.Manga(nil).List(nil, nil) or
// client.Manga(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Manga(data map[string]any) JikanRestEntity {
	return NewMangaEntityFunc(sdk, data)
}


// PeopleSearch returns a PeopleSearch entity bound to this client.
// Idiomatic usage: client.PeopleSearch(nil).List(nil, nil) or
// client.PeopleSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) PeopleSearch(data map[string]any) JikanRestEntity {
	return NewPeopleSearchEntityFunc(sdk, data)
}


// Person returns a Person entity bound to this client.
// Idiomatic usage: client.Person(nil).List(nil, nil) or
// client.Person(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Person(data map[string]any) JikanRestEntity {
	return NewPersonEntityFunc(sdk, data)
}


// Producer returns a Producer entity bound to this client.
// Idiomatic usage: client.Producer(nil).List(nil, nil) or
// client.Producer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Producer(data map[string]any) JikanRestEntity {
	return NewProducerEntityFunc(sdk, data)
}


// Random returns a Random entity bound to this client.
// Idiomatic usage: client.Random(nil).List(nil, nil) or
// client.Random(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Random(data map[string]any) JikanRestEntity {
	return NewRandomEntityFunc(sdk, data)
}


// Recommendation returns a Recommendation entity bound to this client.
// Idiomatic usage: client.Recommendation(nil).List(nil, nil) or
// client.Recommendation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Recommendation(data map[string]any) JikanRestEntity {
	return NewRecommendationEntityFunc(sdk, data)
}


// Review returns a Review entity bound to this client.
// Idiomatic usage: client.Review(nil).List(nil, nil) or
// client.Review(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Review(data map[string]any) JikanRestEntity {
	return NewReviewEntityFunc(sdk, data)
}


// Schedule returns a Schedule entity bound to this client.
// Idiomatic usage: client.Schedule(nil).List(nil, nil) or
// client.Schedule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Schedule(data map[string]any) JikanRestEntity {
	return NewScheduleEntityFunc(sdk, data)
}


// Season returns a Season entity bound to this client.
// Idiomatic usage: client.Season(nil).List(nil, nil) or
// client.Season(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Season(data map[string]any) JikanRestEntity {
	return NewSeasonEntityFunc(sdk, data)
}


// Top returns a Top entity bound to this client.
// Idiomatic usage: client.Top(nil).List(nil, nil) or
// client.Top(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) Top(data map[string]any) JikanRestEntity {
	return NewTopEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) User(data map[string]any) JikanRestEntity {
	return NewUserEntityFunc(sdk, data)
}


// UserAbout returns a UserAbout entity bound to this client.
// Idiomatic usage: client.UserAbout(nil).List(nil, nil) or
// client.UserAbout(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) UserAbout(data map[string]any) JikanRestEntity {
	return NewUserAboutEntityFunc(sdk, data)
}


// UserClub returns a UserClub entity bound to this client.
// Idiomatic usage: client.UserClub(nil).List(nil, nil) or
// client.UserClub(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) UserClub(data map[string]any) JikanRestEntity {
	return NewUserClubEntityFunc(sdk, data)
}


// UserFriend returns a UserFriend entity bound to this client.
// Idiomatic usage: client.UserFriend(nil).List(nil, nil) or
// client.UserFriend(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) UserFriend(data map[string]any) JikanRestEntity {
	return NewUserFriendEntityFunc(sdk, data)
}


// UserHistory returns a UserHistory entity bound to this client.
// Idiomatic usage: client.UserHistory(nil).List(nil, nil) or
// client.UserHistory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) UserHistory(data map[string]any) JikanRestEntity {
	return NewUserHistoryEntityFunc(sdk, data)
}


// UserStatistic returns a UserStatistic entity bound to this client.
// Idiomatic usage: client.UserStatistic(nil).List(nil, nil) or
// client.UserStatistic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) UserStatistic(data map[string]any) JikanRestEntity {
	return NewUserStatisticEntityFunc(sdk, data)
}


// UserUpdate returns a UserUpdate entity bound to this client.
// Idiomatic usage: client.UserUpdate(nil).List(nil, nil) or
// client.UserUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) UserUpdate(data map[string]any) JikanRestEntity {
	return NewUserUpdateEntityFunc(sdk, data)
}


// WatchEpisode returns a WatchEpisode entity bound to this client.
// Idiomatic usage: client.WatchEpisode(nil).List(nil, nil) or
// client.WatchEpisode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) WatchEpisode(data map[string]any) JikanRestEntity {
	return NewWatchEpisodeEntityFunc(sdk, data)
}


// WatchPromo returns a WatchPromo entity bound to this client.
// Idiomatic usage: client.WatchPromo(nil).List(nil, nil) or
// client.WatchPromo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *JikanRestSDK) WatchPromo(data map[string]any) JikanRestEntity {
	return NewWatchPromoEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *JikanRestSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewJikanRestSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
