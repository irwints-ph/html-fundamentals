# 🧠 JAVASCRIPT THROUGH NODE — 10 DAY STUDY PLAN

---

# 🟢 DAY 1 — JavaScript Fundamentals

## 📘 Lesson

* variables (`let`, `const`)
* data types
* console output
* basic operators

## 💻 Practice

```js id="d1a"
let name = "Juan";
let age = 20;

console.log(name);
console.log(age + 5);
```

## 🎯 Goal

Understand:

> “How JS stores and prints data”

---

# 🟢 DAY 2 — Control Flow

## 📘 Lesson

* if / else
* comparison operators
* loops (`for`, `while`)

## 💻 Practice

```js id="d2a"
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

```js id="d2b"
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

## 🎯 Goal

Understand:

> “How JS makes decisions and repeats logic”

---

# 🟡 DAY 3 — Functions Core

## 📘 Lesson

* functions
* parameters
* return values

## 💻 Practice

```js id="d3a"
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

## 🎯 Goal

Understand:

> “How to package logic into reusable blocks”

---

# 🟡 DAY 4 — Arrow Functions + Callbacks

## 📘 Lesson

* arrow functions
* functions as values
* callbacks

## 💻 Practice

```js id="d4a"
const multiply = (a, b) => a * b;

console.log(multiply(3, 4));
```

```js id="d4b"
function process(fn) {
  return fn(5);
}

console.log(process(x => x * 2));
```

## 🎯 Goal

Understand:

> “Functions are data too”

---

# 🟠 DAY 5 — Arrays & Objects

## 📘 Lesson

* arrays
* objects
* nested structures

## 💻 Practice

```js id="d5a"
let users = [
  { name: "Juan", age: 20 },
  { name: "Maria", age: 22 }
];

console.log(users[0].name);
```

## 🎯 Goal

Understand:

> “How JS structures real-world data”

---

# 🔵 DAY 6 — JSON (Data Format Layer)

## 📘 Lesson

* JSON vs object
* stringify
* parse

## 💻 Practice

```js id="d6a"
let obj = { name: "Juan", age: 20 };

let json = JSON.stringify(obj);
let back = JSON.parse(json);

console.log(back.name);
```

## 🎯 Goal

Understand:

> “How data moves between systems”

---

# 🟣 DAY 7 — Method Chaining (Flow Thinking)

## 📘 Lesson

* chaining concept
* arrays: map/filter
* return-value rule

## 💻 Practice

```js id="d7a"
let nums = [1, 2, 3, 4];

let result = nums
  .filter(n => n > 2)
  .map(n => n * 2);

console.log(result);
```

## 🎯 Goal

Understand:

> “Data flows through transformations step-by-step”

---

# 🔴 DAY 8 — Promises (Async Foundation)

## 📘 Lesson

* what a promise is
* states
* then / catch
* chaining promises

## 💻 Practice

```js id="d8a"
let p = new Promise((resolve) => {
  resolve("Done");
});

p.then(result => {
  console.log(result);
});
```

```js id="d8b"
Promise.resolve(5)
  .then(n => n * 2)
  .then(n => console.log(n));
```

## 🎯 Goal

Understand:

> “Future values + async flow foundation”

---

# 🔵 DAY 9 — Async/Await (Modern Async)

## 📘 Lesson

* async functions
* await
* error handling
* replacing .then()

## 💻 Practice

```js id="d9a"
function wait() {
  return Promise.resolve("Hello");
}

async function run() {
  let result = await wait();
  console.log(result);
}

run();
```

## 🎯 Goal

Understand:

> “Async code that looks synchronous”

---

# 🧠 DAY 9.5 — PROMISE REVISIT (CRITICAL)

## 📘 Lesson

* Promise vs resolved value
* why variables hold Promises
* how await unwraps values

## 💻 Practice

```js id="d9b"
function test() {
  return Promise.resolve("data");
}

let x = test(); // Promise
console.log(x);

async function run() {
  let y = await test(); // actual value
  console.log(y);
}

run();
```

## 🎯 Goal

Understand:

> “The difference between a Promise and its value”

---

# 🟤 DAY 10 — JSON Server + Real Data Flow

## 📘 Lesson

* json-server
* REST endpoints
* fetch with async/await

## 💻 Practice

```js id="d10a"
async function getUsers() {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();

  console.log(data);
}

getUsers();
```

## 🎯 Goal

Understand:

> “How real applications move data”

---

# 🧠 FINAL MINDSET SHIFT

After 10 days you should see JS like this:

```txt id="final"
Logic (functions)
  ↓
Data (objects/JSON)
  ↓
Flow (chaining)
  ↓
Time (promises)
  ↓
Async clarity (await)
  ↓
Real API systems (json-server)
```
