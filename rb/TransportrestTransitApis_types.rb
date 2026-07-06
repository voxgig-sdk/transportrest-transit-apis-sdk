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
# @!attribute [rw] planned_platform
#   @return [String, nil]
#
# @!attribute [rw] planned_when
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] stop
#   @return [Hash, nil]
#
# @!attribute [rw] trip_id
#   @return [String, nil]
#
# @!attribute [rw] when
#   @return [String, nil]
Arrival = Struct.new(
  :delay,
  :direction,
  :line,
  :planned_platform,
  :planned_when,
  :platform,
  :stop,
  :trip_id,
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
# @!attribute [rw] planned_platform
#   @return [String, nil]
#
# @!attribute [rw] planned_when
#   @return [String, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] stop
#   @return [Hash, nil]
#
# @!attribute [rw] trip_id
#   @return [String, nil]
#
# @!attribute [rw] when
#   @return [String, nil]
Departure = Struct.new(
  :delay,
  :direction,
  :line,
  :planned_platform,
  :planned_when,
  :platform,
  :stop,
  :trip_id,
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
# @!attribute [rw] leg
#   @return [Array, nil]
#
# @!attribute [rw] refresh_token
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Journey = Struct.new(
  :leg,
  :refresh_token,
  :type,
  keyword_init: true
)

# Request payload for Journey#list.
#
# @!attribute [rw] leg
#   @return [Array, nil]
#
# @!attribute [rw] refresh_token
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
JourneyListMatch = Struct.new(
  :leg,
  :refresh_token,
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
# @!attribute [rw] product
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Location = Struct.new(
  :id,
  :location,
  :name,
  :product,
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
# @!attribute [rw] product
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
LocationListMatch = Struct.new(
  :id,
  :location,
  :name,
  :product,
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
# @!attribute [rw] next_stopover
#   @return [Array, nil]
#
# @!attribute [rw] trip_id
#   @return [String, nil]
Radar = Struct.new(
  :direction,
  :line,
  :location,
  :next_stopover,
  :trip_id,
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
# @!attribute [rw] next_stopover
#   @return [Array, nil]
#
# @!attribute [rw] trip_id
#   @return [String, nil]
RadarListMatch = Struct.new(
  :direction,
  :line,
  :location,
  :next_stopover,
  :trip_id,
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
# @!attribute [rw] product
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
  :product,
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
# @!attribute [rw] stopover
#   @return [Array, nil]
Trip = Struct.new(
  :destination,
  :direction,
  :id,
  :line,
  :origin,
  :stopover,
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

