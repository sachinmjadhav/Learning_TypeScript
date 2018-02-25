// Create a simple class and usage
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.greeting = name;
    }
    Greeter.prototype.greet = function () {
        return "Good morning " + this.greeting;
    };
    Object.defineProperty(Greeter.prototype, "getGreetMessage", {
        get: function () {
            return this.greeting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Greeter.prototype, "setGreetMessage", {
        set: function (name) {
            this.greeting = name;
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
var greeter = new Greeter("Sachin");
var output = greeter.greet();
document.getElementById('display').innerHTML = output;
greeter.setGreetMessage = "John";
output = greeter.getGreetMessage;
document.getElementById('display').innerHTML = output;
// add a constructor to a class
// add methods to a class
// add getter and setter methods of a class
// Implement an interface and methods and variables of interface
