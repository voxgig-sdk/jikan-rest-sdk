package core

type JikanRestError struct {
	IsJikanRestError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewJikanRestError(code string, msg string, ctx *Context) *JikanRestError {
	return &JikanRestError{
		IsJikanRestError: true,
		Sdk:              "JikanRest",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *JikanRestError) Error() string {
	return e.Msg
}
