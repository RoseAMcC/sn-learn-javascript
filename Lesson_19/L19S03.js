//
// L19S03 - Function with a return value
//
function toCelsius(fahrenheit) {

    return (5 / 9) * (fahrenheit - 32); // if we want to run a calculation and get a single value out of function

}
var c = toCelsius(32); // we call the function to run for the fahrenheight value '32', and now we are storing in variable var c
gs.info(c);
c = toCelsius(212); // then we take variable c and rework it for fahrenheight value '212'
gs.info(c);

/*
Produces
*** Script: 0
*** Script: 100
*/

