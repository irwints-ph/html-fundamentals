const end_point = "http://localhost:3000/users"

// // Create - post
async function create_user(user){
  const exist = await check_exist_by_username(user.username);
  console.log(exist);
  if(exist){
    console.log(`User ${user.name} already exist`);
  }
  else{
    await fetch(end_point, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

  }

}

//Read
async function read_users()
{
  const res = await fetch(end_point);
  // const res = await fetch(end_point,{
  //   method: "GET"
  // });
  const data = await res.json();

  data.forEach(d => {
    console.log(d)
  });
}
async function update_user(userId, data){
  const exist = await check_exist_by_id(userId)
  console.log(`Updating ${userId}. ${exist}`);
  if(exist)
    {
    const theEndPoint = `${end_point}/${userId}`;
    // console.log(theEndPoint);
    await fetch(theEndPoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }
  else{
    console.log(`User id ${userId} does not exist!`)
  }

}
async function delete_user(userId){
  const theEndPoint = `${end_point}/${userId}`;
  // console.log(theEndPoint);
  await fetch(theEndPoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  })

}
async function check_exist_by_id(userId){
  const theEndPoint = `${end_point}/${userId}`;
  const res = await fetch(theEndPoint);
  // console.log(res);
  return res.ok;

  // if(res.ok) return true
  // else return false
}

async function check_exist_by_username(username){
  const theEndPoint = `${end_point}/?username=${username}`;
  // const theEndPoint = `${end_point}`;
  const res = await fetch(theEndPoint);
  const data = await res.json();
  // console.log(data)
  // console.log(data.length);
  if(data.length > 0) return true;
  else return false;

  // return data.length > 0;
}

const userId = '1';
const newName = { username: "carlo", name:"Carlo", password:"pass", email:"carlo.email.org" };
await create_user (newName);
//await update_user(userId, newName);
// await delete_user(userId);
await read_users();

// // await check_exist_by_username(newName.name);
// const exist = await check_exist_by_username(newName.username);
// console.log(newName.name,exist);


// const people = ["me","you","them"];
// console.log(people.length);
