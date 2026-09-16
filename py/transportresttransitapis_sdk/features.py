# TransportrestTransitApis SDK feature factory

from transportresttransitapis_sdk.feature.base_feature import TransportrestTransitApisBaseFeature
from transportresttransitapis_sdk.feature.ratelimit_feature import TransportrestTransitApisRatelimitFeature
from transportresttransitapis_sdk.feature.retry_feature import TransportrestTransitApisRetryFeature
from transportresttransitapis_sdk.feature.test_feature import TransportrestTransitApisTestFeature
from transportresttransitapis_sdk.feature.timeout_feature import TransportrestTransitApisTimeoutFeature


_FEATURES = {
    "base": lambda: TransportrestTransitApisBaseFeature(),
    "ratelimit": lambda: TransportrestTransitApisRatelimitFeature(),
    "retry": lambda: TransportrestTransitApisRetryFeature(),
    "test": lambda: TransportrestTransitApisTestFeature(),
    "timeout": lambda: TransportrestTransitApisTimeoutFeature(),
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
