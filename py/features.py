# TransportrestTransitApis SDK feature factory

from feature.base_feature import TransportrestTransitApisBaseFeature
from feature.test_feature import TransportrestTransitApisTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TransportrestTransitApisBaseFeature(),
        "test": lambda: TransportrestTransitApisTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
