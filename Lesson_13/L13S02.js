//
// L13S02 - Multiple cases: Used in place of multiple Else If statement, and is clearer and easier to maintain
//SYNTAX
/* switch (variable) {
    case 0:
    break;

    case 1: (no break statement functions as an OR statement)
    case 2:
    break;

    case 3: 
    break;

    default:
}

// Using the switch statement
var level = 5;
var message = '';
switch (level) {
  case 0:
    message = 'Empty';
    break;

  case 1:
  case 2:
    message = 'Low';
    break;

  case 3: // Warning - what's wrong with case 3? No break statement, meaning it will "fall through" to case 4 and never show
    message = 'Medium';
  case 4:
    message = 'High';
    break;

  case 5:
    message = 'Full';
    break;

  default:
    message = 'Uh-oh!';
}
gs.info('Level=' + level + ' status=' + message);

//An example 
var language = 'German' // language we want to translate to, this is the variable we would change to get different cases
var fromString = 'Hello world' //string of text we want to translate
var toString = ''; // the result variable that we will redefine based on case

switch (language){ // if the language variable
    case 'German': // is set to German
        toString = 'Hallo Welt'; // return this info
        break;
    case 'French':  // is set to French
        toString = 'Bonjour le monde'; // Use this info
        break;
    case 'Spanish': // is set to Spanish
        toString = 'Hola Mundo'; // Use this info
        break;
    default: // does not match one of the defined cases
        toString = '***UNDEFINED LANGUAGE***'; // use this info
}

gs.info(fromString + ' in ' + language + ' ==> ' + toString);
/* this code puts the switch statement and variables into a grammatical statement to display contents of the fromString
variable in a sentance with the language variable and the value set in the toString variable by the switch statement
*/


    
    
