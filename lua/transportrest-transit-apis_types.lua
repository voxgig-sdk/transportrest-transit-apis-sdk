-- Typed models for the TransportrestTransitApis SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Arrival
---@field delay? number
---@field direction? string
---@field line? table
---@field plannedPlatform? string
---@field plannedWhen? string
---@field platform? string
---@field stop? table
---@field tripId? string
---@field when? string

---@class ArrivalListMatch
---@field stop_id string

---@class Departure
---@field delay? number
---@field direction? string
---@field line? table
---@field plannedPlatform? string
---@field plannedWhen? string
---@field platform? string
---@field stop? table
---@field tripId? string
---@field when? string

---@class DepartureListMatch
---@field stop_id string

---@class Journey
---@field legs? table
---@field refreshToken? string
---@field type? string

---@class JourneyListMatch
---@field legs? table
---@field refreshToken? string
---@field type? string

---@class Location
---@field id? string
---@field location? table
---@field name? string
---@field products? table
---@field type? string

---@class LocationListMatch
---@field id? string
---@field location? table
---@field name? string
---@field products? table
---@field type? string

---@class Radar
---@field direction? string
---@field line? table
---@field location? table
---@field nextStopovers? table
---@field tripId? string

---@class RadarListMatch
---@field direction? string
---@field line? table
---@field location? table
---@field nextStopovers? table
---@field tripId? string

---@class Stop
---@field id? string
---@field location? table
---@field name? string
---@field products? table
---@field station? table
---@field type? string

---@class StopLoadMatch
---@field id string

---@class Trip
---@field destination? table
---@field direction? string
---@field id? string
---@field line? table
---@field origin? table
---@field stopovers? table

---@class TripLoadMatch
---@field id string

local M = {}

return M
