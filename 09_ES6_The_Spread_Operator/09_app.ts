/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

//Ex:

function Employee(x?:any){

    let values = [];
    for(let i=0; i<arguments.length; i++){
        values[i] = arguments[i];
    }

    return values;

    /*let values = Array.prototype.splice.call(arguments,[0]);
    return values;*/
}



let employee1:any[] = [101, "Sachin", "Engg"];
let output = Employee(...employee1).join(" ");
document.getElementById('display').innerHTML = output;



// Find minimum of 4 numbers
let myArray = [9,20, 45, 13];
let minVal = "The min value is " + Math.min(...myArray);
console.log(minVal);

