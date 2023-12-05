//
// S11S01 - If Statements
//
var a = 1;
var b = 3;
var c = 5;
if (a < b)
  gs.info('a is less than b');
//if there are more than one item that needs to happen after the if condition, it should be denoted with curly braces
if (a < b) {
  gs.info('a is less than b');
  gs.info(Chuck was here);
}  
// for shortcutting to a true statement
var bool = a < b
if (bool) {
  gs.info('a is less than b');
  gs.info('Chuck was here');
}
// else
if (a < b)
  gs.info('a is less than b');
else
  gs.info('a is greater than or equal to b');
// it is recommended to use curly braces for even single lines to make adding to the code easier later
// Else if and else if for comparing multiple cases
if (a < b)
  gs.info('a is less than b');
else if (a > b)
  gs.info('a is greater than b');
else if (a == b)
  gs.info('a equals b');
else
  gs.info('Uh-oh');

if (a < b)
  if (b < c)
      gs.info('a b c are in order');
