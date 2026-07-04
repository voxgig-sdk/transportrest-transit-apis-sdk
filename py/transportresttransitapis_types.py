# Typed models for the TransportrestTransitApis SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Arrival:
    delay: Optional[int] = None
    direction: Optional[str] = None
    line: Optional[dict] = None
    planned_platform: Optional[str] = None
    planned_when: Optional[str] = None
    platform: Optional[str] = None
    stop: Optional[dict] = None
    trip_id: Optional[str] = None
    when: Optional[str] = None


@dataclass
class ArrivalListMatch:
    stop_id: str


@dataclass
class Departure:
    delay: Optional[int] = None
    direction: Optional[str] = None
    line: Optional[dict] = None
    planned_platform: Optional[str] = None
    planned_when: Optional[str] = None
    platform: Optional[str] = None
    stop: Optional[dict] = None
    trip_id: Optional[str] = None
    when: Optional[str] = None


@dataclass
class DepartureListMatch:
    stop_id: str


@dataclass
class Journey:
    leg: Optional[list] = None
    refresh_token: Optional[str] = None
    type: Optional[str] = None


@dataclass
class JourneyListMatch:
    leg: Optional[list] = None
    refresh_token: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Location:
    id: Optional[str] = None
    location: Optional[dict] = None
    name: Optional[str] = None
    product: Optional[dict] = None
    type: Optional[str] = None


@dataclass
class LocationListMatch:
    id: Optional[str] = None
    location: Optional[dict] = None
    name: Optional[str] = None
    product: Optional[dict] = None
    type: Optional[str] = None


@dataclass
class Radar:
    direction: Optional[str] = None
    line: Optional[dict] = None
    location: Optional[dict] = None
    next_stopover: Optional[list] = None
    trip_id: Optional[str] = None


@dataclass
class RadarListMatch:
    direction: Optional[str] = None
    line: Optional[dict] = None
    location: Optional[dict] = None
    next_stopover: Optional[list] = None
    trip_id: Optional[str] = None


@dataclass
class Stop:
    id: Optional[str] = None
    location: Optional[dict] = None
    name: Optional[str] = None
    product: Optional[dict] = None
    station: Optional[dict] = None
    type: Optional[str] = None


@dataclass
class StopLoadMatch:
    id: str


@dataclass
class Trip:
    destination: Optional[dict] = None
    direction: Optional[str] = None
    id: Optional[str] = None
    line: Optional[dict] = None
    origin: Optional[dict] = None
    stopover: Optional[list] = None


@dataclass
class TripLoadMatch:
    id: str

