# ⚡ 1. What is JavaScript?

JavaScript lets you:

* respond to user actions (clicks, typing)
* update content dynamically
* control behavior of your page

---

# 🧩 2. Where to Write JavaScript

### Inside HTML

```html id="js1a23"
<script>
  alert("Hello world!");
</script>
```

### Or link a file

```html id="js2b34"
<script src="script.js"></script>
```

---

# 🧠 3. Variables

```html id="js3c45"
<script>
  let name = "Juan";
  let age = 20;

  console.log(name);
</script>
```

* `let` → variable that can change
* `const` → constant (cannot change)

---

# 🔢 4. Functions

```html id="js4d56"
<script>
  function greet() {
    alert("Hello!");
  }
</script>
```

---

# 🖱️ 5. Events (Click Example)

```html id="js5e67"
<button onclick="sayHello()">Click Me</button>

<script>
  function sayHello() {
    alert("Hello there!");
  }
</script>
```

---

# 🎯 6. Get HTML Elements (DOM)

```html id="js6f78"
<p id="text">Original text</p>

<button onclick="changeText()">Change</button>

<script>
  function changeText() {
    document.getElementById("text").innerText = "Text changed!";
  }
</script>
```

👉 This is called **DOM manipulation**

---

# 🧪 7. Input Example

```html id="js7g89"
<input type="text" id="name">
<button onclick="showName()">Submit</button>

<p id="output"></p>

<script>
  function showName() {
    let value = document.getElementById("name").value;
    document.getElementById("output").innerText = "Hello " + value;
  }
</script>
```

---

# 🔄 8. Conditions (if/else)

```html id="js8h90"
<script>
  let age = 18;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
</script>
```

---

# 🔁 9. Loops

```html id="js9i01"
<script>
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
</script>
```

---

# 🧮 10. Simple Form Example

```html id="js10j12"
<input type="number" id="num1">
<input type="number" id="num2">

<button onclick="add()">Add</button>

<p id="result"></p>

<script>
  function add() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText = n1 + n2;
  }
</script>
```

---

# ⚡ Quick Tips

* Use `console.log()` for debugging
* Always check element `id` matches exactly
* Use `Number()` when working with numbers from inputs
* JavaScript runs **after the page loads**
