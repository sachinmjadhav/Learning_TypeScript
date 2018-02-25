/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
//Starter
var array = [10001, 'naveen', 'TechLead'];
// Normal function
// function addFn (array) {
//     let id = array[0];
//     let myName = array[1];
//     let designation = array[2];
// }
// Using Destructuring
function addFn(array) {
    var id = array[0], myName = array[1], designation = array[2];
    var output = id + " : " + myName + " : " + designation;
    document.getElementById('display').innerHTML = output;
}
addFn(array);
// Best usage is to exchange the value btw a & b
var a = 10;
var b = 20;
// Normal way
// let temp = b;
// b = a;
// a = temp;
// let output = `a value is ${a}, and b value is ${b}`;
// console.log(output);
// document.getElementById('display').innerHTML = output;
// Using Destructing from ES6
_a = [a, b], b = _a[0], a = _a[1];
var output = "a value is " + a + ", and b value is " + b;
var _a;
// console.log(output);
// document.getElementById('display').innerHTML = output;
// This is even works for Objects
