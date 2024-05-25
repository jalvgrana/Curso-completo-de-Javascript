// 113. Objeto console

const lista = document.getElementById('li1');
console.log('lista');
console.log(lista);
console.dir('lista');
console.dir(lista);

if (confirm('Has puesto todos los datos')) {
    alert('Felicidades, te has suscrito')
    console.log('Todo ha salido con exito')
} else {
    alert('Ha ocurrido un error')
    console.log('Ha ocurrido un error inesperado')
};

const data = {
    Nombre: 'Kevin',
    Apellido: 'Lopez',
    Edad: 15
}

console.table(data);