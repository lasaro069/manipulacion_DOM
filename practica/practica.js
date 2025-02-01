// agregar un id al elemento con etiqueta 'h1'

// seleccionamos el elemento con etiqueta 'h1'
const h1 = document.querySelector('h1');

h1.classList.add('titulo');  // le agregamos una clase al elemento

h1.id = 'titulo'; // le asignamos un id al elemento

h1.innerText = 'Manipulación del DOM'; // le asignamos un texto al elemento

h1.style.color = 'red'; // le asignamos un color al texto del elemento

h1.style.textDecoration = 'underline'; // le asignamos una decoración al texto del elemento





//seleccionamos el primer contenedor


let contenedorPrincipal = document.querySelector('.container');

//le agregamos otra clase al primer contenedor
contenedorPrincipal.classList.add ('contenedor-principal');

// le damos estilos al contenedor principal
contenedorPrincipal.style.backgroundColor = 'lightblue';
contenedorPrincipal.style.display = 'flex';
contenedorPrincipal.style.flexWrap = 'wrap';


let contenedor1 = document.querySelector('.container-1');

contenedor1.style.backgroundColor = 'lightgreen';
contenedor1.style.width = '150px';


let contenedor2 = document.querySelector('.container-2');

contenedor2.style.backgroundColor = 'lightyellow';
contenedor2.style.width = '150px';


let contenedor3 = document.querySelector('.container-3');

contenedor3.style.backgroundColor = 'lightpink';
contenedor3.style.width = '180px';


let contenedor4 = document.querySelector('.container-4');

contenedor4.style.backgroundColor = 'lightgray';
contenedor4.style.width = '150px';

//listar los elementos hijos de contenedor principal
console.log(contenedor4.children);

let ul = document.querySelectorAll('ul');

console.log(ul);

//variable de incremento
let incremento = 1;

//agregar clase a los elementos ul
ul.forEach(element => {
    element.classList.add('lista-'+ incremento);
    incremento++
});

// seleccionamos todos los elementos 'li'
const li = document.querySelectorAll('li');
console.log(li);

incremento = 1;

//ageegamos una clase a los elementos 'li'
li.forEach(element => {
    element.innerText = 'item-'+ incremento;
    incremento++
});