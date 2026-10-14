// // const students = [
// //   { name: 'Alice', age: 20, grade: 'A' },
// //   { name: 'Bob', age: 22, grade: 'B' },
// //   { name: 'Charlie', age: 21, grade: 'A' }
// // ];
// // const studentNames = students.map(student => student.name);
// // console.log(studentNames); // Output: ['Alice', 'Bob', 'Charlie']
// // const studentAges = students.map(student => student.age);
// // console.log(studentAges); // Output: [20, 22, 21]
// // const studentsWithGradeA = students.filter(student => student.grade === 'A');
// // console.log(studentsWithGradeA); 
// // // Output: [{ name: 'Alice', age: 20, grade: 'A' }, { name: 'Charlie', age: 21, grade: 'A' }]   
// // const averageAge = students.reduce((total, student) => total + student.age, 0) / students.length;
// // console.log(averageAge); // Output: 21
// // const studentNamesString = students.map(student => student.name).join(', ');
// // console.log(studentNamesString); // Output: 'Alice, Bob, Charlie'
// // const studentNamesfind = students.find(student => student.name === 'Bob');
// // console.log(studentNamesfind); // Output: { name: 'Bob', age: 22, grade: 'B' }
// // const studentNamespush = students.push({ name: 'David', age: 23, grade: 'C' });
// // console.log(students); 
// // // Output: [ { name: 'Alice', age: 20, grade: 'A' }, { name: 'Bob', age: 22, grade: 'B' }, { name: 'Charl
// // // ie', age: 21, grade: 'A' }, { name: 'David', age: 23, grade: 'C' } ]
// // const studentNamespop = students.pop();
// // console.log(students); 
// // // Output: [ { name: 'Alice', age: 20, grade: 'A' }, { name: 'Bob', age: 22, grade: 'B' }, { name: 'Charlie', age: 21, grade: 'A' } ]   
// // const studentNamesShift = students.shift();
// // console.log(students);
// // // Output: [ { name: 'Bob', age: 22, grade: 'B' }, { name: 'Charlie', age: 21, grade: 'A' } ]
// // const studentNamesUnshift = students.unshift({ name: 'Eve', age: 19, grade: 'A' });
// // console.log(students);
// // // Output: [ { name: 'Eve', age: 19, grade: 'A' }, { name: 'Bob', age: 22, grade: 'B' }, { name: 'Charlie', age: 21, grade: 'A' } ] 
// // const studentNamesSlice = students.slice(0, 2);
// // console.log(studentNamesSlice);
// // // Output: [ { name: 'Eve', age: 19, grade: 'A' }, { name: 'Bob', age: 22, grade: 'B' } ]
// // const studentNamesSplice = students.splice(1, 1);
// // console.log(students);
// // // Output: [ { name: 'Eve', age: 19, grade: 'A' }, { name: 'Charlie', age: 21, grade: 'A' } ]
// // const studentNamesSort = students.sort((a, b) => a.age - b.age);
// // console.log(students);
// // // Output: [ { name: 'Eve', age: 19, grade: 'A' }, { name: 'Charlie', age: 21, grade: 'A' } ]
// const student={ name: 'Frank', age: 24, grade: 'B',  greet: function() { console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); } };
// student.greet();
// student.age = 25;
// student.greet();
// student.updateGrade = function(newGrade) { this.grade = newGrade; };
// student.updateGrade('A');
// console.log(student.grade); // Output: 'A'
// student.deleteProperty = function(property) { delete this[property]; };
// student.deleteProperty('grade');
// console.log(student.grade); // Output: undefined
// student.addProperty = function(property, value) { this[property] = value; };
// student.addProperty('hobby', 'reading');
// console.log(student.hobby); // Output: 'reading'
// student.updateProperty = function(property, value) { if (this.hasOwnProperty(property)) { this[property] = value; } };
// student.updateProperty('hobby', 'swimming');
// console.log(student.hobby); // Output: 'swimming'
// student.bracketNotation = function(property) { return this[property]; };
// console.log(student.bracketNotation('name')); // Output: 'Frank'
// student.methodChaining = function() { this.age += 1; return this; };
// student.methodChaining().methodChaining();
// console.log(student.age); // Output: 27
// const mark={ maths: 90, physics: 85, chemistry: 95 };
// console.log(Object.keys(mark)); // Output: ['maths', 'physics', 'chemistry']
// console.log(Object.values(mark));   
// console.log(Object.values(mark).reduce((total, value) => total + value, 0)); // Output: 270
// console.log(Object.entries(mark)); // Output: [['maths', 90], ['physics', 85], ['chemistry', 95]]
// console.log(0??5);
const array = [120, 60, 899];
console.log(array.reduce((total, value) => total + value, 0)); // Output: 1079

const name=["sadas","sadas","asdas"];
console.log(name.find((element)=>element==="sadas")); // Output: 'sadas

const students={name:'Alice',age:20,grade:'A', greet: function() { console.log(`Hello, my name is ${this.name}`);}};
    students.greet(); //


async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.map(user => console.log(user.name));
}

getUsers();