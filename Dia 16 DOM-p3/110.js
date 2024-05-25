// 110. Elementos padres

const padre = document.getElementById('padre1');
console.log(padre.parentElement); // body
console.log(padre.parentElement.parentElement); //html
console.log(padre.parentElement.parentElement.parentElement); //null


const hijo = document.getElementById('hijo');
console.log(hijo.parentNode);