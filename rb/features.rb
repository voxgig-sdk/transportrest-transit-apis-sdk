# TransportrestTransitApis SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TransportrestTransitApisFeatures
  def self.make_feature(name)
    case name
    when "base"
      TransportrestTransitApisBaseFeature.new
    when "test"
      TransportrestTransitApisTestFeature.new
    else
      TransportrestTransitApisBaseFeature.new
    end
  end
end
