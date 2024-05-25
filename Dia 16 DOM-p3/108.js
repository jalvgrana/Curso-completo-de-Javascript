// 108. Creando Elementos

const titulo = document.getElementById('titulo');
const lista = document.getElementById('compras');
const box = document.getElementById('contenedor');

const title = document.createElement('h1');
title.textContent = "Bienvenidos a la creación de elementos";
//console.log('title')
titulo.appendChild(title);

const articulo = document.createElement('li');
articulo.textContent = 'Leche';
lista.appendChild(articulo);



