// Accediendo a propiedades de objetos

const estudiante = {
    nombre: 'Alvaro',
    edad: 17,
    telefono: 555 - 444321,
    direccion: 'NE Main Line'
};

//Extraccion de datos generalizados
console.log(estudiante)
console.table(estudiante)

//Extraccion de datos en especifico primera forma (la mas usada)
console.log(estudiante.nombre);
//Extraccion de datos en especifico segunda forma (la menos usada)
console.log(estudiante['nombre']);

