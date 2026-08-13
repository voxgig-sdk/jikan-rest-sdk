# JikanRest SDK utility: make_context

from jikanrest_sdk.core.context import JikanRestContext


def make_context_util(ctxmap, basectx):
    return JikanRestContext(ctxmap, basectx)
