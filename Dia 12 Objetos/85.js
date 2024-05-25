// Destructing de objetos anidados

const registro = {
    Nombre: 'Fernando',
    Edad: 15,
    Direccion: {
        Calle: 'Street',
        Ciudad: 'NY',
        Pais: {
            USA: true
        }
    }
}

const { Direccion: { Pais: { USA } } } = registro
console.log(USA)