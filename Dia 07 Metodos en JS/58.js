// Debanando cadenas
let cadena = "Estamos debanando el validado de strings";
console.log(cadena.length);
console.log(cadena.slice(1, 7));
console.log(cadena.slice(10));
console.log(cadena.substring(0, 20));
//con slice no funciona
console.log(cadena.slice(34, 2));
// con el metodo substring si, aunque el primero sea mayor que el segundo
console.log(cadena.substring(34, 2));

