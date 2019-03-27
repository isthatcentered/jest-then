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


declare const Scenario: jest.Describe;
declare const Feature: jest.Describe;
declare const Case: jest.Describe;
declare const Given: jest.Lifecycle;
declare const When: jest.Lifecycle;
declare const Then: jest.It;
declare const And: jest.It;
declare const xScenario: jest.Describe;
declare const xFeature: jest.Describe;
declare const xCase: jest.Describe;
declare const xThen: jest.It;
declare const xAnd: jest.It;

declare module NodeJS
{
	interface Global
	{
		Scenario: jest.Describe;
		Feature: jest.Describe;
		Case: jest.Describe;
		Given: jest.Lifecycle;
		When: jest.Lifecycle;
		Then: jest.It;
		And: jest.It;
		xScenario: jest.Describe;
		xFeature: jest.Describe;
		xCase: jest.Describe;
		xThen: jest.It;
		xAnd: jest.It;
	}
}

global.Scenario = clone( describe )
global.Feature = clone( describe )
global.Case = clone( describe )
global.Given = clone( beforeEach )
global.When = clone( beforeEach )
global.Then = clone( test )
global.And = clone( test )
global.xScenario = clone( xdescribe )
global.xFeature = clone( xdescribe )
global.xCase = clone( xdescribe )
global.xThen = clone( xtest )
global.xAnd = clone( xtest )

