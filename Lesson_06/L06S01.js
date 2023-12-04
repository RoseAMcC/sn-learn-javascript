//
// L06S01 - Strings
//
var firstName = "Chuck";
var lastName  = 'Tomasi';  // Either is ok
var myCar     = "Chuck's Car";  // Mix them to avoid issues Single Quotes inside Double Quotes will allow for apostrophes

// Note the use of + when strings are involved
var name = firstName + ' ' + lastName;
gs.info(name);
gs.info('length of name=' + name.length);// very common in debugging. "length of name" before the = is a label for the value
