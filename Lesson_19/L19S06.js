//
// L19S06 - Self running function for UI actions to ensure that no one is messing with local variables
// Global variables can be used when you want a variable to function as a system property
// Global variables can also be used when you want to avoid passing the same parameter over and over and over especially if they require a database query

// This code is outside the function
var i = 20;

(function() {

  // Local variable
  i = 10; // uh-oh, forgot the var! if this is called var i, it is a higher order of precedence and will be used instead of any other i on the system

  gs.info('i=' + i);
  
}());

i = 3;
gs.info('i=' + i);

/*
Produces
*** Script: i=10 (comes from the local variable)
*** Script: i=3 (comes from resetting the value of var i to 3)
*/

var i = 20;

(function() {

  // Local variable
 var i = 10; // if this is called var i, it is a higher order of precedence and will be used instead of any other i on the system

  gs.info('i=' + i);
  
}());

// if this value reset is commented out i = 3;
gs.info('i=' + i);

/*
Code produces this
*** Script: i=10 because this is local
*** Script: i=20 and this is global
*/

var i = 20;

(function() {

  // Local variable
 i = 10; // without var here, this reset of the value will affect the global scope variable

  gs.info('i=' + i);
  
}());

// if this value reset is commented out i = 3;
gs.info('i=' + i);

/*
So this code where i=10 is resetting the global scope variable produces this
*** Script: i=10
*** Script: i=10
*/
