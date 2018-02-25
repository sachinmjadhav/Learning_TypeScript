class CalculatorApp{

    private static num1:HTMLInputElement;
    private static num2:HTMLInputElement;
    private static operator:HTMLButtonElement;
    private static equals:HTMLButtonElement;
    private static result:HTMLButtonElement;
    private static plus:HTMLButtonElement;
    private static minus:HTMLButtonElement;
    private static div:HTMLButtonElement;
    private static mult:HTMLButtonElement;
    private static clear:HTMLButtonElement;

    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }

    public static initialize(){
        CalculatorApp.num1 = document.querySelector('#num2') as HTMLInputElement;
        CalculatorApp.num2 = document.querySelector('#num2') as HTMLInputElement;
        CalculatorApp.operator = document.querySelector('#operator')as HTMLButtonElement;
        CalculatorApp.equals = document.querySelector('#equals')as HTMLButtonElement;
        CalculatorApp.result = document.querySelector('#result')as HTMLButtonElement;
        CalculatorApp.plus = document.querySelector('#plus')as HTMLButtonElement;
        CalculatorApp.minus = document.querySelector('#minus')as HTMLButtonElement;
        CalculatorApp.div = document.querySelector('#div')as HTMLButtonElement;
        CalculatorApp.mult = document.querySelector('#mult')as HTMLButtonElement;
        CalculatorApp.clear = document.querySelector('#clear')as HTMLButtonElement;
    }

    public static addEventListeners(){
        CalculatorApp.plus.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minus.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.div.addEventListener('click',CalculatorApp.changeOperatorDivide);
        CalculatorApp.mult.addEventListener('click',CalculatorApp.changeOperatorMultiply);
        CalculatorApp.equals.addEventListener('click',CalculatorApp.fetchResults);
        CalculatorApp.clear.addEventListener('click',CalculatorApp.clearAll);
    }

    public static changeOperatorPlus(){
        CalculatorApp.operator.innerHTML = '+';
    }

    public  static changeOperatorMinus(){
        CalculatorApp.operator.innerHTML = '-';
    }

    public static changeOperatorDivide(){
        CalculatorApp.operator.innerHTML = '/';
    }

    public static changeOperatorMultiply(){
        CalculatorApp.operator.innerHTML = '*';
    }

    public static fetchResults(){
        let num1:number = parseFloat(CalculatorApp.num1.value);
        let num2:number = parseFloat(CalculatorApp.num2.value);
        let operation = CalculatorApp.operator.innerHTML.trim();
        let result:number = 0;
        switch(operation){
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
    }

    public static clearAll(){
        CalculatorApp.num1.value = "";
        CalculatorApp.num2.value = "";
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.result.innerHTML = "RESULT";
    }
}

new CalculatorApp();