//
// L05S01 - Common error messages
//Error: "myUnknownVariable" is not defined.
gs.info(myUnknownVariable);
//Fix is to declare a variable
var myUnknownVariable = "Chuck"
//Javascript compiler exception: unterminated string literal (null.null.script; line 5) in:
ga.info('Hello, world!);
//Fix needs single quote
ga.info('Hello, world!');
//Error: "ga" is not defined
//gs is a built in library that we work with, ga is not. fix is to use gs instead.
var myUnknownVariable = "Chuck"
gs.info(myUnknownVariable);
gs.info('Hello, world!');
//what is 3+2*5
// Written one way, this will equal 13
gs.info(3 + 2 *5) 
// Written another way, this will equal 25
gs.info((3 + 2) *5) 
