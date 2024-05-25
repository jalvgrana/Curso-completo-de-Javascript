/*
1. Crea 5 variables las cuales sean:
        - Nombre

        - Apellido

        - Genero

        - Pais

        - teléfono

        Luego crea un objeto adjuntando estas cinco variables y muéstralo en consola.
*/

const Nombre = "Jose";
const Apellido = "Perez";
const Genero = "Masculino";
const Pais = "Noruega";
const telefono = "8765-7890";

const Persona = {
  Nombre_persona: Nombre,
  Apellido_persona: Apellido,
  Genero_persona: Genero,
  Pais_persona: Pais,
  Telefono_persona: telefono,
};

console.log(Persona);

/*
2. Crea un objeto con las siguientes propiedades:
        1- Genero

        2- Pais

        3- Edad

        Muestra en pantalla el objeto, después añade un elemento al objeto

        luego muestra en pantalla con el elemento o propiedad añadido
*/

const Ejemplo = {
  Genero: "Femenino",
  Pais: "España",
  Edad: 15,
};

Ejemplo.Nombre = "Jessica";

console.table(Ejemplo);