const API = "http://localhost:3000/users";

function getUsers() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("userList");
      list.innerHTML = "";

      data.forEach(user => {
        list.innerHTML += `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
              <button onclick="deleteUser('${user.id}')">Delete</button>
            </td>
            <td>
              <button onclick="editUser('${user.id}', '${user.name}')">
                Edit
              </button>
            </td>
                        
          </tr>
        `;
      });
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

getUsers()