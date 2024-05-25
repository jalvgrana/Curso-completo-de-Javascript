// Eventos de raton

const contenedor = document.getElementById('block');
const boton = document.getElementById('button');

/*
boton.addEventListener('click', () => {
    console.log('Usted ha dado click en el boton');
});
*/

contenedor.addEventListener('mouseenter', () => {
    contenedor.classList.replace('red', 'blue')
});

contenedor.addEventListener('mouseleave', () => {
    contenedor.classList.replace('blue', 'red')
});