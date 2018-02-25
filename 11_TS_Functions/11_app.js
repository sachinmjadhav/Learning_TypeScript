// Create a simple function to add two numbers
function sum(num1, num2) {
    return num1 + num2;
}
var sumVal = sum(10, 20);
var output = " The Sum is " + sumVal;
// document.getElementById('display').innerHTML = output;
// Create the same add function with first number as 'any' type
function addition(num1, num2) {
    if (typeof num1 === 'string') {
        if (isNaN(parseInt(num1, 10))) {
            return 0;
        }
        else {
            num1 = parseInt(num1, 10);
        }
    }
    var sum = num1 + num2;
    return sum;
}
output = "The Sum of '10' and 20 is " + addition('10', 20);
document.getElementById('display').innerHTML = output;
function max(a, b, c) {
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    }
    else {
        if (a > b && b > c) {
            return a;
        }
        else if (b > c) {
            return b;
        }
        else {
            return c;
        }
    }
}
output = "The maximum of 10 is " + max(10);
output = "The maximum of 10, 20 is " + max(10, 20);
output = "The maximum of 10, 20, 30 is " + max(10, 20, 30);
document.getElementById('display').innerHTML = output;
function min(a, b, c) {
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.min(a, b);
    }
    else {
        return Math.min(a, b, c);
    }
}
output = "The minimum of 10, 20, 30 is " + min(10, 20, 30);
document.getElementById('display').innerHTML = output;
// Create an Employee function and get an Employee Object
