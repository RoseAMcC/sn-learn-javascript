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

/*
LAB
Create a script that creates 5 teams of 4 people and assigns a unique identifier to each team member.
The scripts should display the team number, person number, and identifier for that person/team.
Avoid displaying zeros (e.g. team 0, player 0) for a better user experience.
*/
var id = 1
for (var team = 1; team<=5; team++){
  for (var member = 1; member<=4; member++){
    gs.info ('team = ' + team + ' member = ' + member + ' id = ' + id);
    ++id;
  }
}

/*
produces
*** Script: team = 1 member = 1 id = 1
*** Script: team = 1 member = 2 id = 2
*** Script: team = 1 member = 3 id = 3
*** Script: team = 1 member = 4 id = 4
*** Script: team = 2 member = 1 id = 5
*** Script: team = 2 member = 2 id = 6
*** Script: team = 2 member = 3 id = 7
*** Script: team = 2 member = 4 id = 8
*** Script: team = 3 member = 1 id = 9
*** Script: team = 3 member = 2 id = 10
*** Script: team = 3 member = 3 id = 11
*** Script: team = 3 member = 4 id = 12
*** Script: team = 4 member = 1 id = 13
*** Script: team = 4 member = 2 id = 14
*** Script: team = 4 member = 3 id = 15
*** Script: team = 4 member = 4 id = 16
*** Script: team = 5 member = 1 id = 17
*** Script: team = 5 member = 2 id = 18
*** Script: team = 5 member = 3 id = 19
*** Script: team = 5 member = 4 id = 20
*/


