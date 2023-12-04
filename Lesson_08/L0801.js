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

//LAB
//define 3 strings of text
var string1 = 'Chuck';
var string2 = 'Tomasi';
var string3 = 'JavaScript';
//get the length of each string with a label of which string is measured
gs.info('length1 = ' + string1.length);
gs.info('length2 = ' + string2.length);
gs.info('length3 = ' + string3.length);
//concat all strings together with new line spaces and compare number of characters of strings vs. strings concat'd with newlines
var allStrings = string1 + '\n' + string2 + '\n' + string3;
gs.info('allStrings =' + allStrings);
gs.info('length of allStrings =' + allStrings.length);
//new lines will count as a character each
