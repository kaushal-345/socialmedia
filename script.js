let userId;
function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}

function showPosts(id) {
  let str = "<h3>My Post</h3>";
  //console.log(`https://jsonplaceholder.typicode.com/posts/userId=${id}`)
  fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data &&
        data.map((value) => {
          str += `<div class='card p-1 m-2'>
        <b><li>${value.title}</li></b>
        <p>${value.body}</p>
        </div>`;
        });
      content.innerHTML = str;
    })
    .catch((err) => console.log(err));
}

function showProfile(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
      let str = `<div>
      <b><li>${data.name}</li></b>
      <p>${data.email}</p>
      </div>`;
      content.innerHTML = str;
    })
    .catch((err) => console.log(err));
}

function showAlbum(id) {
  let str="<h3>My Albums</h3>";         //let str is not done for above func, why?   : coz its not iterated over, so direct declare 
  fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
  .then((res) => res.json())
  .then((data) => {
  data &&
    data.map((value) => {
      str += `<div class='card p-1 m-2'>
    <b><li>${value.title}</li></b>
    </div>`;
    });
  content.innerHTML = str;
  })
  .catch((err) => console.log(err));
}

function showTodo(id) {
  let str="<h3>My To Do list</h3>";                                                         
  fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
  .then((res) => res.json())
  .then((data) => {
  data &&
    data.map((value) => {
      str += `<div>
    <b class='${value.completed ? 'text-success' : 'text-danger'}'>
      <input type='checkbox' ${value.completed && "checked"}>${value.title}
    </b>
    </div>`;
    });
  content.innerHTML = str;
  })
  .catch((err) => console.log(err));
}
function showHome() {
  userId = selUser.value;
  let str = `
   <div class='container-fluid'>
     <div class='row'>
      <div class='d-flex justify-content-between bg-primary text-light'>
       <div>My Social Media</div>
       <div id='username'>${userId}</div>
      </div>
     </div>
     <div class='row'>
      <div class='d-flex'>
       <div class='p-2'>
         <p class="click" onclick='showPosts(${userId})'>Home</p>
         <p class="click" onclick='showAlbum(${userId})'>Album</p>
         <p class="click" onclick='showProfile(${userId})'>Profile</p>
         <p class="click" onclick='showTodo(${userId})'>To Do</p>
         <p class="click" onclick='showLogin()'>Logout</p>
       </div>
       <div class='p-2' id='content'></div>
      </div>
     </div>
     <div class='row'>
      <div class='bg-primary text-light p-5'>
       <p>@Copyright 2025. All rights reserved.</p>
      </div>
     </div>
   </div>
  `;
  let name = selUser.options[selUser.selectedIndex].text
  root.innerHTML = str;
  username.innerHTML=name
  showPosts(userId);
}

function displayUsers(data) {
  let str = `
  <div class='d-flex justify-content-center p-5'>
  <div class='p-5'>
  <h2>My Social Media</h2>
  <p>This is the caption of the website.</p>
  </div>
  <div class='p-5'>
  <select class='form-control m-3' id='selUser'>
  <option value='0'>--Select User--</option>`;
  data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });
  str += `</select><p><button class='form-control m-3 btn btn-primary' onclick='showHome()'>Log In</button></p></div></div>`;
  root.innerHTML = str;
}