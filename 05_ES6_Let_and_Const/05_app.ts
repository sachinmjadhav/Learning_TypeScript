/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/

//problem
// let vs var

for (var i = 0; i<=10; i++) {

}
var output = "The value of i is: " + i;
document.getElementById('display').innerHTML = output;


for (let j = 10; j <=10; j++) {

}
output = " The Value of j is " + j;     // not able to access 'j' using 'let'


// Const example:
const MONTH_NAME = "January";
output = "The month is : " + MONTH_NAME;
document.getElementById('display').innerHTML = output;

// MONTH_NAME = "Febraury";    // Compilation Error: cannot re-assign the const variable.











// for (var i = 0; i <=10; i++) {
//
// }
// document.getElementById('container').innerHTML =  i;
//
// for (let j = 0; j <=10; j++) {
//
// }
// document.getElementById('container').innerHTML =  j;