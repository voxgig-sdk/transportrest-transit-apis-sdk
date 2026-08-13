# frozen_string_literal: true

# Typed models for the TransportrestTransitApis SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Arrival entity data model.
#
# @!attribute [rw] delay
#   @return [Integer, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] line
#   @return [Hash, nil]
#
# @!attribute [rw] plannedPlatform
#   @return [String, nil]
#
# @!attribute [rw] plannedWhen
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] stop
#   @return [Hash, nil]
#
# @!attribute [rw] tripId
#   @return [String, nil]
#
# @!attribute [rw] when
#   @return [String, nil]
Arrival = Struct.new(
  :delay,
  :direction,
  :line,
  :plannedPlatform,
  :plannedWhen,
  :platform,
  :stop,
  :tripId,
  :when,
  keyword_init: true
)

# Request payload for Arrival#list.
#
# @!attribute [rw] stop_id
#   @return [String]
ArrivalListMatch = Struct.new(
  :stop_id,
  keyword_init: true
)

# Departure entity data model.
#
# @!attribute [rw] delay
#   @return [Integer, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] line
#   @return [Hash, nil]
#
# @!attribute [rw] plannedPlatform
#   @return [String, nil]
#
# @!attribute [rw] plannedWhen
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] stop
#   @return [Hash, nil]
#
# @!attribute [rw] tripId
#   @return [String, nil]
#
# @!attribute [rw] when
#   @return [String, nil]
Departure = Struct.new(
  :delay,
  :direction,
  :line,
  :plannedPlatform,
  :plannedWhen,
  :platform,
  :stop,
  :tripId,
  :when,
  keyword_init: true
)

# Request payload for Departure#list.
#
# @!attribute [rw] stop_id
#   @return [String]
DepartureListMatch = Struct.new(
  :stop_id,
  keyword_init: true
)

# Journey entity data model.
#
# @!attribute [rw] legs
#   @return [Array, nil]
#
# @!attribute [rw] refreshToken
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Journey = Struct.new(
  :legs,
  :refreshToken,
  :type,
  keyword_init: true
)

# Request payload for Journey#list.
#
# @!attribute [rw] legs
#   @return [Array, nil]
#
# @!attribute [rw] refreshToken
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
JourneyListMatch = Struct.new(
  :legs,
  :refreshToken,
  :type,
  keyword_init: true
)

# Location entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] products
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Location = Struct.new(
  :id,
  :location,
  :name,
  :products,
  :type,
  keyword_init: true
)

# Request payload for Location#list.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] products
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
LocationListMatch = Struct.new(
  :id,
  :location,
  :name,
  :products,
  :type,
  keyword_init: true
)

# Radar entity data model.
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] line
#   @return [Hash, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] nextStopovers
#   @return [Array, nil]
#
# @!attribute [rw] tripId
#   @return [String, nil]
Radar = Struct.new(
  :direction,
  :line,
  :location,
  :nextStopovers,
  :tripId,
  keyword_init: true
)

# Request payload for Radar#list.
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] line
#   @return [Hash, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] nextStopovers
#   @return [Array, nil]
#
# @!attribute [rw] tripId
#   @return [String, nil]
RadarListMatch = Struct.new(
  :direction,
  :line,
  :location,
  :nextStopovers,
  :tripId,
  keyword_init: true
)

# Stop entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] products
#   @return [Hash, nil]
#
# @!attribute [rw] station
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Stop = Struct.new(
  :id,
  :location,
  :name,
  :products,
  :station,
  :type,
  keyword_init: true
)

# Request payload for Stop#load.
#
# @!attribute [rw] id
#   @return [String]
StopLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Trip entity data model.
#
# @!attribute [rw] destination
#   @return [Hash, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] line
#   @return [Hash, nil]
#
# @!attribute [rw] origin
#   @return [Hash, nil]
#
# @!attribute [rw] stopovers
#   @return [Array, nil]
Trip = Struct.new(
  :destination,
  :direction,
  :id,
  :line,
  :origin,
  :stopovers,
  keyword_init: true
)

# Request payload for Trip#load.
#
# @!attribute [rw] id
#   @return [String]
TripLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

