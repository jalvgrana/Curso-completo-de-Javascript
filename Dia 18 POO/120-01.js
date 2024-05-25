// Utilizacion de clases

class PERSONA {
  constructor(Nombre, Apellido, Edad) {
    this.nombre = Nombre;
    this.apellido = Apellido;
    this.edad = Edad;
    } 
    muestra() {
        return `El estudiante ${this.nombre} ${this.apellido} tiene la edad de ${this.edad} años`;
    }
}

const estudiante1 = new PERSONA('Jose', 'Torres', 21)
console.log(estudiante1);
console.log(estudiante1.muestra())
