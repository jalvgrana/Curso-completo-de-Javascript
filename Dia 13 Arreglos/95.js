// Destruyendo arreglos

//con las variables
const libro = {
    Nombre: 'Don Quijote',
    Capitulos: 20,
    Paginas: '500 paginas'
};

const { Capitulos } = libro;
const { Editorial } = libro;
console.log(Capitulos);
console.log(Editorial); // undefined

//con los arreglos, voy desglosando hasta llegar el valor que busco
const arreglo = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
//const [uno, dos, tres, cuatro] = arreglo; // da 8
const [, , , cuatro] = arreglo; // da también 8
console.table(cuatro);
