function clone<T>( thing: T & Object & Function ): T
{
	return new Proxy( thing, {
		get( ...args )
		{
			return Reflect.get( ...args )
		},
		apply( ...args ): any
		{
			return Reflect.apply( ...args )
		},
	} )
}


export const Scenario: jest.Describe = clone( describe )

export const Feature: jest.Describe = clone( describe )

export const Case: jest.Describe = clone( describe )

export const Given: jest.Lifecycle = clone( beforeEach )

export const When: jest.Lifecycle = clone( beforeEach )

export const Then: jest.It = clone( test )

export const And: jest.It = clone( test )

export const xScenario: jest.Describe = clone( xdescribe )

export const xFeature: jest.Describe = clone( xdescribe )

export const xCase: jest.Describe = clone( xdescribe )

export const xThen: jest.It = clone( xtest )

export const xAnd: jest.It = clone( xtest )

