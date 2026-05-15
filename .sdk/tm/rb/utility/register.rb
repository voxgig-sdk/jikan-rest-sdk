# JikanRest SDK utility registration
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

JikanRestUtility.registrar = ->(u) {
  u.clean = JikanRestUtilities::Clean
  u.done = JikanRestUtilities::Done
  u.make_error = JikanRestUtilities::MakeError
  u.feature_add = JikanRestUtilities::FeatureAdd
  u.feature_hook = JikanRestUtilities::FeatureHook
  u.feature_init = JikanRestUtilities::FeatureInit
  u.fetcher = JikanRestUtilities::Fetcher
  u.make_fetch_def = JikanRestUtilities::MakeFetchDef
  u.make_context = JikanRestUtilities::MakeContext
  u.make_options = JikanRestUtilities::MakeOptions
  u.make_request = JikanRestUtilities::MakeRequest
  u.make_response = JikanRestUtilities::MakeResponse
  u.make_result = JikanRestUtilities::MakeResult
  u.make_point = JikanRestUtilities::MakePoint
  u.make_spec = JikanRestUtilities::MakeSpec
  u.make_url = JikanRestUtilities::MakeUrl
  u.param = JikanRestUtilities::Param
  u.prepare_auth = JikanRestUtilities::PrepareAuth
  u.prepare_body = JikanRestUtilities::PrepareBody
  u.prepare_headers = JikanRestUtilities::PrepareHeaders
  u.prepare_method = JikanRestUtilities::PrepareMethod
  u.prepare_params = JikanRestUtilities::PrepareParams
  u.prepare_path = JikanRestUtilities::PreparePath
  u.prepare_query = JikanRestUtilities::PrepareQuery
  u.result_basic = JikanRestUtilities::ResultBasic
  u.result_body = JikanRestUtilities::ResultBody
  u.result_headers = JikanRestUtilities::ResultHeaders
  u.transform_request = JikanRestUtilities::TransformRequest
  u.transform_response = JikanRestUtilities::TransformResponse
}
