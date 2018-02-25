// Create a Student Interface , and printStudent function

interface Student {
    name: string;
    age: number;
    group: string;
    address: {
        city: string;
        state: string;
        country: string;
    }
}


function printStudent(student:Student) {
    let output = JSON.stringify(student);
    console.log(output);
    document.getElementById('display').innerHTML = output;
}

let student1 = {
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