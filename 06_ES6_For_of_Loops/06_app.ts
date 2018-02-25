/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

//Starter

let myArray = ['html','javascript','css','bootstrap'];

let output = "";
for(let index in myArray){
    let value = myArray[index];
    console.log(value);
    output += value + ", ";
    document.getElementById('display').innerHTML = output;
}


// for..of loop

for (let value of myArray) {
    output += value + "- ";
    document.getElementById('display').innerHTML = output;
}
