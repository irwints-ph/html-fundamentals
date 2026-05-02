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
            ${user.id}
            <button onclick="deleteUser('${user.id}')">Delete</button>
            <button onclick="editUser('${user.id}', '${user.name}')">Edit</button>
          </li>
        `;
      });
    });
}

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

function deleteUser(id) {
  const end_point = `${API}/${id}`;
  console.log(end_point);
  fetch(`${API}/${id}`, {
    method: "DELETE"
  })
  .then(() => getUsers());
}

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

getUsers();
