const { Student, Instructor } = require("./education");

// Creating a Student instance
const student1 = new Student("Alice Johnson", "alice@example.com", "S123");
student1.getDetails(); // Output: Name: Alice Johnson, Email: alice@example.com
student1.enroll(); // Output: Student Alice Johnson has enrolled.

// Creating an Instructor instance
const instructor1 = new Instructor("Dr. Robert Smith", "robert@example.com", "I456");
instructor1.getDetails(); // Output: Name: Dr. Robert Smith, Email: robert@example.com
instructor1.assignGrade(); // Output: Instructor Dr. Robert Smith assigned a grade.
