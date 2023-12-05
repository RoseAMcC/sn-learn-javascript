//
// L12S01 - The ternary operator
//
// Could have written...
var valveOpen = true;  //boolean value of true

//old way of writing a standard construct
var openStatusString;
if (valveOpen) // short cut for (valveOpen == true)
  openStatusString = 'open';
else
  openStatusString = 'closed';

gs.info('1: Valve is currently ' + openStatusString);

// Introducing a shortcut way... the ternary operator
// declares variable name, assign comparison condition in the parenthesis, question mark is if true, then first parameter, else second parameter 
var openStatusString = (valveOpen) ? 'open' : 'closed';
gs.info('2: Valve is currently ' + openStatusString);

// Use the ternary operator to convert a boolean STRING to a boolean VALUE
var isOpenString = 'true'
if (isOpenString == 'true')
  gs.info('This is open')
/* isOpenString is NOT a boolean variable it is a string variable. Here the == 'true' portion of the code is necessary.
Running this code without the == 'true' will produce 'This is open' regardless of whether isOpenString is defined 
as 'true' or 'false'. This is because a string variable is non-null, non-zero, non-false value called "falsey".
This is similar to system properties that only return string values.
*/
var isOpenString = 'false'
var isOpen = (isOpenString == 'true') ? true : false
// the above ternary operator has converted the IsOpenString STRING to a the isOpen Boolean Value
// Instead of this
if (isOpenString == 'true')
  gs.info('This is open')

// now we can type this which is a little simpler and shorter
if (isOpen)
  gs.info('This is open');
