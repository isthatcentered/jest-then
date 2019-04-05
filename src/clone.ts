export function clone<T>( thing: T & Object & Function ): T
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