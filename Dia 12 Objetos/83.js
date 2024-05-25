//Destructing de objetos

const papa = {
    Nombre: 'Juan',
    Apellido: 'Lopez',
    Edad: 39,
}
//En vez de hacer esto, hay varias alternativas:
console.log(papa.Nombre)

// Forma desfasada
const apodo = papa.Nombre;
console.log(apodo);

// Forma actualizada
const { Apellido } = papa;
console.log(Apellido);

const { Edad } = papa;
console.log(Edad);