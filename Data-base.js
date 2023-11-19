// Define a class representing a Student
class Student {
    // Constructor to initialize the properties of a student
    constructor(firstName, lastName, id, gpa) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.gpa = gpa;
    }
}

// Create instances of the Student class
const Devon = new Student("Devon", "Harvey", 1234, 2.5);
const Micah = new Student("Micah", "Slaughter", 4563, 2.9);
const Josh = new Student("Josh", "Harwood", 7345, 2.1);

// Array to store instances of the Student class
let students = [Devon, Micah, Josh];

// Function to get a student by their first name
const getStudent = student => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].firstName === student.firstName) {
            console.log(students[i]);
            return true;
        }
    }
    console.log("Student doesn't attend here");
    return false;
}

// Function to create a new student and add them to the students array
const makeStudent = (firstName, lastName, id, gpa) => {
    // Check for invalid student data
    if (!firstName || !lastName || !id || !gpa) {
        console.log("Invalid student data");
        return;
    }

    // Create a new instance of the Student class
    const student = new Student(firstName, lastName, id, gpa);

    // Add the new student to the students array
    students.push(student);

    // Log the new student's information
    console.log("New student info:");
    console.log(student);

    // Log the updated student list
    console.log("Updated student list:");
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].firstName);
    }
}

// Function to remove a student from the students array
const removeStudent = student => {
    // Find the index of the student in the array
    const removedStudent = students.indexOf(student);
    if (removedStudent !== -1) {
        // Remove the student from the array
        students.splice(removedStudent, 1);
        console.log(`You removed ${student.firstName} from the students list`);
    } else {
        console.log(`${student.firstName} wasn't found`);
    }

    // Log the updated students list
    console.log("Updated students list:");
    for (let i = 0; i < students.length; i++) {
        console.log(students[i].firstName);
    }
}

// Example usage of the functions
getStudent(Devon);
makeStudent("Leah", "West", 8341, 1.9);
removeStudent(Josh);
