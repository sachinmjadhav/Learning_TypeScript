/* Your Code starts from Here */

let number1:HTMLInputElement = document.getElementById("num1") as HTMLInputElement;
let number2:HTMLInputElement = document.getElementById("num2") as HTMLInputElement;

let equals:HTMLAnchorElement = (document.getElementById('equals') as HTMLAnchorElement);
let plus:HTMLAnchorElement = (document.getElementById('plus') as HTMLAnchorElement);
let minus:HTMLAnchorElement = (document.getElementById('minus') as HTMLAnchorElement);
let div:HTMLAnchorElement = (document.getElementById('div') as HTMLAnchorElement);
let mult:HTMLAnchorElement = (document.getElementById('mult') as HTMLAnchorElement);
let operator:HTMLAnchorElement = (document.getElementById('operator') as HTMLAnchorElement);
let result:HTMLAnchorElement = (document.getElementById("result") as HTMLAnchorElement);
let clear:HTMLAnchorElement = (document.getElementById('clear') as HTMLAnchorElement);

let n0:HTMLAnchorElement = document.getElementById('0') as HTMLAnchorElement;
let n1:HTMLAnchorElement = document.getElementById('1') as HTMLAnchorElement;
let n2:HTMLAnchorElement = document.getElementById('2') as HTMLAnchorElement;
let n3:HTMLAnchorElement = document.getElementById('3') as HTMLAnchorElement;
let n4:HTMLAnchorElement = document.getElementById('4') as HTMLAnchorElement;
let n5:HTMLAnchorElement = document.getElementById('5') as HTMLAnchorElement;
let n6:HTMLAnchorElement = document.getElementById('6') as HTMLAnchorElement;
let n7:HTMLAnchorElement = document.getElementById('7') as HTMLAnchorElement;
let n8:HTMLAnchorElement = document.getElementById('8') as HTMLAnchorElement;
let n9:HTMLAnchorElement = document.getElementById('9') as HTMLAnchorElement;



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

let operate = function () {
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    let output:any = "";
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
    (document.getElementById("num1") as HTMLInputElement).value = "";
    (document.getElementById("num2") as HTMLInputElement).value = "";
    (document.getElementById("result") as HTMLAnchorElement).text = "RESULT";
    operator.text = "+";
});