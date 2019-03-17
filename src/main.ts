export const scenario: jest.Describe = new Proxy( describe, {
	get( ...args )
	{
		return Reflect.get( ...args )
	},
	apply( ...args ): any
	{
		return Reflect.apply( ...args )
	},
} )

export const feature: jest.Describe = new Proxy( describe, {
	get( ...args )
	{
		return Reflect.get( ...args )
	},
	apply( ...args ): any
	{
		return Reflect.apply( ...args )
	},
} )


export const xscenario: jest.Describe = new Proxy( xdescribe, {
	get( ...args )
	{
		return Reflect.get( ...args )
	},
	apply( ...args ): any
	{
		return Reflect.apply( ...args )
	},
} )

export const xfeature: jest.Describe = new Proxy( xdescribe, {
	get( ...args )
	{
		return Reflect.get( ...args )
	},
	apply( ...args ): any
	{
		return Reflect.apply( ...args )
	},
} )