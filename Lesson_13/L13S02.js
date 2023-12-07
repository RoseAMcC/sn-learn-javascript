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

  case 3: // Warning - what's wrong with case 3?
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
