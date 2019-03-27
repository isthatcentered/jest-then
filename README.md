# Jest-then
## The problem
"describe" and "it" are great, but they don't really speak and guide your thinking during the testing process.
Jest-then provides new keywords to help give your tests meaning and differentiate between the Arrange Act Assert part of each test.

## What does it look like ?
```typescript
import "jest-then" // This make given, when, ... available as global variable

Feature( `A user can sign-in`, () => {	
	Scenario( `Success`, () => {
		Given( () => {
			// ... pre-conditions for scenario to work
			When( authProvider.isAuthenticated() ).thenReturn( false )
			When( authProvider.signup( credentials ) ).thenResolve()
		} )
		
		Then( `A loader is displayed`, async () => {
			// ... code
			
		} )
		
		And( `A success message is passed to the view`, () => {
			// ... code
		} )
		
		And( `User is redirected to home after a timeout`, async () => {
			// ... code
		} )
	} )
	
	Scenario( `Sign-up error`, () => {
		Given( () => {
			// ... pre-conditions for scenario to work
			When( authProvider.isAuthenticated() ).thenReturn( false )
			When( authProvider.signup( credentials ) ).thenReject( error )
		} )
		
		Then( `An error message is passed to the view`, async () => {
			// ... code
		} )
		
		And( `Loader is disabled`, async () => {
			// ... code
		} )
		
		// ... etc
	} )
} )
```

## Available keywords
> Note, you can still use their full api. meaning you can use `xscenario` or `scenario.only` as you would with `describe` or `it`  😇

| Keyword       | Alias for    |      
| ------------- |-------------| 
| Scenario      | describe | 
| Feature       | describe|
| Case       | describe|
| Given         |   beforeEach |
| When          |   beforeEach  |
| Then          |   test/it |
| And           |   test/it|


## But what if jest changes
Under the hood, this thing uses javascript proxies. I only delegate to the original jest object so you're safe 🥳