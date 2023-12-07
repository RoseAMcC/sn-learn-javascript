//
// L17S01 - do-while
//the critical factor here is the loop runs at least once
// Use any time you want the code to run at least once
// Anything that has something outside the loop asking if the loops needs to run is a candidate for a do while loop.
var i = 0;
gs.info('start');
do { 
  gs.info('i=' + i);
  ++i;
} while (i < 5);
gs.info('done i=' + i);
/*
produces
*** Script: start
*** Script: i=0
*** Script: i=1
*** Script: i=2
*** Script: i=3
*** Script: i=4
*** Script: done i=5
*/
