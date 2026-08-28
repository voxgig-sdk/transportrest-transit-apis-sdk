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
---@field duration? number
---@field result? number
---@field when? string

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
---@field direction? string
---@field duration? number
---@field result? number
---@field when? string

---@class Journey
---@field legs? table
---@field refreshToken? string
---@field type? string

---@class JourneyListMatch
---@field arrival? string
---@field departure? string
---@field from string
---@field result? number
---@field stopover? boolean
---@field to string

---@class Location
---@field id? string
---@field location? table
---@field name? string
---@field products? table
---@field type? string

---@class LocationListMatch
---@field address? boolean
---@field poi? boolean
---@field query string
---@field result? number
---@field stop? boolean

---@class Radar
---@field direction? string
---@field line? table
---@field location? table
---@field nextStopovers? table
---@field tripId? string

---@class RadarListMatch
---@field east number
---@field north number
---@field result? number
---@field south number
---@field west number

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
---@field line_name? string
---@field stopover? boolean

local M = {}

return M
