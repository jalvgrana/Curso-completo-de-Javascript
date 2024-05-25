// ... pero si uso el "seal"...

const Estudiante = {
    Nombre: "Nicolas",
    Apellido: "Felipe",
    Edad: 45
}
//el seal no deja añadir pero sí modificar las existentes...
Object.seal(Estudiante)
console.log(Estudiante);
Estudiante.Nombre = "Roberto"; // me deja modificar...
delete Estudiante.Nombre; //pero ... delete no deja usarlo
console.log(Estudiante)
console.log(Object.isSealed(Estudiante)); //para saber si esta sellado

