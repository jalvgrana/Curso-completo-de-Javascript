// ... pero si hago así... no añade nada

const Estudiante = {
    Nombre: "Nicolas",
    Apellido: "Felipe",
    Edad: 45
}
//freeze no deja hace nada
Object.freeze(Estudiante)
console.log(Estudiante);
Estudiante.Genero = "Masculino";
console.log(Estudiante)