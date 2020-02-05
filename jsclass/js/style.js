// variables
// let block scope
// var functional scope
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); //it works in case of var key
}

sayHello();

function sayLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i); //it throws error here in case of var key
}
sayLet();

const data = 25;
// data = 25; it throws error  because reassigning to const is not available
const person = {
  name: "ram",
  age: 25,
  isMarried: false
};

console.log(person);

let user = [
  { id: 1, name: "ram", age: 20 },
  { id: 2, name: "ram1", age: 20 },
  { id: 3, name: "ram3", age: 20 }
];

for (let j = 0; j < user.length; j++) {
  console.log(user[j].name);
}

user.forEach(function(user, index, allUser) {
  console.log(user);
}); //it shows all the array list

user.forEach(function(user, index, allUser) {
  console.log(index);
}); // it return array index

user.forEach(function(user, index, allUser) {
  console.log(allUser);
}); //it return existing arraay with indesx as well

let userData = user.map(function(user, index, allUser) {
  return user;
}); //map return at least one things

console.log(userData);

let userData1 = user.map(function(user, index, allUser) {
  return index;
}); //map return at least one things

console.log(userData1);

let filterData = user.filter(function(data) {
  return data.id === 2;
});

console.log(filterData);

let filterData1 = user.filter(function(data) {
  return data.id !== 2;
});

console.log(filterData1);

// spread operator in js

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

let person1 = {
  name: "nabin",
  age: 20
};

let person2 = {
  ...person1,
  job: "programmer"
}; // this makes two array one
console.log(person2);

// Disturing in js
const person3 = {
  name: "nabin",
  hobbies: ["programming", "chatting", "football"],
  address: {
    street: "ktm",
    city: "ktm"
  }
};

const { street, city } = person3.address;
console.log(person3.name);
console.log(person3.hobbies[1]);
console.log(person3.address.street);

// classes in js

class Employee {
  constructor(name, experience, age) {
    this.name = name;
    this.age = age;
  }
}
hari = new Employee("hari", 2, 25);

console.log(hari);

class Programmer extends Employee {
  constructor(name, experience, age, language) {
    super(name, experience, age);
    this.language = language;
  }
}

dinesh = new Programmer("nabin", 2, 20, "Javascript");
console;

// js by dorje

const student = {
  name: "John",
  grade: "Ten"
};
const teacher = {
  name: "Son",
  grade: "Masters",
  degree: "Computer Science"
};
const message = `${teacher.name} teaches ${student.name} and he has done ${teacher.grade} in ${teacher.degree}`;
console.log(message);
const difficult_message =
  teacher.name + "is the math teacher of" + student.name;
console.log(difficult_message);

const messageprint = `Dear sir,
 I would like to inform you . ia m a student of academy.
 
 thank you`;

console.log(messageprint);
//if we use back tick we can print what we write

// disticturing in js
const [day1, day2, day3] = ["s", "n", "t"];

console.log(day1);
console.log(day2);
console.log(day3);

//
const [a, b] = ["s", "n", "t"];

console.log(a);
console.log(b);
//it removes last index but works fine

// disecturing in object

const student1 = {
  one: 1,
  two: 2,
  three: 3
};

console.log(student1.one);
console.log(student1.two);
console.log(student1.three);
//distucturing
const { two, three } = student1;

// console.log(one);
console.log(two);
console.log(three);

//for loop in js
const colors = ["r", "g", "b", "o", "g"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i] + "\n");
}
//for in loop
for (const index in colors) {
  console.log(index);
}

// for of loop
for (const color of colors) {
  console.log(color);
}
// spread
const number = [
  8,
  3,
  4,
  5,
  6,
  7,
  8,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  5,
  6,
  7,
  8,
  9,
  4,
  5,
  6,
  7,
  8,
  9,
  9
];

const num1 = [20, 30, 40, 50, 70];
const num2 = [...number, ...num1]; //unpack garera concatinate garxa
console.log(num2);
console.log(...number); //unpack garxa array lai
console.log(number);
