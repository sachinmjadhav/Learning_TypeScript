
function displayClock():void {
    let today:Date = new Date();
    let options:object = { timeZone:"Asia/Kolkata"};
    let time:string = today.toLocaleTimeString('en-US', options);
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
let isTSEasy:boolean = true;
let output:string = "Is TS Easy? " + isTSEasy;
document.getElementById('display').innerHTML = output;


// Number DataType
let piValue:number = Math.PI;
output = "The value of PI is " + piValue;
document.getElementById('display').innerHTML = output;


// String DataType
let myName:string = "Sachin";
output = "My name is " + myName;
document.getElementById('display').innerHTML = output;

// Array[]
let myArray:number[] = [10, 20, 30, 40];
// output = "My Array = " + myArray.join(" ");
output = `My Array = ${myArray.join(" ")}`;
document.getElementById('display').innerHTML = output;

// Any DataType
let someVar:any  = 10;
someVar = "Sachin";
output = "Some Var = " + someVar;
document.getElementById('display').innerHTML = output;