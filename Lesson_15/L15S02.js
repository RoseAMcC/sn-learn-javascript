//
// L15S02 - breaking out of a while loop
//
var i = 0;
while (true) {//infinite loop because true is always true
  if (i == 5) //so this is the condition
    break; //gets out of the loop
  gs.info(i); 
  ++i; // equals to 5 only works because we are incrementing by 1, bu if we incremented by 2, we would skip over 5 entirely, so the condition would need to be >=
}
gs.info('done');

/* also produces
*** Script: 0
*** Script: 1
*** Script: 2
*** Script: 3
*** Script: 4
*** Script: done i=5
*/
