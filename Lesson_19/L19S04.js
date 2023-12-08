//
// L19S04 - Local variables scope
//
function toCelsius(fahrenheit) {

    // c is only known in the function toCelsius()
    var c = (5 / 9) * (fahrenheit - 32);

    return c;
}
gs.info(c); // What happened?

/*
Produces and error in service now
Evaluator: com.glide.script.RhinoEcmaError: "c" is not defined.
   script : Line(8) column(0)
      5: 
      6:     return c;
      7: }
==>   8: gs.info(c); // What happened?
*/
function toCelsius(fahrenheit) {

    // c is only known in the function toCelsius()
    var c = (5 / 9) * (fahrenheit - 32); // this is local scope var c

    return c;
}
var c = toCelsius(100) // this is the global scope var c 
gs.info(c); // What happened?
/*
Produces
*** Script: 37.77777777777778
*/
