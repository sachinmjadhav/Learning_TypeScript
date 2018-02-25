// Create a simple function to add two numbers
function sum(num1:number, num2:number):number {
    return num1 + num2;
}

let sumVal:number = sum(10, 20);
let output = ` The Sum is ${sumVal}`;
// document.getElementById('display').innerHTML = output;


// Create the same add function with first number as 'any' type
function addition (num1:any, num2:number) {
    if(typeof num1 === 'string') {
        if(isNaN(parseInt(num1, 10))){
            return 0;
        }
        else {
            num1 = parseInt(num1, 10);
        }
    }
    let sum:number = num1 + num2;
    return sum;
}

output = `The Sum of '10' and 20 is ${addition('10',20)}`;
document.getElementById('display').innerHTML = output;


// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
function max(a:number):number;
function max(a:number, b:number):number;
function max(a:number, b:number, c:number):number;
function max(a:number, b?:number, c?:number):number {
    if (b === undefined && c === undefined) {
        return a;
    }
    else if(c === undefined) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
        else {
            if (a > b && b > c) {
                return a;
            } else if (b > c) {
                return b;
            } else {
                return c;
            }
        }
}

output = "The maximum of 10 is " + max(10);
output = "The maximum of 10, 20 is " + max(10,20);
output = "The maximum of 10, 20, 30 is " + max(10,20, 30);

document.getElementById('display').innerHTML = output;


// Find minimum of 1, 2, 3 numbers using function overloading
function min(a:number):number;
function min(a:number, b:number):number;
function min(a:number, b:number, c:number):number;
function min(a:number, b?:number, c?:number):number{
    if(b === undefined && c === undefined) {
        return a;
    }
    else if ( c === undefined) {
        return Math.min(a, b);
    }
    else {
        return Math.min(a, b, c);
    }
}

output = "The minimum of 10, 20, 30 is " + min(10, 20, 30);
document.getElementById('display').innerHTML = output;




// Create an Employee function and get an Employee Object
