# JikanRest SDK utility: make_context

from core.context import JikanRestContext


def make_context_util(ctxmap, basectx):
    return JikanRestContext(ctxmap, basectx)
