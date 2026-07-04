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
---@field planned_platform? string
---@field planned_when? string
---@field platform? string
---@field stop? table
---@field trip_id? string
---@field when? string

---@class ArrivalListMatch
---@field stop_id string

---@class Departure
---@field delay? number
---@field direction? string
---@field line? table
---@field planned_platform? string
---@field planned_when? string
---@field platform? string
---@field stop? table
---@field trip_id? string
---@field when? string

---@class DepartureListMatch
---@field stop_id string

---@class Journey
---@field leg? table
---@field refresh_token? string
---@field type? string

---@class JourneyListMatch

---@class Location
---@field id? string
---@field location? table
---@field name? string
---@field product? table
---@field type? string

---@class LocationListMatch

---@class Radar
---@field direction? string
---@field line? table
---@field location? table
---@field next_stopover? table
---@field trip_id? string

---@class RadarListMatch

---@class Stop
---@field id? string
---@field location? table
---@field name? string
---@field product? table
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
---@field stopover? table

---@class TripLoadMatch
---@field id string

local M = {}

return M
