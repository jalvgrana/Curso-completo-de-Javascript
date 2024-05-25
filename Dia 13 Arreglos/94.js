// Eliminar metodos de un array

const amigos = ['Luis', 'Mario', 'Fernando', 'Carlos', 'Rodrigo', 'Rui', 'Raul'];
console.log(amigos);
//elminar el ultimo elemento
amigos.pop();
console.log(amigos)

//eliminar el primer elemento
amigos.shift();
console.log(amigos)

//eliminar elemento concreto
//(posicion donde inicia, cuántos elementos elimina)
amigos.splice(1, 2);
console.log(amigos)