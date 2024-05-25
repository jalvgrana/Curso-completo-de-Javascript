// https://jsonplaceholder.typicode.com

const boton1 = document.getElementById("post");
const boton2 = document.getElementById("usuarios");
const boton3 = document.getElementById("fotos");

boton1.addEventListener("click", () => {
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", (post) => {
    console.log(JSON.parse(post.target.response));
  })
  xhr.send();
});

boton2.addEventListener("click", () => {
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("load", (post) => {
    console.log(JSON.parse(post.target.response));
  })
  xhr.send();
});

boton3.addEventListener("click", () => {
  let xhr;
  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
  xhr.addEventListener("load", (post) => {
    console.log(JSON.parse(post.target.response));
  })
  xhr.send();
});
