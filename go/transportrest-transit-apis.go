package voxgigtransportresttransitapissdk

import (
	"github.com/voxgig-sdk/transportrest-transit-apis-sdk/go/core"
	"github.com/voxgig-sdk/transportrest-transit-apis-sdk/go/entity"
	"github.com/voxgig-sdk/transportrest-transit-apis-sdk/go/feature"
	_ "github.com/voxgig-sdk/transportrest-transit-apis-sdk/go/utility"
)

// Type aliases preserve external API.
type TransportrestTransitApisSDK = core.TransportrestTransitApisSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TransportrestTransitApisEntity = core.TransportrestTransitApisEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TransportrestTransitApisError = core.TransportrestTransitApisError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewArrivalEntityFunc = func(client *core.TransportrestTransitApisSDK, entopts map[string]any) core.TransportrestTransitApisEntity {
		return entity.NewArrivalEntity(client, entopts)
	}
	core.NewDepartureEntityFunc = func(client *core.TransportrestTransitApisSDK, entopts map[string]any) core.TransportrestTransitApisEntity {
		return entity.NewDepartureEntity(client, entopts)
	}
	core.NewJourneyEntityFunc = func(client *core.TransportrestTransitApisSDK, entopts map[string]any) core.TransportrestTransitApisEntity {
		return entity.NewJourneyEntity(client, entopts)
	}
	core.NewLocationEntityFunc = func(client *core.TransportrestTransitApisSDK, entopts map[string]any) core.TransportrestTransitApisEntity {
		return entity.NewLocationEntity(client, entopts)
	}
	core.NewRadarEntityFunc = func(client *core.TransportrestTransitApisSDK, entopts map[string]any) core.TransportrestTransitApisEntity {
		return entity.NewRadarEntity(client, entopts)
	}
	core.NewStopEntityFunc = func(client *core.TransportrestTransitApisSDK, entopts map[string]any) core.TransportrestTransitApisEntity {
		return entity.NewStopEntity(client, entopts)
	}
	core.NewTripEntityFunc = func(client *core.TransportrestTransitApisSDK, entopts map[string]any) core.TransportrestTransitApisEntity {
		return entity.NewTripEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTransportrestTransitApisSDK = core.NewTransportrestTransitApisSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTransportrestTransitApisSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TransportrestTransitApisSDK  { return NewTransportrestTransitApisSDK(nil) }
func Test() *TransportrestTransitApisSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
