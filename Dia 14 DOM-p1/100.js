// 100. Selección de elementos parte 2

const titulo = document.getElementById("portada");
const sub = document.getElementById('subportada');

// Añade elementos a la clase
titulo.classList.add('otra-clase', 'nuevo');
//Elimina elementos a la clase
titulo.classList.remove('test');

if (titulo.classList.contains("titulo")) {
    console.log('La clase titulo si se encuentra dentro de la etiqueta h1');
} else {
    console.log('La clase no se encuentra dentro de la etiqueta h2');
}

