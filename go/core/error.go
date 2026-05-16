package core

type TransportrestTransitApisError struct {
	IsTransportrestTransitApisError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTransportrestTransitApisError(code string, msg string, ctx *Context) *TransportrestTransitApisError {
	return &TransportrestTransitApisError{
		IsTransportrestTransitApisError: true,
		Sdk:              "TransportrestTransitApis",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TransportrestTransitApisError) Error() string {
	return e.Msg
}
