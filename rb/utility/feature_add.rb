# TransportrestTransitApis SDK utility: feature_add
module TransportrestTransitApisUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
