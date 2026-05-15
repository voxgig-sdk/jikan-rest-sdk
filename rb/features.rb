# JikanRest SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module JikanRestFeatures
  def self.make_feature(name)
    case name
    when "base"
      JikanRestBaseFeature.new
    when "test"
      JikanRestTestFeature.new
    else
      JikanRestBaseFeature.new
    end
  end
end
