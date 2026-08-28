# Typed models for the TransportrestTransitApis SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Arrival(TypedDict, total=False):
    delay: int
    direction: str
    line: dict
    plannedPlatform: str
    plannedWhen: str
    platform: str
    stop: dict
    tripId: str
    when: str


class ArrivalListMatchRequired(TypedDict):
    stop_id: str


class ArrivalListMatch(ArrivalListMatchRequired, total=False):
    duration: int
    result: int
    when: str


class Departure(TypedDict, total=False):
    delay: int
    direction: str
    line: dict
    plannedPlatform: str
    plannedWhen: str
    platform: str
    stop: dict
    tripId: str
    when: str


class DepartureListMatchRequired(TypedDict):
    stop_id: str


class DepartureListMatch(DepartureListMatchRequired, total=False):
    direction: str
    duration: int
    result: int
    when: str


class Journey(TypedDict, total=False):
    legs: list
    refreshToken: str
    type: str


class JourneyListMatchRequired(TypedDict):
    to: str


class JourneyListMatch(JourneyListMatchRequired, total=False):
    arrival: str
    departure: str
    result: int
    stopover: bool


class Location(TypedDict, total=False):
    id: str
    location: dict
    name: str
    products: dict
    type: str


class LocationListMatchRequired(TypedDict):
    query: str


class LocationListMatch(LocationListMatchRequired, total=False):
    address: bool
    poi: bool
    result: int
    stop: bool


class Radar(TypedDict, total=False):
    direction: str
    line: dict
    location: dict
    nextStopovers: list
    tripId: str


class RadarListMatchRequired(TypedDict):
    east: float
    north: float
    south: float
    west: float


class RadarListMatch(RadarListMatchRequired, total=False):
    result: int


class Stop(TypedDict, total=False):
    id: str
    location: dict
    name: str
    products: dict
    station: dict
    type: str


class StopLoadMatch(TypedDict):
    id: str


class Trip(TypedDict, total=False):
    destination: dict
    direction: str
    id: str
    line: dict
    origin: dict
    stopovers: list


class TripLoadMatchRequired(TypedDict):
    id: str


class TripLoadMatch(TripLoadMatchRequired, total=False):
    line_name: str
    stopover: bool
