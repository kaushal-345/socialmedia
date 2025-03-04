let users=[]
function showLogin() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>displayUsers(data))
    .catch((err)=>console.log(err));
}
function displayUsers(data) {
    let str=`
    <div class='flex'>
    <div class='mt-5'>My Social Media</div>
    <div class='flex text-center mt-5'>
    <select>
    <option value=0>--Select User--</option>`;
    data.map((value)=>{
    str+=`<option value=${value.id}>${value.name}</option>`;
    });
    str+=`</select></div></div>`
    root.innerHTML=str
}