//
// L15S01 - Simple while loop
//
var i = 0;
while (i < 5) { //until the value is = 5
  gs.info(i); //print the value
  i++; //increment the value
} //need curly braces because there are two statements 
gs.info('done i=' + i);

/* produces the following:
*** Script: 0
*** Script: 1
*** Script: 2
*** Script: 3
*** Script: 4
*** Script: done i=5
*/

