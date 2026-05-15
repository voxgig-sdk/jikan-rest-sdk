# JikanRest SDK exists test

require "minitest/autorun"
require_relative "../JikanRest_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = JikanRestSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
