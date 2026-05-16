package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewArrivalEntityFunc func(client *TransportrestTransitApisSDK, entopts map[string]any) TransportrestTransitApisEntity

var NewDepartureEntityFunc func(client *TransportrestTransitApisSDK, entopts map[string]any) TransportrestTransitApisEntity

var NewJourneyEntityFunc func(client *TransportrestTransitApisSDK, entopts map[string]any) TransportrestTransitApisEntity

var NewLocationEntityFunc func(client *TransportrestTransitApisSDK, entopts map[string]any) TransportrestTransitApisEntity

var NewRadarEntityFunc func(client *TransportrestTransitApisSDK, entopts map[string]any) TransportrestTransitApisEntity

var NewStopEntityFunc func(client *TransportrestTransitApisSDK, entopts map[string]any) TransportrestTransitApisEntity

var NewTripEntityFunc func(client *TransportrestTransitApisSDK, entopts map[string]any) TransportrestTransitApisEntity

