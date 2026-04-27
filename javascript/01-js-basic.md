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

# 🔍 10. Destructuring (cleaner access)

```js
let person = { name: "Juan", age: 20 };

let { name, age } = person;

console.log(name);
```

---

# 📘 11. JSON (Your Target)

JSON = **text format for data**

### JS Object → JSON

```js
let person = {
  name: "Juan",
  age: 20
};

let json = JSON.stringify(person);

console.log(json);
```

👉 Output:

```json
{"name":"Juan","age":20}
```

---

### JSON → JS Object

```js
let data = '{"name":"Maria","age":22}';

let obj = JSON.parse(data);

console.log(obj.name);
```

---

# 📂 12. Read JSON File (Node Practice)

### data.json

```json
{
  "name": "Juan",
  "age": 20
}
```

### app.js

```js
const fs = require("fs");

let raw = fs.readFileSync("data.json");
let data = JSON.parse(raw);

console.log(data.name);
```

---

# ✍️ 13. Write JSON File

```js
const fs = require("fs");

let data = {
  name: "Maria",
  age: 22
};

fs.writeFileSync("output.json", JSON.stringify(data, null, 2));
```

---

# 🧠 Key Concepts to Master

Before moving forward, make sure you’re solid on:

* variables (`let`, `const`)
* functions
* arrays (`map`, `forEach`)
* objects
* JSON (`parse`, `stringify`)

---

# 🚀 Suggested Practice (Important)

Try these in Node:

1. Create an array of users → print all names
2. Convert object → JSON → back to object
3. Read a JSON file → modify → save it
4. Filter users by age

Example:

```js
let users = [
  { name: "Juan", age: 20 },
  { name: "Maria", age: 17 }
];

let adults = users.filter(u => u.age >= 18);

console.log(adults);
```
