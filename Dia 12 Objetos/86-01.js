// parte 2: para evitar que se puedan hacer cambios...

"Use strict";

const mascota = {
  Nombre: "Flofy",
  Edad: "7 años",
  Raza: "French",
};
Object.freeze(mascota);
console.log(mascota);
mascota.Nombre = "Firulais";
console.log(mascota);
// para saber si el objeto esta congelado
console.log(Object.isFrozen(mascota));
