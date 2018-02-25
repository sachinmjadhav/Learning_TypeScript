/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */

/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/

let isClassSunday:boolean = true;
let output = `Is class Sunday ? ${isClassSunday}`;
document.getElementById('display').innerHTML = output;


/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/

let typeScriptVersion:number = 2.7;
output = `TypeScript version is ${typeScriptVersion}`;
document.getElementById('display').innerHTML = output;




/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */


let courseName:string = "TypeScript";
output = `The course name is ${courseName}`;
document.getElementById('display').innerHTML = output;


// You can also use template strings, which can span multiple lines and have embedded expressions.



/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */

let uiTechnologies:string[] = ["HTML", "CSS", "JavaScript", "TypeScript"];
output = `UI Technolgies are : ${uiTechnologies.join(", ")}`;
document.getElementById('display').innerHTML = output;
/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */
enum Month {
    'January' = 'JAN',
    'February' = 'FEB',
    'March' = 'MAR'
}

let monthName:Month = Month.January;
output = `Month Name is: ${monthName}`;
document.getElementById('display').innerHTML = output;



/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */

let anyVal:any = true;



/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */

function greet(name):void {
    let output = `Good Evening ${name}`;
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
greet("Sachin");




/*
    undefined and null
    these datatypes are used to assign values to themselves
 */


let desg:null;
console.log(typeof desg);