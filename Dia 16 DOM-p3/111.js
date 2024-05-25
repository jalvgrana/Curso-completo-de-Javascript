// 111. Elementos Hijos

const padre = document.getElementById('padre');
const padre2 = document.getElementById('padre2');
const padre3 = document.getElementById('sin')

console.log(padre.children);
console.log(padre.childNodes);
console.log(padre.firstChild); // text: espacio entre div y ul
console.log(padre.firstElementChild); // ul: el primer elemento
console.log(padre2.lastChild);
console.log(padre2.lastElementChild);
console.log(padre.hasChildNodes());
console.log(padre3.hasChildNodes());

/*
children: nos muestra todos los elementos hijo
ChildNode: nos muestra todos los nodos hijos
FirstChild: nos muestra el primer nodo hijo
FirstElementChidl: nos muestra el primer elemento hijo
lastChild: nos muestra el primer elemento hijo
lastElementChild: nos muestra el ultimo elemento hijo
hasChildNodes(): nos muestra una propiedad booleana si el elmento tiene elementos hijos
*/

