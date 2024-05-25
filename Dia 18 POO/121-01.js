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
    return `El estudiante ${(this.nombre, this.apellido)} tiene la edad de ${this.edad} años`;
  }
}

class ESTUDIANTE extends PERSONA {
    constructor(nombre, apellido, edad, NIE) {
        super(nombre, apellido, edad);
        this.nie = NIE;
    }
    llamada() {
        return `El estudiante ${this.nombre} ${this.apellido} tiene la edad ${this.edad} años con numero de NIE ${this.nie}`;
    }
}

const Estudiante1 = new ESTUDIANTE('Roberto', 'Rodriguez', 34, 1007);
const Estudiante2 = new ESTUDIANTE('Daniel', 'Alvarez', 24, 1008);
const Estudiante3 = new ESTUDIANTE('Romualdo', 'Pacheco', 30, 1009);
console.log(Estudiante1.llamada());
console.log(Estudiante2.llamada());
console.log(Estudiante3.llamada());