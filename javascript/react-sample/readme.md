# ⚛️ React CRUD App (with JSON Server)

## 🧠 What you’ll build

* Display users
* Add user
* Edit user
* Delete user

---

# 1. Create React App

```bash
npx create-react-app crud-app
cd crud-app
npm start
```

---

# 2. Install JSON Server (if not yet)

```bash
npm install -g json-server
```

Run your backend:

```bash
json-server --watch db.json --port 3000
```

---

# 3. Create `db.json` (outside React or root)

```json
{
  "users": [
    { "id": 1, "name": "John" }
  ]
}
```

---

# 4. Clean Up React App

Inside `src/App.js`, replace everything with this:

---

# 5. Full React CRUD Example

```jsx id="react1"
import { useEffect, useState } from "react";

const API = "http://localhost:3000/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  // 📖 READ
  const getUsers = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // ➕ CREATE
  const addUser = async () => {
    if (!name) return;

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    setName("");
    getUsers();
  };

  // ❌ DELETE
  const deleteUser = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });
    getUsers();
  };

  // ✏️ UPDATE
  const updateUser = async () => {
    if (!name) return;

    await fetch(`${API}/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    setName("");
    setEditingId(null);
    getUsers();
  };

  const startEdit = (user) => {
    setName(user.name);
    setEditingId(user.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React CRUD</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      {editingId ? (
        <button onClick={updateUser}>Update</button>
      ) : (
        <button onClick={addUser}>Add</button>
      )}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => startEdit(user)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

# 🔄 How It Works

* `useState` → stores users, input, edit state
* `useEffect` → loads users on page load
* `fetch()` → communicates with JSON Server
* Re-fetch after every change → keeps UI updated

---

# ⚡ Key Concepts You’re Practicing

* React state management
* Side effects (`useEffect`)
* Controlled inputs
* REST API calls
* Conditional rendering (`editingId ? ...`)

---

# ⚠️ Common Issues

### 1. Nothing loads

👉 Make sure JSON Server is running on port 3000

---

### 2. CORS / conflict

React also uses port 3000 by default

👉 Fix:

```bash
npm start
```

Then press:

```
y
```

(to run React on another port like 3001)

---

### 3. Data not updating

👉 Make sure `getUsers()` is called after every action

---

# 🚀 Next Level Improvements

If you want to level this up:

* Add loading spinner
* Add error handling (`try/catch`)
* Split into components (`UserList`, `UserForm`)
* Use `axios` instead of `fetch`
* Add styling (Tailwind / Bootstrap)
* Use `PATCH` instead of `PUT`
