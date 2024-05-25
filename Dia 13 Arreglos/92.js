// Editar datos de un arreglo

const meses = ['enero', 'febrero', 'marzo', 'abril'];

console.log(meses);
//para modificar:
meses[2] = 'julio';
console.log(meses);

//para añadir:
meses[4] = 'mayo';
console.log(meses);

//alternativa fuera de lugar
meses[10] = 'agosto';
console.log(meses);
console.table(meses)
