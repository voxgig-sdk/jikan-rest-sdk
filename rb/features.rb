# JikanRest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module JikanRestFeatures
  def self.make_feature(name)
    case name
    when "base"
      JikanRestBaseFeature.new
    when "ratelimit"
      JikanRestRatelimitFeature.new
    when "retry"
      JikanRestRetryFeature.new
    when "test"
      JikanRestTestFeature.new
    when "timeout"
      JikanRestTimeoutFeature.new
    else
      JikanRestBaseFeature.new
    end
  end
end
