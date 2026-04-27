# ⚡ 1. What is Node.js?

**Node.js** lets you run JavaScript on your computer instead of a browser.

👉 Example:

```bash
node app.js
```

---

# 🧱 2. Your First Node Script

Create `app.js`:

```js id="n1a23"
console.log("Hello from Node!");
```

Run it:

```bash
node app.js
```

---

# 🧠 3. Variables

```js id="n2b34"
let name = "Juan";
const age = 20;

console.log(name, age);
```

---

# ➕ 4. Functions

```js id="n3c45"
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Maria"));
```

---

# 🔀 5. Conditions

```js id="n4d56"
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

# 🔁 6. Loops

```js id="n5e67"
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

# 📦 7. Arrays

```js id="n6f78"
let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple
```

Loop through:

```js id="n7g89"
fruits.forEach(fruit => {
  console.log(fruit);
});
```

---

# 🧩 8. Objects

```js id="n8h90"
let person = {
  name: "Juan",
  age: 20
};

console.log(person.name);
```

---

# 📥 9. Input from Terminal

Use built-in `process.argv`:

```js id="n9i01"
let name = process.argv[2];

console.log("Hello " + name);
```

Run:

```bash
node app.js Juan
```

---

# 📁 10. Modules (Important in Node)

Split code into files.

### math.js

```js id="n10j12"
function add(a, b) {
  return a + b;
}

module.exports = add;
```

### app.js

```js id="n11k23"
const add = require("./math");

console.log(add(2, 3));
```

---

# 📂 11. File System (Read files)

```js id="n12l34"
const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

# 🚀 12. Simple Server (Core Node)

```js id="n13m45"
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(3000);
```

Run:

```bash
node app.js
```

Open browser:
👉 [http://localhost:3000](http://localhost:3000)

---

# ⚡ Key Differences (Node vs Browser)

| Feature     | Browser JS | Node.js  |
| ----------- | ---------- | -------- |
| Runs in     | Browser    | Terminal |
| DOM access  | Yes        | No       |
| File system | No         | Yes      |
| Use case    | UI         | Backend  |

---

# 🧠 Mental Model

* Browser JS → interacts with **web page**
* Node.js → interacts with **system (files, server, OS)**
