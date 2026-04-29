# 🧠 What You’ll Build

A simple app that can:

* ➕ Create a user
* 📖 Read/display users
* ✏️ Update a user
* ❌ Delete a user

---

# 1. Install JSON Server

```bash
npm install -g json-server
```

---

# 2. Create `db.json`

```json
{
  "users": [
    { "id": 1, "name": "John" }
  ]
}
```

---

# 3. Start the Server

```bash
json-server --watch db.json --port 3000
```

👉 Your API will be available at:
`http://localhost:3000/users`

---

# 4. Basic HTML

```html id="html1"
<!DOCTYPE html>
<html>
<head>
  <title>CRUD App</title>
</head>
<body>

  <h1>Users</h1>

  <input type="text" id="nameInput" placeholder="Enter name" />
  <button onclick="addUser()">Add</button>

  <ul id="userList"></ul>

  <script src="script.js"></script>
</body>
</html>
```

---

# 5. JavaScript (CRUD)

## 📖 READ (Get all users)

```js id="js1"
const API = "http://localhost:3000/users";

function getUsers() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("userList");
      list.innerHTML = "";

      data.forEach(user => {
        list.innerHTML += `
          <li>
            ${user.name}
            <button onclick="deleteUser(${user.id})">Delete</button>
            <button onclick="editUser(${user.id}, '${user.name}')">Edit</button>
          </li>
        `;
      });
    });
}

getUsers();
```

---

## ➕ CREATE (Add user)

```js id="js2"
function addUser() {
  const name = document.getElementById("nameInput").value;

  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  })
  .then(() => {
    getUsers();
  });
}
```

---

## ❌ DELETE

```js id="js3"
function deleteUser(id) {
  fetch(`${API}/${id}`, {
    method: "DELETE"
  })
  .then(() => getUsers());
}
```

---

## ✏️ UPDATE

```js id="js4"
function editUser(id, oldName) {
  const newName = prompt("Edit name:", oldName);

  if (!newName) return;

  fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: newName })
  })
  .then(() => getUsers());
}
```

---

# 🔄 How It Works (Simple Flow)

* `fetch()` → makes HTTP requests
* `.then(res => res.json())` → converts response
* JSON Server → acts like a fake backend
* Every action → refreshes UI via `getUsers()`

---

# ⚡ Optional: Same Using `async/await`

Cleaner version of `getUsers()`:

```js id="js5"
async function getUsers() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("userList");
  list.innerHTML = "";

  data.forEach(user => {
    list.innerHTML += `
      <li>
        ${user.name}
        <button onclick="deleteUser(${user.id})">Delete</button>
        <button onclick="editUser(${user.id}, '${user.name}')">Edit</button>
      </li>
    `;
  });
}
```

---

# ⚠️ Common Beginner Mistakes

* Forgetting `Content-Type: application/json`
* Not calling `getUsers()` after changes
* Not converting response with `.json()`
* Confusing `PUT` vs `PATCH`

  * `PUT` = replace entire object
  * `PATCH` = update partial

---

# 🚀 What You Can Improve Next

* Add loading states
* Add error handling (`.catch()`)
* Use forms instead of `prompt()`
* Add styling (CSS / Bootstrap)
* Move to frameworks (React, Vue)
