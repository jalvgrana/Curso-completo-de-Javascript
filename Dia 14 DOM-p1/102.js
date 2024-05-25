// 102. Atributos, objetos y Clases parte 1

const titulo = document.getElementById('titulo');

const text = document.getElementById('texto');
const mail = document.getElementById('email');

console.log(titulo.getAttribute('id'));

console.log(titulo.setAttribute('id', 'portada'));
console.log(text.setAttribute('type', 'date'));
console.log(mail.setAttribute('placeholder', 'example@aol.com'));