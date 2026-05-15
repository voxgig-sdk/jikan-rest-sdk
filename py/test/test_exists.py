# ProjectName SDK exists test

import pytest
from jikanrest_sdk import JikanRestSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = JikanRestSDK.test(None, None)
        assert testsdk is not None
