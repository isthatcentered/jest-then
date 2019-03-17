import { and, feature, given, scenario, then, when, xand, xfeature, xscenario, xthen } from "./main"




scenario( ``, () => {
	given((  ) => {})
	when((  ) => {})
	then( ``, () => expect( true ).toBe( true ) )
	and( ``, () => expect( true ).toBe( true ) )
	xthen( ``, () => expect( true ).toBe( true ) )
	xand( ``, () => expect( true ).toBe( true ) )
} )

feature( ``, () => {
	then( ``, () => expect( true ).toBe( true ) )
} )

xscenario( ``, () => {
	then( ``, () => expect( true ).toBe( true ) )
} )

xfeature( ``, () => {
	then( ``, () => expect( true ).toBe( true ) )
} )

