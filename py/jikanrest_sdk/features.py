# JikanRest SDK feature factory

from jikanrest_sdk.feature.base_feature import JikanRestBaseFeature
from jikanrest_sdk.feature.test_feature import JikanRestTestFeature


def _make_feature(name):
    features = {
        "base": lambda: JikanRestBaseFeature(),
        "test": lambda: JikanRestTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
