// 103. Atributos, objetos y Clases parte 2

const titulo = document.getElementById('portada');
const sub = document.getElementById('subportada');

// añade elementos a las clases
titulo.classList.add('otra-clase', 'nuevo');
// elimina elementos a las clases
titulo.classList.remove('nuevo');

if (titulo.classList.contains ('otra-clase')) {
    console.log('La clase titulo se encuentra en la etiqueta h1');
} else {
    console.log('La clase titulo no se encuentra en la etiqueta h1');
}
