<?php
declare(strict_types=1);

// JikanRest SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

JikanRestUtility::setRegistrar(function (JikanRestUtility $u): void {
    $u->clean = [JikanRestClean::class, 'call'];
    $u->done = [JikanRestDone::class, 'call'];
    $u->make_error = [JikanRestMakeError::class, 'call'];
    $u->feature_add = [JikanRestFeatureAdd::class, 'call'];
    $u->feature_hook = [JikanRestFeatureHook::class, 'call'];
    $u->feature_init = [JikanRestFeatureInit::class, 'call'];
    $u->fetcher = [JikanRestFetcher::class, 'call'];
    $u->make_fetch_def = [JikanRestMakeFetchDef::class, 'call'];
    $u->make_context = [JikanRestMakeContext::class, 'call'];
    $u->make_options = [JikanRestMakeOptions::class, 'call'];
    $u->make_request = [JikanRestMakeRequest::class, 'call'];
    $u->make_response = [JikanRestMakeResponse::class, 'call'];
    $u->make_result = [JikanRestMakeResult::class, 'call'];
    $u->make_point = [JikanRestMakePoint::class, 'call'];
    $u->make_spec = [JikanRestMakeSpec::class, 'call'];
    $u->make_url = [JikanRestMakeUrl::class, 'call'];
    $u->param = [JikanRestParam::class, 'call'];
    $u->prepare_auth = [JikanRestPrepareAuth::class, 'call'];
    $u->prepare_body = [JikanRestPrepareBody::class, 'call'];
    $u->prepare_headers = [JikanRestPrepareHeaders::class, 'call'];
    $u->prepare_method = [JikanRestPrepareMethod::class, 'call'];
    $u->prepare_params = [JikanRestPrepareParams::class, 'call'];
    $u->prepare_path = [JikanRestPreparePath::class, 'call'];
    $u->prepare_query = [JikanRestPrepareQuery::class, 'call'];
    $u->result_basic = [JikanRestResultBasic::class, 'call'];
    $u->result_body = [JikanRestResultBody::class, 'call'];
    $u->result_headers = [JikanRestResultHeaders::class, 'call'];
    $u->transform_request = [JikanRestTransformRequest::class, 'call'];
    $u->transform_response = [JikanRestTransformResponse::class, 'call'];
});
