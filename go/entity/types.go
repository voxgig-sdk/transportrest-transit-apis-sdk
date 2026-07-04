// Typed models for the TransportrestTransitApis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Arrival is the typed data model for the arrival entity.
type Arrival struct {
	Delay *int `json:"delay,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Line *map[string]any `json:"line,omitempty"`
	PlannedPlatform *string `json:"planned_platform,omitempty"`
	PlannedWhen *string `json:"planned_when,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Stop *map[string]any `json:"stop,omitempty"`
	TripId *string `json:"trip_id,omitempty"`
	When *string `json:"when,omitempty"`
}

// ArrivalListMatch is the typed request payload for Arrival.ListTyped.
type ArrivalListMatch struct {
	StopId string `json:"stop_id"`
}

// Departure is the typed data model for the departure entity.
type Departure struct {
	Delay *int `json:"delay,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Line *map[string]any `json:"line,omitempty"`
	PlannedPlatform *string `json:"planned_platform,omitempty"`
	PlannedWhen *string `json:"planned_when,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Stop *map[string]any `json:"stop,omitempty"`
	TripId *string `json:"trip_id,omitempty"`
	When *string `json:"when,omitempty"`
}

// DepartureListMatch is the typed request payload for Departure.ListTyped.
type DepartureListMatch struct {
	StopId string `json:"stop_id"`
}

// Journey is the typed data model for the journey entity.
type Journey struct {
	Leg *[]any `json:"leg,omitempty"`
	RefreshToken *string `json:"refresh_token,omitempty"`
	Type *string `json:"type,omitempty"`
}

// JourneyListMatch mirrors the journey fields as an all-optional match
// filter (Go analog of Partial<Journey>).
type JourneyListMatch struct {
	Leg *[]any `json:"leg,omitempty"`
	RefreshToken *string `json:"refresh_token,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Location is the typed data model for the location entity.
type Location struct {
	Id *string `json:"id,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Product *map[string]any `json:"product,omitempty"`
	Type *string `json:"type,omitempty"`
}

// LocationListMatch mirrors the location fields as an all-optional match
// filter (Go analog of Partial<Location>).
type LocationListMatch struct {
	Id *string `json:"id,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Product *map[string]any `json:"product,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Radar is the typed data model for the radar entity.
type Radar struct {
	Direction *string `json:"direction,omitempty"`
	Line *map[string]any `json:"line,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	NextStopover *[]any `json:"next_stopover,omitempty"`
	TripId *string `json:"trip_id,omitempty"`
}

// RadarListMatch mirrors the radar fields as an all-optional match
// filter (Go analog of Partial<Radar>).
type RadarListMatch struct {
	Direction *string `json:"direction,omitempty"`
	Line *map[string]any `json:"line,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	NextStopover *[]any `json:"next_stopover,omitempty"`
	TripId *string `json:"trip_id,omitempty"`
}

// Stop is the typed data model for the stop entity.
type Stop struct {
	Id *string `json:"id,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Product *map[string]any `json:"product,omitempty"`
	Station *map[string]any `json:"station,omitempty"`
	Type *string `json:"type,omitempty"`
}

// StopLoadMatch is the typed request payload for Stop.LoadTyped.
type StopLoadMatch struct {
	Id string `json:"id"`
}

// Trip is the typed data model for the trip entity.
type Trip struct {
	Destination *map[string]any `json:"destination,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Id *string `json:"id,omitempty"`
	Line *map[string]any `json:"line,omitempty"`
	Origin *map[string]any `json:"origin,omitempty"`
	Stopover *[]any `json:"stopover,omitempty"`
}

// TripLoadMatch is the typed request payload for Trip.LoadTyped.
type TripLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
