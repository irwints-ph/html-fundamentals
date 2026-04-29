Great—this is where JavaScript starts feeling “real-world”.

In **Node.js (without a browser)**, `fetch` + `async/await` is how you work with APIs and data. No UI needed.

---

# 🌐 1. What is `fetch`?

`fetch()` is used to:
👉 request data from a URL (API)
👉 get response data (usually JSON)

---

# ⚠️ Node.js note (important)

* Node 18+ already supports `fetch`
* Older Node versions need a package (`node-fetch`)

Check:

```bash id="k3x9ab"
node -v
```

---

# 📡 2. Basic Fetch (GET request)

```js id="f1a2b3"
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
```

👉 This uses Promises (older style)

---

# ⚡ 3. Async / Await (Modern Way)

Same thing, cleaner:

```js id="c4d5e6"
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();

  console.log(data);
}

getUser();
```

---

# 🧠 4. How Async/Await Works

### Without async/await:

* code runs step-by-step manually using `.then()`

### With async/await:

* looks like normal code
* but still runs asynchronously

---

# 🔄 5. Fetch Flow

```js id="h7i8j9"
async function example() {
  const res = await fetch(URL);   // wait for response
  const data = await res.json();  // convert to JS object
  return data;
}
```

---

# 📦 6. Working with JSON API

```js id="m1n2o3"
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  console.log(posts[0]);
}

getPosts();
```

---

# ❌ 7. Common Mistakes

### ❌ Forgetting await

```js id="x1y2z3"
const res = fetch(url); // wrong if you expect data immediately
```

👉 `res` becomes a Promise, not data

---

### ❌ Forgetting `.json()`

```js id="p4q5r6"
const res = await fetch(url);
console.log(res); // not usable data yet
```

👉 You must convert it:

```js id="s7t8u9"
await res.json();
```

---

# 🧪 8. Error Handling

```js id="v1w2x3"
async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!res.ok) {
      throw new Error("HTTP error");
    }

    const data = await res.json();
    console.log(data);

  } catch (err) {
    console.log("Error:", err.message);
  }
}

getUser();
```

---

# 🧠 9. Mental Model

Think of it like:

* `fetch()` → go get a package 📦
* `await` → wait for delivery ⏳
* `.json()` → open the box 📦➡️🧠

---

# 🔁 10. Multiple Requests

```js id="a1b2c3"
async function loadData() {
  const user = await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(r => r.json());

  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(r => r.json());

  console.log(user.name);
  console.log(posts.length);
}

loadData();
```

---

# ⚡ 11. Parallel Requests (better performance)

```js id="d4e5f6"
async function loadData() {
  const [userRes, postRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts")
  ]);

  const user = await userRes.json();
  const posts = await postRes.json();

  console.log(user.name, posts.length);
}

loadData();
```

---

# 🚀 Summary

* `fetch()` → makes request
* `async` → allows async function
* `await` → waits for result
* `.json()` → converts response into JS object

---

# 🔥 What you’ve now learned chain:

* functions
* objects + JSON
* async flow
* API requests

👉 This is already **real backend-level thinking**

