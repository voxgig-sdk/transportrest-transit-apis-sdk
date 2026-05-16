<?php
declare(strict_types=1);

// TransportrestTransitApis SDK utility registration

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

TransportrestTransitApisUtility::setRegistrar(function (TransportrestTransitApisUtility $u): void {
    $u->clean = [TransportrestTransitApisClean::class, 'call'];
    $u->done = [TransportrestTransitApisDone::class, 'call'];
    $u->make_error = [TransportrestTransitApisMakeError::class, 'call'];
    $u->feature_add = [TransportrestTransitApisFeatureAdd::class, 'call'];
    $u->feature_hook = [TransportrestTransitApisFeatureHook::class, 'call'];
    $u->feature_init = [TransportrestTransitApisFeatureInit::class, 'call'];
    $u->fetcher = [TransportrestTransitApisFetcher::class, 'call'];
    $u->make_fetch_def = [TransportrestTransitApisMakeFetchDef::class, 'call'];
    $u->make_context = [TransportrestTransitApisMakeContext::class, 'call'];
    $u->make_options = [TransportrestTransitApisMakeOptions::class, 'call'];
    $u->make_request = [TransportrestTransitApisMakeRequest::class, 'call'];
    $u->make_response = [TransportrestTransitApisMakeResponse::class, 'call'];
    $u->make_result = [TransportrestTransitApisMakeResult::class, 'call'];
    $u->make_point = [TransportrestTransitApisMakePoint::class, 'call'];
    $u->make_spec = [TransportrestTransitApisMakeSpec::class, 'call'];
    $u->make_url = [TransportrestTransitApisMakeUrl::class, 'call'];
    $u->param = [TransportrestTransitApisParam::class, 'call'];
    $u->prepare_auth = [TransportrestTransitApisPrepareAuth::class, 'call'];
    $u->prepare_body = [TransportrestTransitApisPrepareBody::class, 'call'];
    $u->prepare_headers = [TransportrestTransitApisPrepareHeaders::class, 'call'];
    $u->prepare_method = [TransportrestTransitApisPrepareMethod::class, 'call'];
    $u->prepare_params = [TransportrestTransitApisPrepareParams::class, 'call'];
    $u->prepare_path = [TransportrestTransitApisPreparePath::class, 'call'];
    $u->prepare_query = [TransportrestTransitApisPrepareQuery::class, 'call'];
    $u->result_basic = [TransportrestTransitApisResultBasic::class, 'call'];
    $u->result_body = [TransportrestTransitApisResultBody::class, 'call'];
    $u->result_headers = [TransportrestTransitApisResultHeaders::class, 'call'];
    $u->transform_request = [TransportrestTransitApisTransformRequest::class, 'call'];
    $u->transform_response = [TransportrestTransitApisTransformResponse::class, 'call'];
});
