
// 1- Con los datos de tipo String obten la longitud de la cadena de texto y muestrame en consola que palabra es mas larga que la otra.
// 2- Con los datos Booleanos y usando ciclos idea una forma de implementacion para que se ejecuten en el codigo (Ten cuiado de no hacer un bucle infinito)
// 3- Con los datos numericos realiza las cuatro principales operaciones aritmeticas.

  var DATOS = [true, 1000, false, "Javascript", "HTML", 200];

  /* Cadena */
  if (DATOS[3].length > DATOS[4].length) {
    console.log("La palabra:", DATOS[3], "Es mayor en longitud que:", DATOS[4]);
  } else {
    console.log("La palabra:", DATOS[3], "Es menor en longitud que:", DATOS[4]);
  }

  /* Booleanos */

  var i = 0;
  while (DATOS[0] != DATOS[2]) {
    if (i > 10) {
      DATOS[0] = false;
    }
    console.log(i);
    i++;
  }
  /* Numeros */

  var suma = DATOS[1] + DATOS[5];
  var resta = DATOS[1] - DATOS[5];
  var multi = DATOS[1] * DATOS[5];
  var division = DATOS[1] / DATOS[5];

  console.log("Esto es una suma: ", suma);
  console.log("Esto es una resta: ", resta);
  console.log("Esto es una multiplicacion: ", multi);
  console.log("Esto es una division: ", division);
