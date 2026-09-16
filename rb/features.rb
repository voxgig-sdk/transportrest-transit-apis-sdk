# TransportrestTransitApis SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TransportrestTransitApisFeatures
  def self.make_feature(name)
    case name
    when "base"
      TransportrestTransitApisBaseFeature.new
    when "ratelimit"
      TransportrestTransitApisRatelimitFeature.new
    when "retry"
      TransportrestTransitApisRetryFeature.new
    when "test"
      TransportrestTransitApisTestFeature.new
    when "timeout"
      TransportrestTransitApisTimeoutFeature.new
    else
      TransportrestTransitApisBaseFeature.new
    end
  end
end
