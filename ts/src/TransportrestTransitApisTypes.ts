// Typed models for the TransportrestTransitApis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Arrival {
  delay?: number
  direction?: string
  line?: Record<string, any>
  planned_platform?: string
  planned_when?: string
  platform?: string
  stop?: Record<string, any>
  trip_id?: string
  when?: string
}

export interface ArrivalListMatch {
  stop_id: string
}

export interface Departure {
  delay?: number
  direction?: string
  line?: Record<string, any>
  planned_platform?: string
  planned_when?: string
  platform?: string
  stop?: Record<string, any>
  trip_id?: string
  when?: string
}

export interface DepartureListMatch {
  stop_id: string
}

export interface Journey {
  leg?: any[]
  refresh_token?: string
  type?: string
}

export type JourneyListMatch = Partial<Journey>

export interface Location {
  id?: string
  location?: Record<string, any>
  name?: string
  product?: Record<string, any>
  type?: string
}

export type LocationListMatch = Partial<Location>

export interface Radar {
  direction?: string
  line?: Record<string, any>
  location?: Record<string, any>
  next_stopover?: any[]
  trip_id?: string
}

export type RadarListMatch = Partial<Radar>

export interface Stop {
  id?: string
  location?: Record<string, any>
  name?: string
  product?: Record<string, any>
  station?: Record<string, any>
  type?: string
}

export interface StopLoadMatch {
  id: string
}

export interface Trip {
  destination?: Record<string, any>
  direction?: string
  id?: string
  line?: Record<string, any>
  origin?: Record<string, any>
  stopover?: any[]
}

export interface TripLoadMatch {
  id: string
}

