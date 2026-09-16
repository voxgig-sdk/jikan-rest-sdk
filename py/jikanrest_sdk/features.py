# JikanRest SDK feature factory

from jikanrest_sdk.feature.base_feature import JikanRestBaseFeature
from jikanrest_sdk.feature.ratelimit_feature import JikanRestRatelimitFeature
from jikanrest_sdk.feature.retry_feature import JikanRestRetryFeature
from jikanrest_sdk.feature.test_feature import JikanRestTestFeature
from jikanrest_sdk.feature.timeout_feature import JikanRestTimeoutFeature


_FEATURES = {
    "base": lambda: JikanRestBaseFeature(),
    "ratelimit": lambda: JikanRestRatelimitFeature(),
    "retry": lambda: JikanRestRetryFeature(),
    "test": lambda: JikanRestTestFeature(),
    "timeout": lambda: JikanRestTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
