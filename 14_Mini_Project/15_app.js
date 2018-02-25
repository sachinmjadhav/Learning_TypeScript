var CalculatorApp = /** @class */ (function () {
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.num1 = document.querySelector('#num2');
        CalculatorApp.num2 = document.querySelector('#num2');
        CalculatorApp.operator = document.querySelector('#operator');
        CalculatorApp.equals = document.querySelector('#equals');
        CalculatorApp.result = document.querySelector('#result');
        CalculatorApp.plus = document.querySelector('#plus');
        CalculatorApp.minus = document.querySelector('#minus');
        CalculatorApp.div = document.querySelector('#div');
        CalculatorApp.mult = document.querySelector('#mult');
        CalculatorApp.clear = document.querySelector('#clear');
    };
    CalculatorApp.addEventListeners = function () {
        CalculatorApp.plus.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minus.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.div.addEventListener('click', CalculatorApp.changeOperatorDivide);
        CalculatorApp.mult.addEventListener('click', CalculatorApp.changeOperatorMultiply);
        CalculatorApp.equals.addEventListener('click', CalculatorApp.fetchResults);
        CalculatorApp.clear.addEventListener('click', CalculatorApp.clearAll);
    };
    CalculatorApp.changeOperatorPlus = function () {
        CalculatorApp.operator.innerHTML = '+';
    };
    CalculatorApp.changeOperatorMinus = function () {
        CalculatorApp.operator.innerHTML = '-';
    };
    CalculatorApp.changeOperatorDivide = function () {
        CalculatorApp.operator.innerHTML = '/';
    };
    CalculatorApp.changeOperatorMultiply = function () {
        CalculatorApp.operator.innerHTML = '*';
    };
    CalculatorApp.fetchResults = function () {
        var num1 = parseFloat(CalculatorApp.num1.value);
        var num2 = parseFloat(CalculatorApp.num2.value);
        var operation = CalculatorApp.operator.innerHTML.trim();
        var result = 0;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            default:
                result = 0;
                break;
        }
        CalculatorApp.result.innerHTML = result + "";
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.num1.value = "";
        CalculatorApp.num2.value = "";
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.result.innerHTML = "RESULT";
    };
    return CalculatorApp;
}());
new CalculatorApp();
