//
// L14S03 - Truthy and Falsy: is there something valid or not?
//

// Take a look at strings
//
var string1; // this string is undefined.
var string2 = null; // defined to null
var string3 = 'Hello, world!';
gs.info('string1=' + ((string1) ? 'true' : 'false'));
gs.info('string2=' + ((string2) ? 'true' : 'false'));
gs.info('string3=' + ((string3) ? 'true' : 'false'));
// with an undefined 'falsey' value, it can be used like a boolean value like the code below
if (string1) { //if string1 is true show the following message, but nothing shows because string1 is undefined and thus falsey
  gs.info ('string1 has something valid');
}
