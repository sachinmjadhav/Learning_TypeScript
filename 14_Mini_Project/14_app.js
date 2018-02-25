/* Your Code starts from Here */
var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var equals = document.getElementById('equals');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var div = document.getElementById('div');
var mult = document.getElementById('mult');
var operator = document.getElementById('operator');
var result = document.getElementById("result");
var clear = document.getElementById('clear');
var n0 = document.getElementById('0');
var n1 = document.getElementById('1');
var n2 = document.getElementById('2');
var n3 = document.getElementById('3');
var n4 = document.getElementById('4');
var n5 = document.getElementById('5');
var n6 = document.getElementById('6');
var n7 = document.getElementById('7');
var n8 = document.getElementById('8');
var n9 = document.getElementById('9');
n1.addEventListener("click", function () {
    number1.value += "1";
    return number1;
});
n2.addEventListener("click", function () {
    number1.value += "2";
    return number1;
});
n3.addEventListener("click", function () {
    number1.value += "3";
    return number1;
});
n4.addEventListener("click", function () {
    number1.value += "4";
    return number1;
});
n5.addEventListener("click", function () {
    number1.value += "5";
    return number1;
});
n6.addEventListener("click", function () {
    number1.value += "6";
    return number1;
});
n7.addEventListener("click", function () {
    number1.value += "7";
    return number1;
});
n8.addEventListener("click", function () {
    number1.value += "8";
    return number1;
});
n9.addEventListener("click", function () {
    number1.value += "9";
    return number1;
});
n0.addEventListener("click", function () {
    number1.value += "0";
    return number1;
});
plus.addEventListener("click", function () {
    operator.text = "+";
});
minus.addEventListener("click", function () {
    operator.text = "-";
});
div.addEventListener("click", function () {
    operator.text = "/";
});
mult.addEventListener("click", function () {
    operator.text = "*";
});
var operate = function () {
    var num1 = parseFloat(number1.value);
    var num2 = parseFloat(number2.value);
    var output = "";
    switch (operator.text) {
        case "+":
            output = num1 + num2;
            break;
        case "-":
            output = num1 - num2;
            break;
        case "/":
            output = num1 / num2;
            break;
        case "*":
            output = num1 * num2;
            break;
        default:
            output = "";
            break;
    }
    result.text = output;
    return output;
};
equals.addEventListener("click", operate);
clear.addEventListener("click", function () {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").text = "RESULT";
    operator.text = "+";
});
