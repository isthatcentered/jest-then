// Allows use a global var:
// `Feature("Does this cool stuff", ()=>...)`
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

// Allows override of node's "global" variable
// global.Scenario = clone( describe )
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