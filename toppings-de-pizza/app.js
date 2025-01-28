// Selección de elementos por ID

const contenedor = document.getElementById('contenedor');

const titulo = document.getElementById('titulo');

// Selección de elementos por clases
const toppings = document.getElementsByClassName('topping');

// Selección de elementos por etiqueta
const lista = document.getElementsByTagName('li');

console.log(lista);
console.log(toppings);
console.log(contenedor);
console.log(titulo);

// convertir la colección en un array
const toppingsArray = Array.from(toppings);
console.log(toppingsArray.length);
console.log(toppingsArray.map(topping => topping.textContent)); // '.map' es un método de los arrays que



// SELECCION DE ELEMENTOS POR SELECTORES DE CSS
// existen 2 selectores de CSS que podemos usar para seleccionar elementos en el DOM
// .querySelector() y .querySelectorAll()
const aceitunas = document.querySelector('.aceitunas'); // selecciona el primer elemento que coincida con el selector con la clase 'aceitunas'

console.log(aceitunas.textContent);

const todosLosToppings = document.querySelectorAll('.topping'); // selecciona todos los elementos que coincidan con el selector con la clase 'topping'  y los devuelve en una colección

console.log(todosLosToppings);

// podemos convertir esta nodelist en un array
const toppingsArray2 = Array.from(todosLosToppings);
console.log(toppingsArray2[1].textContent);

// EVENTOS

// Los eventos son acciones que suceden en el DOM, como hacer click en un botón, pasar el mouse sobre un elemento, etc.
// Podemos escuchar estos eventos y ejecutar una función cuando sucedan
// Para escuchar un evento, usamos el método .addEventListener() en un elemento del DOM
// .addEventListener() recibe dos argumentos: el nombre del evento y la función que queremos ejecutar
// Ejemplo:
const boton = document.getElementById('boton'); // seleccionamos el botón

boton.addEventListener('click', () => { // escuchamos el evento 'click' y ejecutamos una función
    console.log('Hiciste click en el botón');
});


// podemos acceder a los estilos de un elemento con la propiedad .style
console.log(aceitunas.style);

// podemos cambiar los estilos de un elemento directamente
const primerTopping = document.querySelector('.topping');

primerTopping.style.backgroundColor = 'red';
primerTopping.style.textTransform = 'lowercase';

//podemos acceder al texto de un elemento con la propiedad .innerText
const listaDeToppings = document.getElementById('lista-toppings');

console.log(listaDeToppings.innerText);
console.log(listaDeToppings.textContent);
console.log(listaDeToppings.innerHTML);

// cambiar el texto de un elemento
// para cambiar el texto de un elemento, podemos acceder a la propiedad .innerText o .textContent y asignarle un nuevo valor
console.log(aceitunas.innerText); // leer el texto actual
aceitunas.innerText = 'Aceitunas verdes'; // cambiar el texto
console.log(aceitunas.innerText); // leer el texto actual

// buscamos el elemento con la etiqueta 'a'
const link = document.getElementsByTagName('a');

console.log(link); // nos devuelve el elemento
console.log(`La etiqeuta del link es: ${link}`); // tagName nos devuelve el nombre de la etiqueta del elemento

// como es una colección, podemos acceder a un elemento específico por su índice
console.log(`el elemento en la posición 0 es: ${link[0].getAttribute('href')}`); // getAttribute nos permite acceder a los atributos de un elemento

// para eliminar el atributo 'href' del link en la posición 0 de la colección
//link[0].removeAttribute('href');

// para actualizar el atributo 'href' del link en la posición 0 de la colección
link[0].setAttribute('href', 'https://www.facebook.com');
console.log(`el elemento en la posición 0 es: ${link[0].getAttribute('href')}`);

// cambiamos el texto del link
link[0].innerText = 'Página Principal de Facebook';

console.log(`el texto del link es: ${link[0].innerText}`);

// AGREGAR Y ELIMINAR CLASES
// podemos agregar y eliminar clases de un elemento con las propiedades .classList.add() y .classList.remove()
// .classList.add() recibe el nombre de la clase que queremos agregar

// Ejemplo:
aceitunas.classList.add('nueva-clase'); // agrega la clase 'nueva-clase' al elemento con la clase 'aceitunas'
console.log(aceitunas.classList);

// para saber si un elemento tiene una clase, podemos usar el método .classList.contains()
console.log(aceitunas.classList.contains('nuevo-estilo')); // devuelve true si el elemento tiene la clase 'nueva-clase'


// .classList.remove() recibe el nombre de la clase que queremos eliminar
// Ejemplo:
aceitunas.classList.remove('topping'); // elimina la clase 'nueva-clase' del elemento con la clase 'aceitunas'


// CREAR ELEMENTOS
// podemos crear elementos en el DOM con el método .createElement()
// .createElement() recibe el nombre de la etiqueta del elemento que queremos crear
// Ejemplo:

//listamos los elementos de la lista con clase 'topping'
console.log(listaDeToppings);

const nuevoElemento = document.createElement('li'); // crea un nuevo elemento <li>

//le decimos al nuevo elemento dónde queremos que se muestre
listaDeToppings.append(nuevoElemento); // agrega el nuevo elemento al final de la lista

nuevoElemento.innerText = 'Pimientos'; // le asignamos un texto al nuevo elemento

nuevoElemento.classList.add('topping', 'fondo-marron'); // le agregamos una clase al nuevo elemento

// podemos agregar un nuevo elemento antes de otro con el método .insertBefore()
// .insertBefore() recibe dos argumentos: el nuevo elemento y el elemento antes del cual queremos insertarlo
// Ejemplo:
const nuevoElemento2 = document.createElement('li'); // crea un nuevo elemento <li>
//le decimos al nuevo elemento dónde queremos que se muestre
listaDeToppings.insertBefore(nuevoElemento2, listaDeToppings.children[0]); // agrega el nuevo elemento al principio de la lista

nuevoElemento2.innerText = 'Queso Extra'; // le asignamos un texto al nuevo elemento

// le asignamos clases al nuevo elemento
nuevoElemento2.classList.add('topping', 'fondo-naranja');

// ELIMINAR ELEMENTOS
// podemos eliminar elementos del DOM con el método .remove()
// .remove() elimina el elemento del DOM
// Ejemplo:
const primerTopping2 = document.querySelector('.topping'); // seleccionamos el primer elemento con la clase 'topping'
primerTopping2.remove(); // eliminamos el primer elemento con la clase 'topping'

// RECORRER EL DOM
// podemos recorrer el DOM para acceder a los elementos que queremos buscar

// hacia arriba
// podemos acceder al padre de un elemento con la propiedad .parentElement
// Ejemplo:
console.log(`el padre de ${listaDeToppings.tagName} es ${listaDeToppings.parentElement.tagName}`); // accedemos al padre de la lista de toppings

console.log(listaDeToppings.parentElement.parentNode); // accedemos al padre de la lista de toppings

// hacia abajo
// podemos acceder a los hijos de un elemento con la propiedad .children
// Ejemplo:
console.log(listaDeToppings.children); // accedemos a los hijos de la lista de toppings

//para acceder a un hijo específico
console.log(listaDeToppings.children[2].textContent); // accedemos al primer hijo de la lista de toppings

// podemos acceder al primer hijo de un elemento con la propiedad .firstElementChild
console.log(listaDeToppings.firstElementChild.textContent); // accedemos al primer hijo de la lista de toppings

// podemos acceder al último hijo de un elemento con la propiedad .lastElementChild
console.log(listaDeToppings.lastElementChild.textContent); // accedemos al último hijo de la lista de toppings

// podemos acceder al siguiente hermano de un elemento con la propiedad .nextElementSibling
console.log(listaDeToppings.nextElementSibling.textContent); // accedemos al siguiente hermano de la lista de toppings

// podemos acceder al hermano anterior de un elemento con la propiedad .previousElementSibling
console.log(listaDeToppings.previousElementSibling.textContent); // accedemos al hermano anterior de la lista de toppings