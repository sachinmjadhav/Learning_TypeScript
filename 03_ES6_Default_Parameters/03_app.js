/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Starter Function
function countdownStarter(final, initial, interval) {
    var current = initial;
    // let output = " ";
    while (current < final) {
        // output += " " + current;
        // console.log(current);
        current += interval;
        // document.getElementById('display').innerHTML = output;
    }
}
countdownStarter(10, 0, 1);
// Completed Function
function countdownCompleted(final, initial, interval) {
    if (initial === void 0) { initial = 0; }
    if (interval === void 0) { interval = 3; }
    var current = initial;
    var output = " ";
    while (current < final) {
        output += " " + current;
        current += interval;
        console.log(current);
        document.getElementById('display').innerHTML = output;
    }
}
countdownCompleted(10);
