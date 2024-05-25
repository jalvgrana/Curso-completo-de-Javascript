// 1. Hacer tres variables que sean cadenas de texto, concatenarlas y luego mostrarlas en pantalla
let text1 = "Ella no te ama";
let text2 = " Siempre amigos";
let text3 = " friendzone";

console.log(text1 + text2 + text3);
console.log(text1.concat(text2.concat(text3)))

//2. Crear una variable de tipo texto y utilizar un método para buscar la posición de la palabra  Te, Ella, Ama
let texto = "Ella no te ama";
let texto2 = "Ella porsupuesto te va a amar";

console.log(texto.concat(texto2).indexOf('va'));
console.log(texto2.indexOf("ama"));