import "./types"
import { clone } from "./clone"




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


