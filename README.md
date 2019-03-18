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

## Available APIs

scenario -> describe
 
feature -> describe 


given -> beforeEach
 
when -> beforeEach 


then -> test
 
and -> test 


xscenario -> xdescribe
 
xfeature -> xdescribe
 
xthen -> xtest
 
xand -> xtest 

## But what if jest changes
Under the hood, this thing uses javascript proxies. I only delegate to the original jest object so you're safe 🥳