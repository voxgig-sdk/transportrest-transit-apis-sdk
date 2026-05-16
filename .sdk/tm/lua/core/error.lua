-- TransportrestTransitApis SDK error

local TransportrestTransitApisError = {}
TransportrestTransitApisError.__index = TransportrestTransitApisError


function TransportrestTransitApisError.new(code, msg, ctx)
  local self = setmetatable({}, TransportrestTransitApisError)
  self.is_sdk_error = true
  self.sdk = "TransportrestTransitApis"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TransportrestTransitApisError:error()
  return self.msg
end


function TransportrestTransitApisError:__tostring()
  return self.msg
end


return TransportrestTransitApisError
