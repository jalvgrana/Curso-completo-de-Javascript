//123. Petición HTTP practica 1 Ajax
//Llamamos al boton mediante su ID

const peticion = document.getElementById("peticion");

//Añadimos evento de escucha para realizar la petición

peticion.addEventListener("click", () => {
  // crear una variable que nos permita verificar XMLHTTPREQUEST

  let xhr;
  // Verificar si el navegador es compatible con XMLHTTPREQUEST

  if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  else xhr = new ActiveXObject("Microsoft.XMLHTTP");

  // Realizamos la conexion
  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");

  //Acciones con los datos

  xhr.addEventListener("load", (carga) => {
    console.log(JSON.parse(carga.target.response));
  });
  //envio de datos
  xhr.send();
});
