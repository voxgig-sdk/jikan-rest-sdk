# UserAbout entity test

require "minitest/autorun"
require "json"
require_relative "../JikanRest_sdk"
require_relative "runner"

class UserAboutEntityTest < Minitest::Test
  def test_create_instance
    testsdk = JikanRestSDK.test(nil, nil)
    ent = testsdk.UserAbout(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = user_about_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "user_about." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set JIKANREST_TEST_USER_ABOUT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    user_about_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.user_about")))
    user_about_ref01_data = nil
    if user_about_ref01_data_raw.length > 0
      user_about_ref01_data = Helpers.to_map(user_about_ref01_data_raw[0][1])
    end

    # LIST
    user_about_ref01_ent = client.UserAbout(nil)
    user_about_ref01_match = {
      "username" => setup[:idmap]["username01"],
    }

    user_about_ref01_list_result, err = user_about_ref01_ent.list(user_about_ref01_match, nil)
    assert_nil err
    assert user_about_ref01_list_result.is_a?(Array)

  end
end

def user_about_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "user_about", "UserAboutTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = JikanRestSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["user_about01", "user_about02", "user_about03", "user01", "user02", "user03", "username01"],
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
  entid_env_raw = ENV["JIKANREST_TEST_USER_ABOUT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "JIKANREST_TEST_USER_ABOUT_ENTID" => idmap,
    "JIKANREST_TEST_LIVE" => "FALSE",
    "JIKANREST_TEST_EXPLAIN" => "FALSE",
    "JIKANREST_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["JIKANREST_TEST_USER_ABOUT_ENTID"])
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
