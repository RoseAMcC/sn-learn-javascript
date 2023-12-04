//
//  L08S01 - Changing and detecting variable types
//
var i = 5;
// turn something from a different type to a string
var iStr = i.toString();
// helps in troubleshooting
gs.info(typeof i);
gs.info(typeof iStr);

//turn a string into a number
var n = parseInt(iStr);

//Adding strings is concatenation
gs.info(typeof n + ' n=' + n);

//to convert a string to floating point number
var f= parseFloat(iStr)
