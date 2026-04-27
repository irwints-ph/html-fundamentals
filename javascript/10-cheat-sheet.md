# ⚡ 1. Setup Mindset

You’re using Node as a **JavaScript playground**, not a backend yet.

Run files like:

```bash
node app.js
```

---

# 🧠 2. Core Basics (Foundation)

### Variables

```js
let name = "Juan";
const age = 20;

console.log(name, age);
```

### Data Types

```js
let text = "hello";   // string
let num = 10;         // number
let isTrue = true;    // boolean
let nothing = null;
let undef;
```

---

# ➕ 3. Operators

```js
let a = 5;
let b = 3;

console.log(a + b); // 8
console.log(a > b); // true
```

---

# 🔀 4. Conditionals

```js
let age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

# 🔁 5. Loops

### for loop

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

### while loop

```js
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}
```

---

# 🔧 6. Functions

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

### Arrow function

```js
const multiply = (a, b) => a * b;
```

---

# 📦 7. Arrays

```js
let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);
```

### Useful methods

```js
fruits.push("orange");
fruits.forEach(f => console.log(f));
```

---

# 🧩 8. Objects (VERY IMPORTANT before JSON)

```js
let person = {
  name: "Juan",
  age: 20,
  isStudent: true
};

console.log(person.name);
```

---

# 🔄 9. Arrays of Objects

```js
let users = [
  { name: "Juan", age: 20 },
  { name: "Maria", age: 22 }
];

users.forEach(user => {
  console.log(user.name);
});
```

---

# 🔍 10. Destructuring

```js
let person = { name: "Juan", age: 20 };

let { name, age } = person;

console.log(name);
```

---

# 📘 11. JSON (Data Format)

### JS Object → JSON

```js
let person = {
  name: "Juan",
  age: 20
};

let json = JSON.stringify(person);
console.log(json);
```

### JSON → JS Object

```js
let data = '{"name":"Maria","age":22}';

let obj = JSON.parse(data);

console.log(obj.name);
```

---

# 🔗 12. METHOD CHAINING (IMPORTANT ADDITION)

👉 Chain = multiple transformations in one flow

### Arrays

```js
let nums = [1, 2, 3, 4];

let result = nums
  .filter(n => n > 2)
  .map(n => n * 2);

console.log(result);
```

### Strings

```js
let text = " hello world ";

let clean = text
  .trim()
  .toUpperCase()
  .replace("WORLD", "NODE");

console.log(clean);
```

---

### 🧠 Rule of chaining

* each method MUST return a value
* output becomes input for next step

---

# 🧠 13. PROMISES (ASYNC FOUNDATION)

### Create a Promise

```js
let p = new Promise((resolve, reject) => {
  resolve("Done");
});
```

### Use it

```js
p.then(result => {
  console.log(result);
});
```

---

### Promise chaining

```js
Promise.resolve(5)
  .then(n => n * 2)
  .then(n => n + 10)
  .then(result => console.log(result));
```

---

### Error handling

```js
Promise.reject("Error")
  .catch(err => console.log(err));
```

---

# ⚡ 14. ASYNC / AWAIT (MODERN STYLE)

```js
function wait() {
  return Promise.resolve("Hello");
}

async function run() {
  let result = await wait();
  console.log(result);
}

run();
```

---

### ⚠️ KEY RULE

```js
let x = wait();        // Promise (NOT value)
let y = await wait();  // actual value
```

---

# 🌐 15. FETCH (API / URL DATA)

👉 Fetch = get data from a URL

```js
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();

  console.log(data.name);
}

getUser();
```

---

### Text response

```js
const res = await fetch("https://example.com");
const text = await res.text();
```

---

# 📂 16. NODE FILE + JSON (LOCAL DATA)

### Read JSON file

```js
const fs = require("fs");

let raw = fs.readFileSync("data.json");
let data = JSON.parse(raw);

console.log(data);
```

---

### Write JSON file

```js
const fs = require("fs");

let data = { name: "Maria", age: 22 };

fs.writeFileSync(
  "output.json",
  JSON.stringify(data, null, 2)
);
```

---

# 🧪 17. JSON SERVER (FAKE API)

👉 Turns JSON into REST API

### Run:

```bash
json-server --watch db.json
```

### Fetch data:

```js
async function getUsers() {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();

  console.log(data);
}

getUsers();
```

---

# 🧠 KEY CONCEPTS (FINAL SUMMARY)

## Core Thinking Layers

```txt
Logic → Functions
Data → Objects / JSON
Flow → Chaining
Async → Promises
Modern Async → async/await
API → fetch / json-server
```

---

# 🚀 PRACTICE MISSIONS

### 1. Data transformation

* filter users by age
* map names

### 2. JSON practice

* object → JSON → object

### 3. Chaining practice

* build multi-step array pipeline

### 4. Promise practice

* create delay function

### 5. Async practice

* fetch API data

---

# 🧠 FINAL TAKEAWAY

If you master this cheat sheet:

👉 You understand 80% of JavaScript used in real apps:

* data handling
* async logic
* API consumption
* transformation pipelines
