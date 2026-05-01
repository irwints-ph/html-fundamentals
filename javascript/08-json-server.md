# 📦 1. What is JSON Server?

json-server is a Node module that:
👉 takes a `.json` file
👉 automatically creates a REST API
👉 lets you use `fetch()` like a real backend

So instead of:

* manually reading files with `fs`
* or scraping HTML

You get:

> “real API behavior from a local JSON file”

---

# ⚙️ 2. Install JSON Server

```bash id="inst1"
npm install -g json-server
```

(or locally)

```bash id="inst2"
npm install json-server
```

---

# 📄 3. Create a database file

### `db.json`

```json id="db1"
{
  "users": [
    { "id": 1, "name": "Juan" },
    { "id": 2, "name": "Maria" }
  ],
  "posts": [
    { "id": 1, "title": "Hello World" }
  ]
}
```

---

# 🚀 4. Start the server

```bash id="run1"
json-server --watch db.json
```

You now get:

```
http://localhost:3000
```

---

# 🌐 5. Available API endpoints

From your JSON file:

### Users:

```
http://localhost:3000/users
```

### Posts:

```
http://localhost:3000/posts
```

### Single user:

```
http://localhost:3000/users/1
```

---

# 📡 6. Use fetch (like real backend)

## Get all users

```js id="f1"
async function getUsers() {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();

  console.log(data);
}

getUsers();
```

---

## Get one user

```js id="f2"
async function getUser() {
  const res = await fetch("http://localhost:3000/users/1");
  const data = await res.json();

  console.log(data.name);
}

getUser();
```

---

# 🧠 7. What you just gained

Before:

* `fs.readFile()` → manual file reading
* regex scraping HTML → fragile

Now:

* JSON file becomes a **real API**
* `fetch()` behaves like production apps

---

# 🔁 8. Mental Model

Think of it like:

📄 `db.json`
⬇️
⚙️ json-server
⬇️
🌐 REST API
⬇️
📡 fetch()
⬇️
🧠 JavaScript objects

---

# ⚡ 9. Why this is powerful

You are now practicing:

✔ API consumption
✔ async/await
✔ JSON handling
✔ real-world frontend/backend flow

This is basically:

> 80% of what frontend devs do daily

---

# 🧪 10. Practice ideas

Try these:

### 1. Filter users

```js
/users?name=Juan
```

### 2. Add posts endpoint (later)

```json
"posts": []
```

### 3. Fetch + display logic

* loop users
* print names

---

# 🚀 Next step (recommended)

After this, the natural progression is:

👉 POST / PUT / DELETE with json-server
👉 then move to Express (real backend)

# Add (POST)
```js
  const API = "http://localhost:3000/users;
  const name = { "id": 2, "name": "Kid" }
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  });
```
```js
  const API = "http://localhost:3000/users";
  const name = { name: "boy", pass: "1" }
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(name)
  })
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed to add user");
    }
    return res.json();
  })  
  .then((d) =>{
    console.log(d, "added to db");
  })
  .catch(e => {
    console.error("Error:", e.message);
  });
```