# Jest-then
## The problem
"describe" and "it" are great, but they don't really speak and guide your thinking during the testing process.
Jest-then provides new keywords to help give your tests meaning and differentiate between the Arrange Act Assert part of each test.

## What does it look like ?
```typescript
feature( `A user can sign-in`, () => {	
	scenario( `Success`, () => {
		given( () => {
			// ... pre-conditions for scenario to work
			when( authProvider.isAuthenticated() ).thenReturn( false )
			when( authProvider.signup( credentials ) ).thenResolve()
		} )
		
		then( `A loader is displayed`, async () => {
			// ... code
			
		} )
		
		and( `A success message is passed to the view`, () => {
			// ... code
		} )
		
		and( `User is redirected to home after a timeout`, async () => {
			// ... code
		} )
	} )
	
	scenario( `Sign-up error`, () => {
		given( () => {
			// ... pre-conditions for scenario to work
			when( authProvider.isAuthenticated() ).thenReturn( false )
			when( authProvider.signup( credentials ) ).thenReject( error )
		} )
		
		then( `An error message is passed to the view`, async () => {
			// ... code
		} )
		
		and( `Loader is disabled`, async () => {
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
| scenario      | describe | 
| feature       | describe|
| given         |   beforeEach |
| when          |   beforeEach  |
| then          |   test/it |
| and           |   test/it|


## But what if jest changes
Under the hood, this thing uses javascript proxies. I only delegate to the original jest object so you're safe 🥳