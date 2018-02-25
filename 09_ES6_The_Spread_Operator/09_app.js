/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
//Ex:
function Employee(x) {
    var values = [];
    for (var i = 0; i < arguments.length; i++) {
        values[i] = arguments[i];
    }
    return values;
    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
}
var employee1 = [101, "Sachin", "Engg"];
var output = Employee.apply(void 0, employee1).join(" ");
document.getElementById('display').innerHTML = output;
// Find minimum of 4 numbers
var myArray = [9, 20, 45, 13];
var minVal = "The min value is " + Math.min.apply(Math, myArray);
console.log(minVal);
