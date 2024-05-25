// Eventos con teclado

const teclado = document.getElementById('texto');

teclado.addEventListener('keydown', () => {
    console.log('Usted ha presionado una tecla del teclado')
});

teclado.addEventListener('keyup', () => {
    console.log('Usted ha dejado de presionar una tecla del teclado')
});

teclado.addEventListener('keypress', () => {
    console.log('Usted mantiene presionada una tecla del teclado')
});

teclado.addEventListener('mouseover', () => {
    console.log('Usted esta haciendo click con el mouse dentro del input')
});

