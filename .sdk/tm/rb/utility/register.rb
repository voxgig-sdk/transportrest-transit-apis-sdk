# TransportrestTransitApis SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TransportrestTransitApisUtility.registrar = ->(u) {
  u.clean = TransportrestTransitApisUtilities::Clean
  u.done = TransportrestTransitApisUtilities::Done
  u.make_error = TransportrestTransitApisUtilities::MakeError
  u.feature_add = TransportrestTransitApisUtilities::FeatureAdd
  u.feature_hook = TransportrestTransitApisUtilities::FeatureHook
  u.feature_init = TransportrestTransitApisUtilities::FeatureInit
  u.fetcher = TransportrestTransitApisUtilities::Fetcher
  u.make_fetch_def = TransportrestTransitApisUtilities::MakeFetchDef
  u.make_context = TransportrestTransitApisUtilities::MakeContext
  u.make_options = TransportrestTransitApisUtilities::MakeOptions
  u.make_request = TransportrestTransitApisUtilities::MakeRequest
  u.make_response = TransportrestTransitApisUtilities::MakeResponse
  u.make_result = TransportrestTransitApisUtilities::MakeResult
  u.make_point = TransportrestTransitApisUtilities::MakePoint
  u.make_spec = TransportrestTransitApisUtilities::MakeSpec
  u.make_url = TransportrestTransitApisUtilities::MakeUrl
  u.param = TransportrestTransitApisUtilities::Param
  u.prepare_auth = TransportrestTransitApisUtilities::PrepareAuth
  u.prepare_body = TransportrestTransitApisUtilities::PrepareBody
  u.prepare_headers = TransportrestTransitApisUtilities::PrepareHeaders
  u.prepare_method = TransportrestTransitApisUtilities::PrepareMethod
  u.prepare_params = TransportrestTransitApisUtilities::PrepareParams
  u.prepare_path = TransportrestTransitApisUtilities::PreparePath
  u.prepare_query = TransportrestTransitApisUtilities::PrepareQuery
  u.result_basic = TransportrestTransitApisUtilities::ResultBasic
  u.result_body = TransportrestTransitApisUtilities::ResultBody
  u.result_headers = TransportrestTransitApisUtilities::ResultHeaders
  u.transform_request = TransportrestTransitApisUtilities::TransformRequest
  u.transform_response = TransportrestTransitApisUtilities::TransformResponse
}
