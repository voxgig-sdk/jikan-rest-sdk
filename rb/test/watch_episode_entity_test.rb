# WatchEpisode entity test

require "minitest/autorun"
require "json"
require_relative "../JikanRest_sdk"
require_relative "runner"

class WatchEpisodeEntityTest < Minitest::Test
  def test_create_instance
    testsdk = JikanRestSDK.test(nil, nil)
    ent = testsdk.WatchEpisode(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = watch_episode_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "watch_episode." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set JIKANREST_TEST_WATCH_EPISODE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    watch_episode_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.watch_episode")))
    watch_episode_ref01_data = nil
    if watch_episode_ref01_data_raw.length > 0
      watch_episode_ref01_data = Helpers.to_map(watch_episode_ref01_data_raw[0][1])
    end

    # LIST
    watch_episode_ref01_ent = client.WatchEpisode(nil)
    watch_episode_ref01_match = {}

    watch_episode_ref01_list_result, err = watch_episode_ref01_ent.list(watch_episode_ref01_match, nil)
    assert_nil err
    assert watch_episode_ref01_list_result.is_a?(Array)

  end
end

def watch_episode_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "watch_episode", "WatchEpisodeTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = JikanRestSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["watch_episode01", "watch_episode02", "watch_episode03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["JIKANREST_TEST_WATCH_EPISODE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "JIKANREST_TEST_WATCH_EPISODE_ENTID" => idmap,
    "JIKANREST_TEST_LIVE" => "FALSE",
    "JIKANREST_TEST_EXPLAIN" => "FALSE",
    "JIKANREST_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["JIKANREST_TEST_WATCH_EPISODE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["JIKANREST_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["JIKANREST_APIKEY"],
      },
      extra || {},
    ])
    client = JikanRestSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["JIKANREST_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["JIKANREST_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
