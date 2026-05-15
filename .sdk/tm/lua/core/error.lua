-- JikanRest SDK error

local JikanRestError = {}
JikanRestError.__index = JikanRestError


function JikanRestError.new(code, msg, ctx)
  local self = setmetatable({}, JikanRestError)
  self.is_sdk_error = true
  self.sdk = "JikanRest"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function JikanRestError:error()
  return self.msg
end


function JikanRestError:__tostring()
  return self.msg
end


return JikanRestError
