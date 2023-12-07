//
// L18S01 - Nested loops
//
for (var i = 0; i < 5; i++) { // this will run 5 times
  for (var j = 0; j < 3; j++) { // this will run 3 times
    gs.info('i=' + i + ' j=' + j); // values of i incrementing every third value of j, can be used for cross multiplication
  }
}
gs.info('Done i=' + i + ' j=' + j);

/* produces
*** Script: i=0 j=0
*** Script: i=0 j=1
*** Script: i=0 j=2
*** Script: i=1 j=0
*** Script: i=1 j=1
*** Script: i=1 j=2
*** Script: i=2 j=0
*** Script: i=2 j=1
*** Script: i=2 j=2
*** Script: i=3 j=0
*** Script: i=3 j=1
*** Script: i=3 j=2
*** Script: i=4 j=0
*** Script: i=4 j=1
*** Script: i=4 j=2
*** Script: Done i=5 j=3
*/
