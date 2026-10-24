# TransportrestTransitApis SDK utility: prepare_body
require_relative 'media'
module TransportrestTransitApisUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TransportrestTransitApisUtilities.raw_body(ctx.reqdata) if TransportrestTransitApisUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
