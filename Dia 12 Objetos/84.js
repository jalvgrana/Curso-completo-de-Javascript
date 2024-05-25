// Objetos anidados

const Usuario = {
    Nombre: 'Pedro',
    Apellido: 'Andrades',
    Direcion: {
        Calle: 'Street',
        Casa: 1190,
        Ciudad: 'NY'
    },
    Edad: 40
}

console.log(Usuario.Direcion.Ciudad);

