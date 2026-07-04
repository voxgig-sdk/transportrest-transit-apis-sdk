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
    planned_platform: str
    planned_when: str
    platform: str
    stop: dict
    trip_id: str
    when: str


class ArrivalListMatch(TypedDict):
    stop_id: str


class Departure(TypedDict, total=False):
    delay: int
    direction: str
    line: dict
    planned_platform: str
    planned_when: str
    platform: str
    stop: dict
    trip_id: str
    when: str


class DepartureListMatch(TypedDict):
    stop_id: str


class Journey(TypedDict, total=False):
    leg: list
    refresh_token: str
    type: str


class JourneyListMatch(TypedDict, total=False):
    leg: list
    refresh_token: str
    type: str


class Location(TypedDict, total=False):
    id: str
    location: dict
    name: str
    product: dict
    type: str


class LocationListMatch(TypedDict, total=False):
    id: str
    location: dict
    name: str
    product: dict
    type: str


class Radar(TypedDict, total=False):
    direction: str
    line: dict
    location: dict
    next_stopover: list
    trip_id: str


class RadarListMatch(TypedDict, total=False):
    direction: str
    line: dict
    location: dict
    next_stopover: list
    trip_id: str


class Stop(TypedDict, total=False):
    id: str
    location: dict
    name: str
    product: dict
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
    stopover: list


class TripLoadMatch(TypedDict):
    id: str
