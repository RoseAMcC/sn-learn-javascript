//
// L19S02 - Function with a parameter
//
function toCelsius(fahrenheit) { //Parameter is fahrenheit

    var c = (5 / 9) * (fahrenheit - 32);  // this is the calculation. var c is a floating point number with at conversion formula from the internet

    gs.info(c); // this is the output and it happens at the same time as the calculation
}
toCelsius(32); // we want to run this function twice, once with a fahrenheit temp of 32
toCelsius(100); // then we run the function again with the fahrenheit temp of 100

/*
Produces
*** Script: 0
*** Script: 37.77777777777778
*/


