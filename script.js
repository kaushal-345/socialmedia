let users = [];
function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}

function showPosts(id) {
  let str = ""
  //console.log(`https://jsonplaceholder.typicode.com/posts/userId=${id}`)
  fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data && data.map((value) => {
        str += `<div>
        <b>${value.title}</b>
        <p>${value.body}</p>
        </div>`;
      });
      content.innerHTML = str;
    })
    .catch((err) => console.log(err));
}

function showHome() {
  let userId = selUser.value;
  let str = `
   <div class='container-fluid'>
     <div class='row'>
      <div class='d-flex justify-content-between bg-primary text-light'>
       <div>My Social Media</div>
       <div id='username'></div>
      </div>
     </div>
     <div class='row'>
      <div class='d-flex'>
       <div class='p-2'>
         <p>Home</p>
         <p>Album</p>
         <p onclick='showLogin()'>Logout</p>
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
  root.innerHTML = str;
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