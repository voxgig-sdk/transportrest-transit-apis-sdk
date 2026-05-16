# TransportrestTransitApis SDK utility: make_context
require_relative '../core/context'
module TransportrestTransitApisUtilities
  MakeContext = ->(ctxmap, basectx) {
    TransportrestTransitApisContext.new(ctxmap, basectx)
  }
end
