// Create a Student Interface , and printStudent function
function printStudent(student) {
    var output = JSON.stringify(student);
    console.log(output);
    document.getElementById('display').innerHTML = output;
}
var student1 = {
    name: "John",
    age: 25,
    group: "CSC",
    address: {
        city: "Hyd",
        state: "Telangana",
        country: "India"
    }
};
printStudent(student1);
