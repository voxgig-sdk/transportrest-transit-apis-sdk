# TransportrestTransitApis SDK exists test

import pytest
from transportresttransitapis_sdk import TransportrestTransitApisSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TransportrestTransitApisSDK.test(None, None)
        assert testsdk is not None
