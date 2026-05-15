# JikanRest SDK utility: feature_add
module JikanRestUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
