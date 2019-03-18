# Jest-then
## The problem
"describe" and "it" are great, but they don't really speak and guide your thinking during the testing process.
Jest-then provides new keywords to help give your tests meaning and differentiate between the Arrange Act Assert part of each test.

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