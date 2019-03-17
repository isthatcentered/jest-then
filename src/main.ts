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


export const scenario: jest.Describe = clone( describe )

export const feature: jest.Describe = clone( describe )

export const given: jest.Lifecycle = clone( beforeEach )

export const when: jest.Lifecycle = clone( beforeEach )

export const xscenario: jest.Describe = clone( xdescribe )

export const xfeature: jest.Describe = clone( xdescribe )

export const then: jest.It = clone( test )

export const and: jest.It = clone( test )

export const xthen: jest.It = clone( xtest )

export const xand: jest.It = clone( xtest )

