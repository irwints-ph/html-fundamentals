function greet(name) {
  return "Hello " + name;
}

function TestFn(age = 18) {  
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  // if (age >= 18) {
  //   console.log("Adult");
  // } else {
  //   console.log("Minor");
  // }
}

// const fruits = ["apple", "banana", "mango"];
// const the_name = "ako";

// fruits.forEach(f => {
//   console.log(f);
// });

// let person = {
//   name: "Juan Dela Cruz",
//   age: 20
// };

// console.log(person.name, person.age);

// let name = process.argv[2];

// console.log("Hello " + name);
// TestFn(10);

// console.log(greet("Maria"));

// let snd = process.argv[2]
// const add = require("./math");
// console.log(add(2, parseInt(snd)));

// const fs = require("fs");

// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// let text = true; 

// console.log("text: ",text);

// text = 10; 
// console.log("text: ",text);

// let a = 5;
// let b = 3;

// console.log(a - b); // 8
// console.log(a <= b); // true

// function add(a, b) {
//   return a + b;
// }
// const add = (a, b) => {
//   const sum =  a + b;
//   return sum * 2;  
// };
// console.log(add(2, 5));

// let fruits = ["apple", "banana", "mango"];
// fruits[3] = "Bayabas";
// fruits.push("orange");
// fruits.forEach(f => console.log(f));


let animal = {
  name: "Juan",
  age: 20,
  isStudent: true
};

// console.log(animal.age);

// let users = [
//   { name: "Juan", age: 20 },
//   { name: "Maria", age: 22 }
// ];
// users[1] = { name: "Two", age: 10 };
// // users.push({ name: "Two", age: 10 });
// users.forEach(user => {
//   console.log(user.name);
// });

// let person = { name: "Juan", age: 20 };

// let { name, age } = person;

// console.log(age);

// let person = {
//   name: "Juan",
//   age: 20
// };

// // Convert Object to JSON
// let json = JSON.stringify(person);

// console.log(person);
// console.log(json);

// let data = '{"name":"Maria","age":22}';
// console.log(data);

// let obj = JSON.parse(data);
// console.log(obj["name"]);

// let text = "  hello world  ";

// let result = text
//    .trim()
//    .toUpperCase()
//    .replace("WORLD", "NODE");

// console.log(result);

let numbers = [1, 2, 3, 4, 5];

// let result = numbers
//    .filter(x => x > 2)
//    .map(y => y * 2);

// console.log(result);

// With Error
// ### ❌ Broken chain

// let result = numbers
//   .filter(n => n > 2)
//   .forEach(n => console.log(n))
//   .map(n => n * 2); // ❌ error

// Why?

// * `forEach()` returns `undefined`
// * so `.map()` cannot run

// let result = numbers
//   .filter(n => n > 2)
//   .forEach(n => {return n}) //stil not posible since `forEach()` returns `undefined`
//   .map(n => n * 2); // ❌ error

//Corrected
let result = numbers
  .filter(a => a > 2)
  .map(b => b)
  .map(n => n * 2);

console.log(result);