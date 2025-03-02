// Base User class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

// Student class inheriting from User
class Student extends User {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }

    enroll() {
        console.log(`Student ${this.name} has enrolled.`);
    }
}

// Instructor class inheriting from User
class Instructor extends User {
    constructor(name, email, instructorId) {
        super(name, email);
        this.instructorId = instructorId;
    }

    assignGrade() {
        console.log(`Instructor ${this.name} assigned a grade.`);
    }
}

// Export the classes for external use
module.exports = { User, Student, Instructor };
