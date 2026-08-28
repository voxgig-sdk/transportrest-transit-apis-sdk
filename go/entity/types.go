// Typed models for the TransportrestTransitApis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/transportrest-transit-apis-sdk/go/core"
)

// Arrival is the typed data model for the arrival entity.
type Arrival struct {
	Delay *int `json:"delay,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Line *map[string]any `json:"line,omitempty"`
	PlannedPlatform *string `json:"plannedPlatform,omitempty"`
	PlannedWhen *string `json:"plannedWhen,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Stop *map[string]any `json:"stop,omitempty"`
	TripId *string `json:"tripId,omitempty"`
	When *string `json:"when,omitempty"`
}

// ArrivalListMatch is the typed request payload for Arrival.ListTyped.
type ArrivalListMatch struct {
	StopId string `json:"stop_id"`
	Duration *int `json:"duration,omitempty"`
	Result *int `json:"result,omitempty"`
	When *string `json:"when,omitempty"`
}

// Departure is the typed data model for the departure entity.
type Departure struct {
	Delay *int `json:"delay,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Line *map[string]any `json:"line,omitempty"`
	PlannedPlatform *string `json:"plannedPlatform,omitempty"`
	PlannedWhen *string `json:"plannedWhen,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Stop *map[string]any `json:"stop,omitempty"`
	TripId *string `json:"tripId,omitempty"`
	When *string `json:"when,omitempty"`
}

// DepartureListMatch is the typed request payload for Departure.ListTyped.
type DepartureListMatch struct {
	StopId string `json:"stop_id"`
	Direction *string `json:"direction,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Result *int `json:"result,omitempty"`
	When *string `json:"when,omitempty"`
}

// Journey is the typed data model for the journey entity.
type Journey struct {
	Legs *[]any `json:"legs,omitempty"`
	RefreshToken *string `json:"refreshToken,omitempty"`
	Type *string `json:"type,omitempty"`
}

// JourneyListMatch is the typed request payload for Journey.ListTyped.
type JourneyListMatch struct {
	Arrival *string `json:"arrival,omitempty"`
	Departure *string `json:"departure,omitempty"`
	From string `json:"from"`
	Result *int `json:"result,omitempty"`
	Stopover *bool `json:"stopover,omitempty"`
	To string `json:"to"`
}

// Location is the typed data model for the location entity.
type Location struct {
	Id *string `json:"id,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Products *map[string]any `json:"products,omitempty"`
	Type *string `json:"type,omitempty"`
}

// LocationListMatch is the typed request payload for Location.ListTyped.
type LocationListMatch struct {
	Address *bool `json:"address,omitempty"`
	Poi *bool `json:"poi,omitempty"`
	Query string `json:"query"`
	Result *int `json:"result,omitempty"`
	Stop *bool `json:"stop,omitempty"`
}

// Radar is the typed data model for the radar entity.
type Radar struct {
	Direction *string `json:"direction,omitempty"`
	Line *map[string]any `json:"line,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	NextStopovers *[]any `json:"nextStopovers,omitempty"`
	TripId *string `json:"tripId,omitempty"`
}

// RadarListMatch is the typed request payload for Radar.ListTyped.
type RadarListMatch struct {
	East float64 `json:"east"`
	North float64 `json:"north"`
	Result *int `json:"result,omitempty"`
	South float64 `json:"south"`
	West float64 `json:"west"`
}

// Stop is the typed data model for the stop entity.
type Stop struct {
	Id *string `json:"id,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Products *map[string]any `json:"products,omitempty"`
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
	Stopovers *[]any `json:"stopovers,omitempty"`
}

// TripLoadMatch is the typed request payload for Trip.LoadTyped.
type TripLoadMatch struct {
	Id string `json:"id"`
	LineName *string `json:"line_name,omitempty"`
	Stopover *bool `json:"stopover,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
