function displayClock() {
    var today = new Date();
    var options = { timeZone: "Asia/Kolkata" };
    var time = today.toLocaleTimeString('en-US', options);
    document.getElementById('display').innerHTML = time;
}
displayClock();
// setInterval(displayClock, 1000);
// Hello World App
/*

DataTypes in TypeScript

1.Boolean
2.Number
3.String
4.array[]
5.any

 */
// Boolean DataType
var isTSEasy = true;
var output = "Is TS Easy? " + isTSEasy;
document.getElementById('display').innerHTML = output;
// Number DataType
var piValue = Math.PI;
output = "The value of PI is " + piValue;
document.getElementById('display').innerHTML = output;
// String DataType
var myName = "Sachin";
output = "My name is " + myName;
document.getElementById('display').innerHTML = output;
// Array[]
var myArray = [10, 20, 30, 40];
output = "My Array = " + myArray.join(" ");
document.getElementById('display').innerHTML = output;
// Any DataType
var someVar = 10;
someVar = "Sachin";
output = "Some Var = " + someVar;
document.getElementById('display').innerHTML = output;
