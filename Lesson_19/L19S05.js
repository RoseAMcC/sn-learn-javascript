//
// L19S05 - Global variables and local
//
var convertTo = 'F'; // this is a global variable set to F

function toCelsius(f) { // this function converts to Celsius

    var c = (5 / 9) * (f - 32);
        
    return c;
}

function toFahrenheit(c) { // this function converts to Fahrenheit

    var f = c * 9 / 5 + 32;
        
    return f;
}

function convertTemp(temp) { // this is a master function that indicates this is a temperature conversion instead of always declaring numbers at this point

  // use the global variable to determine conversion
  if (convertTo == 'C') { //calling the var convertTo variable to check if we want to run Celsius or Fahrenheit function
    return toCelsius(temp); // calling a function in a function breaks down complex code into smaller blocks for scalability
  } else {
    return toFahrenheit(temp);
  }
}

gs.info(convertTemp(100));

/*
Produces
*** Script: 212
*/

var convertTo = 'C'; // this is a global variable set to C

function toCelsius(f) { // this function converts to Celsius

    var c = (5 / 9) * (f - 32);
        
    return c;
}

function toFahrenheit(c) { // this function converts to Fahrenheit

    var f = c * 9 / 5 + 32;
        
    return f;
}

function convertTemp(temp) { // this is a master function that indicates this is a temperature conversion instead of always declaring numbers at this point

  // use the global variable to determine conversion
  if (convertTo == 'C') { //calling the var convertTo variable to check if we want to run Celsius or Fahrenheit function
    return toCelsius(temp); // calling a function in a function breaks down complex code into smaller blocks for scalability
  } else {
    return toFahrenheit(temp);
  }
}

gs.info(convertTemp(100));

/*
Produces
*** Script: 37.77777777777778
*/
