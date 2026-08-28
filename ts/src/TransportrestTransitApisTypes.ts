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
  plannedPlatform?: string
  plannedWhen?: string
  platform?: string
  stop?: Record<string, any>
  tripId?: string
  when?: string
}

export interface ArrivalListMatch {
  stop_id: string
  duration?: number
  result?: number
  when?: string
}

export interface Departure {
  delay?: number
  direction?: string
  line?: Record<string, any>
  plannedPlatform?: string
  plannedWhen?: string
  platform?: string
  stop?: Record<string, any>
  tripId?: string
  when?: string
}

export interface DepartureListMatch {
  stop_id: string
  direction?: string
  duration?: number
  result?: number
  when?: string
}

export interface Journey {
  legs?: any[]
  refreshToken?: string
  type?: string
}

export interface JourneyListMatch {
  arrival?: string
  departure?: string
  from: string
  result?: number
  stopover?: boolean
  to: string
}

export interface Location {
  id?: string
  location?: Record<string, any>
  name?: string
  products?: Record<string, any>
  type?: string
}

export interface LocationListMatch {
  address?: boolean
  poi?: boolean
  query: string
  result?: number
  stop?: boolean
}

export interface Radar {
  direction?: string
  line?: Record<string, any>
  location?: Record<string, any>
  nextStopovers?: any[]
  tripId?: string
}

export interface RadarListMatch {
  east: number
  north: number
  result?: number
  south: number
  west: number
}

export interface Stop {
  id?: string
  location?: Record<string, any>
  name?: string
  products?: Record<string, any>
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
  stopovers?: any[]
}

export interface TripLoadMatch {
  id: string
  line_name?: string
  stopover?: boolean
}

