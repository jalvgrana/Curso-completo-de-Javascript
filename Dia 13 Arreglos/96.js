// Recorriendo arreglos con forEach

const Registros = [
  {
    Nombre: "Jose",
    Edad: 15,
  },
  {
    Nombre: "Pablo",
    Edad: 19,
  },
  {
    Nombre: "Daniela",
    Edad: 20,
  },
];

Registros.forEach(function (guardado) {
    console.log(guardado);
})
Registros.forEach(function (guardado) {
    console.log(guardado.Edad);
})

