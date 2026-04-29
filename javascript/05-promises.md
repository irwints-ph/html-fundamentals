# 🧠 JavaScript Promises — Beginner Tutorial

## 1. What is a Promise?

A **Promise** is an object that represents the result of an asynchronous operation (something that takes time, like fetching data).

Think of it like a “future value.”

A Promise has **3 states**:

* **Pending** → still working
* **Fulfilled** → success (`resolve`)
* **Rejected** → failed (`reject`)

---

## 2. Creating a Basic Promise

```js
let p = new Promise((resolve) => {
  resolve("Done");
});

console.log(p);
```

### What’s happening:

* You create a Promise
* It immediately calls `resolve("Done")`
* The Promise becomes **fulfilled**
* `p` now holds a **Promise object**, not the raw value
* To access `"Done"`, you must use `.then()` (or `await`)

---

### 🔍 Why `console.log(p)` doesn’t give the value directly

```js
console.log(p);
```

Output will look like:

```
Promise { 'Done' }
```

That’s because:

* JavaScript does **not automatically unwrap** the value inside a Promise
* Promises are designed for asynchronous operations
* Even if resolved immediately, the value is accessed through a handler

---

## 3. Getting the Result with `.then()`

```js id="p2"
let p = new Promise((resolve) => {
  resolve("Done");
});

p.then(result => {
  console.log(result);
});
```

### Output:

```
Done
```

👉 `.then()` runs when the Promise is **fulfilled**

---

### 🧠 Mental Model

Think of a Promise like a **sealed box**:

* `p` → the box
* `"Done"` → the value inside
* `.then()` / `await` → opening the box

---

## 4. Handling Errors with `reject`

Now let’s look at a **rejected** Promise:

```js id="p3"
let p = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

p
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
```

### Output:

```
Something went wrong
```

### Key idea:

* `reject()` → triggers `.catch()`
* `.then()` is skipped if there’s an error

---

## 5. Alternative: Error Handling in `.then()`

```js id="p4"
let p = new Promise((resolve, reject) => {
  reject("Failed");
});

p.then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error);
  }
);
```

👉 The second function in `.then()` handles errors (but `.catch()` is cleaner)

---

## 6. Realistic Example (Success vs Failure)

```js id="p5"
let success = false;

let p = new Promise((resolve, reject) => {
  if (success) {
    resolve("Done");
  } else {
    reject("Error occurred");
  }
});

p
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

👉 This simulates real-world logic (like API calls)

---

## 7. Asynchronous Example (Important!)

Promises are most useful with delays:

```js id="p6"
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Finished after 2 seconds");
  }, 2000);
});

p.then(result => console.log(result));
```

👉 Output appears after 2 seconds

---

## 8. Using `async/await` (Modern Way)

Instead of `.then()` and `.catch()`, you can write:

```js id="p7"
async function run() {
  let p = new Promise((resolve, reject) => {
    resolve("Done");
  });

  try {
    let result = await p;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

run();
```

### Why this is better:

* Looks like normal code
* Easier to read

---

## 9. Quick Summary

* `new Promise((resolve, reject) => {})` → creates a Promise
* `resolve(value)` → success
* `reject(error)` → failure
* `.then()` → handles success
* `.catch()` → handles errors
* `async/await` → cleaner syntax

---

## 10. Mental Model

Think of a Promise like ordering food:

* ⏳ Pending → waiting for your order
* ✅ Fulfilled → food arrives (`resolve`)
* ❌ Rejected → kitchen error (`reject`)
