## 📘 Overview

Today is about connecting **HTML → JavaScript interaction**.

You’ll learn how to:

* Select elements from the DOM
* Listen for user actions (events)
* Handle form submissions
* Stop page reloads
* Capture and use input values

By the end, you’ll be able to build interactive forms that actually “do something” in JavaScript.

---

# 🧠 1. DOM Selection

DOM = Document Object Model (your HTML represented in JS)

### 🔹 Common ways to select elements

```js
document.getElementById("myId");
document.querySelector(".myClass");
document.querySelector("input");
document.querySelectorAll("input");
```

### 🧪 Example

```html
<input id="username" />
```

```js
const input = document.getElementById("username");
console.log(input);
```

---

# ⚡ 2. Events

Events are user actions like:

* click
* submit
* input typing
* hover

### 🔹 Basic syntax

```js
element.addEventListener("event", function () {
  // code here
});
```

### 🧪 Example: Click event

```html
<button id="btn">Click me</button>
```

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("Button clicked!");
});
```

---

# 🧾 3. Forms & Submit Handling

Forms naturally try to reload the page when submitted.

We stop that behavior.

---

## 🔥 preventDefault()

Stops default browser behavior (like page reload).

```js
event.preventDefault();
```

---

### 🧪 Example Form

```html
<form id="loginForm">
  <input type="text" id="email" placeholder="Email" />
  <input type="password" id="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>
```

```js
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops page reload

  console.log("Form submitted!");
});
```

---

# 📥 4. Capturing Input Values

Use `.value` to get user input.

---

### 🧪 Example

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Email:", email);
  console.log("Password:", password);
});
```

---

# 🧪 Mini Practice Tasks

## ✅ Task 1: Simple Logger

* Create a form with one input
* Log the value on submit

---

## ✅ Task 2: Full Form Capture

* Email + Password
* Prevent reload
* Log both values

---

## ✅ Task 3: Bonus Challenge

* If email is empty → show alert `"Email required"`
* If password is empty → show alert `"Password required"`

---

# 🎯 Goal Recap

```txt
Connect HTML + JS interaction
```

By now you should understand:

* How JS “talks” to HTML
* How users trigger code
* How to capture real input data
* How to control browser behavior
