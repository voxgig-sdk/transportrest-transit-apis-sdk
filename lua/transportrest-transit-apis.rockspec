package = "voxgig-sdk-transportrest-transit-apis"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/transportrest-transit-apis-sdk.git"
}
description = {
  summary = "TransportrestTransitApis SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["transportrest-transit-apis_sdk"] = "transportrest-transit-apis_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
