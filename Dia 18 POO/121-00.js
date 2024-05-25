// 121. Herencia

// Permite heredar datos de una clase padre a una clase hija.
// La herencia me permite extraer esos datos de la clase padre

class PERSONA {
    constructor(Nombre, Apellido, Edad) {
        // aqui estoy referenciando a los atributos
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.edad = Edad;
    }
    muestra() {
        return `El estudiante ${this.nombre} ${this.apellido} tiene la edad de ${this.edad} años`;
    }
}
const estudiante1 = new PERSONA ('Brian', 'Diaz', 32)
console.log(estudiante1.muestra())



