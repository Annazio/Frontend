Ссылка: https://jsonplaceholder.typicode.com/users/

const url = "https://jsonplaceholder.typicode.com/users/"
const postsUrl = "https://jsonplaceholder.typicode.com/posts?userId="
const getBtn = document.querySelector(".getBtn");
const userId = document.querySelector(".inputId");
const userNameInput = document.querySelector(".userName");
const userEmailInput = document.querySelector(".userEmail");

console.log(userNameinput, userEmailInput);

// function getUser(id) {
//       return fetch(url + id)
//       .then((data)=> {
//         return data.json();
//       })
//       .then((response)=>{
//         console.log(response)
//         return response;
//       });
// }


// async function getUser(id) {
//     const data = await fetch (url + id);
//     const response = await data.json();
//     return response;
// }

// async function getPosts(id) {
//     const data = await fetch (postsUrl + id);
//     const response = await data.json();
//     return response;
// }



// getBtn.addEventListener("click", async () => {
//     await getUser(userId.value).then((data)=>{
//       console.log(data);
//       userNameInput.innerHTML = data.name;
//       userEmailInput.innerHTML = data.email;
//     });
//     await getPosts(userId.value).then((data) => {
//         console.log(data);
//     });
// });

const getInfoAboutUser = async (id) => {
    const serverData = {}

    const userInfo = await fetch(url + id);
    const responseUserInfo = await userInfo.json();

    userNameInput.innerHTML = responseUserInfo.name;
    userEmailInput.innerHTML = responseUserInfo.email;

    const userPosts = await fetch(postsUrl + id);
    const responseUserPOsts = await userInfo.json();

    serverData.responseUserInfo = responseUserInfo;
    serverData.responseUserPosts = responseUserPosts;

    return serverData;
}

getBtn.addEventListener("click", async () => {
   getInfoAboutUser(userId.value);

});