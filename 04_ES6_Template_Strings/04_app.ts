/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/


// Starter

let employee = {
    name: 'John',
    age: 40,
    desg: 'Software Engg'
};

let stringConcat = "<div>" +
                        "<h1> Name: " + employee.name +  "</h1>" +
                        "<h1> Age: " + employee.age +  "</h1>" +
                        "<h1> Designation: " + employee.desg +  "</h1>" +
                    "</div>";

document.getElementById('container').innerHTML = stringConcat;

let templateString = `<div> 
                            <h1> Name: ${employee.name}</h1>
                            <h1> Age: ${employee.age}</h1>
                            <h1> Designation: ${employee.desg}</h1>
                      </div>`;

document.getElementById('container').innerHTML = templateString;










// let employee = {
//     id:1001,
//     name:"Naveen",
//     designation:"Technical Lead"
// };
//
// let displayName =  `<h1>Meet Mr . ${employee.name} </h1>`;
// console.log(displayName);
// document.getElementById('container').innerHTML = displayName;