# JikanRest SDK utility: make_context
require_relative '../core/context'
module JikanRestUtilities
  MakeContext = ->(ctxmap, basectx) {
    JikanRestContext.new(ctxmap, basectx)
  }
end
