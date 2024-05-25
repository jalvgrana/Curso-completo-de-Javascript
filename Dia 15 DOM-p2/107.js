// Event Object

const entrada = document.getElementById('texto')
const bloque = document.getElementById('area')

/*
bloque.addEventListener('mousedown', (event) => {
   console.log(event)
});
*/

/*
bloque.addEventListener('mousedown', () => {
    console.log('CLICK, CLICK, CLICK, CLICK')
})
*/

/*
// evento solo para el área de escritura
bloque.addEventListener('mouseover', (event) => {
    console.log(event)
});
*/

/*
// igual pero para toda la ventana de Windows
addEventListener('mousedown', (e) => {
    console.log(e)
});
*/

// lo que escriba en el area lo saca letra a letra
bloque.addEventListener('keydown', (event) => {
    console.log(event.key)
});
