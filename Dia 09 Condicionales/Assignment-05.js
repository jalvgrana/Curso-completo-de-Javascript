// 1. Crear dos variables que contengan dos números iguales (Pueden ser cualquier numero), 
// a partir de esos dos números evaluar si los números son iguales, 
// si lo son a cada numero se le sumara uno y se mostrara en pantalla el numero original y el numero modificado
let numero1 = 50;
let numero2 = 50;

if (numero1 == numero2) {
  let modificado1 = numero1 + 1;
  let modificado2 = numero2 + 1;
  console.log(numero1);
  console.log(numero2);
  console.log(modificado1);
  console.log(modificado2);
} else {
  alert("Los numeros no son iguales");
}

// 2. Crear una variable que contenga la palabra "Papa" y con una estructura de control 
//muéstrame la palabra aun si esta esta escrita con la letra inicial mayúscula o minúscula.

let palabra = "Papa";

switch (palabra) {
  case "Papa":
    console.log(palabra);
    break;
  case "papa":
    console.log(palabra);
    break;

  default:
    console.error("La palabra escrita no es papa");
    break;
}