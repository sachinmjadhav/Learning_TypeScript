/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
//Starter
var myArray = ['html', 'javascript', 'css', 'bootstrap'];
var output = "";
for (var index in myArray) {
    var value = myArray[index];
    console.log(value);
    output += value + ", ";
    document.getElementById('display').innerHTML = output;
}
// for..of loop
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    output += value + "- ";
    document.getElementById('display').innerHTML = output;
}
