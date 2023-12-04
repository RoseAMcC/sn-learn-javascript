//
// L10S01 - Arithmetic Operators
//
var a = 0;
var b = 1;
gs.info(a < b); // should return true
gs.info(a > b); // should return false
gs.info(a >= b); // should return false
gs.info(a <= b); // should return true
gs.info(a==b); // double equal signs is the logical comparison 
gs.info(a=b); // single equal sign assign value b to value a
gs.info(a != b); // bang symbol and equal sign is the notation for "not equal"

var n = '3';
var i = 3;
gs.info(n == i); // returns true because values are the same. 
//Use three equal signs to compare character VALUE and character TYPE.
gs.info(n === i) // returns false because values are the same but types are different.
gs.info(i = 4); // WATCH OUT!!!
