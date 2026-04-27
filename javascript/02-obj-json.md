# 🧠 1. Object vs JSON (Core Difference)

### ✅ JavaScript Object

```js
let person = {
  name: "Juan",
  age: 20
};
```

* Lives inside your program
* You can **access, modify, run logic**
* Keys don’t need quotes (but can have them)

---

### 📦 JSON (String format)

```js
let json = '{"name":"Juan","age":20}';
```

* Just **text (string)**
* Used for storage / transfer
* Keys **must** be in double quotes

---

# ⚡ Key Difference

| Feature         | Object          | JSON              |
| --------------- | --------------- | ----------------- |
| Type            | JS object       | String            |
| Usable directly | ✅ Yes           | ❌ No (must parse) |
| Functions       | ✅ Allowed       | ❌ Not allowed     |
| Quotes          | Optional (keys) | Required          |

---

# 🔑 2. Accessing Values (Object)

### Dot notation

```js
let person = { name: "Juan", age: 20 };

console.log(person.name); // Juan
```

### Bracket notation

```js
console.log(person["age"]); // 20
```

---

# 📚 3. Accessing Array Values

```js
let fruits = ["apple", "banana"];

console.log(fruits[0]); // apple
```

---

# 🧩 4. Nested Access

```js
let user = {
  name: "Juan",
  address: {
    city: "Manila"
  }
};

console.log(user.address.city); // Manila
```

---

# ❌ 5. Accessing JSON Directly (Wrong)

```js
let json = '{"name":"Juan"}';

// ❌ This will NOT work
console.log(json.name);
```

👉 Because it's just a **string**

---

# ✅ 6. Correct Way (Parse First)

```js
let json = '{"name":"Juan"}';

let obj = JSON.parse(json);

console.log(obj.name); // Juan
```

---

# 🔄 7. Full Example (Very Important)

```js
let json = '[{"name":"Juan"},{"name":"Maria"}]';

// convert JSON → JS
let data = JSON.parse(json);

// access values
console.log(data[0].name); // Juan
console.log(data[1].name); // Maria
```

---

# 🧠 Mental Model (Important)

Think of it like:

* Object → **usable data**
* JSON → **packaged data**

📦 JSON is like a **sealed box**
🔓 `JSON.parse()` = open the box
📦 `JSON.stringify()` = pack it again

---

# ⚡ Quick Rule

If you see:

```js
typeof something === "string"
```

👉 You probably need `JSON.parse()`

---

# 🔥 Practice (try this)

```js
let json = '{"product":"Laptop","price":50000}';

// 1. parse it
// 2. print price
```
