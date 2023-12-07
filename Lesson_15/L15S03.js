//
// L15S03 - Continue - jumping back to the while condition
//
var i = 0;
var done = false;
while (!done) { //infinite loop without condition
  if (i < 5) { //this is the condition
    ++i;
    gs.info(i + ' done=' + done);
    continue; //stop and restart and re-evaluate the original condition
  }
  gs.info('I think we are done');
  done = true; //this breaks out of the loop
}
gs.info(i);

/* produces
*** Script: 1 done=false
*** Script: 2 done=false
*** Script: 3 done=false
*** Script: 4 done=false
*** Script: 5 done=false
*** Script: I think we are done
*** Script: 5

Did not print 0 because original code increments first and then prints

For While loops, make sure there is safety escape to get out of the infinite loop in case it's not written correctly.
*/
