// Create a simple class and usage
class Greeter {
    private greeting: string;

    constructor(name:string) {
        this.greeting = name;
    }

    public greet() {
        return `Good morning ${this.greeting}`;
    }

    public get getGreetMessage() {
        return this.greeting;
    }

    public set setGreetMessage(name: string) {
        this.greeting = name;
    }
}

let greeter = new Greeter("Sachin");

let output = greeter.greet();
document.getElementById('display').innerHTML = output;


greeter.setGreetMessage = "John";
output = greeter.getGreetMessage;
document.getElementById('display').innerHTML = output;

// add a constructor to a class

// add methods to a class

// add getter and setter methods of a class

// Implement an interface and methods and variables of interface