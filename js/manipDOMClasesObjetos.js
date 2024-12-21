/** inicio cambiar ATRIBUTO a elementos **/

function cambiarTexto(){  //
    console.log("click en cambiar texto")
    let paragraph = document.getElementById('parrafo')
    paragraph.textContent = 'El texto cambió exitosamente' // .textContent para acceder al contenido del texto 
    paragraph.style.color = 'red'
}

// iyeccion html
let newDiv = document.createElement('div')
newDiv.textContent= 'este es un nuevo div desde js'
document.body.appendChild(newDiv)   // agrega un elemento al final del body del documento DOM

//manipulando image
// let image = document.getElementById('myImage')
// image.src = '../../img/fondo-networks.jpg'

function cambiarImagen(){
    console.log("click en cambiar imagen")
    let image = document.getElementById('myImage')
    image.src = '../../img/fondo-networks.jpg'
}
// image.src = '../img/fondo-networks.jpg'

/** fin cambiar ATRIBUTO a elementos **/

/** inicio ENVENTOS a elementos**/
// let button = document.getElementById('btn')

// button.addEventListener('click', function(){
//     alert('Hiciste un click en el botón')
// })

/** fin ENVENTOS a elementos**/

// inbuimos codigo html mediante consola del navegador, (pisa el codigo anterior)
// por ej : document.querySelector('body').innerText = 'Hola soy codigo invuido desde la consola' 
// por ej : document.querySelector('body').innerHTML = '<h2>Hola soy codigo invuido desde la consola</h2>' 

// accedemos a un class de 2 formas diferentes: 
document.querySelectorAll('.caja') // deveulve un NodeList, es estatico , no actualiza sus valores automaticamente al manipular el dom
document.getElementsByClassName('caja') // deveulve un HTMLCollection, es dinamico, es similar a un array, es accesibel, actualiza sus valores automaticamente al manipular el dom

//En consola almacenamos en variables elementos del dom, los manipulamos, insertamos botones y vimos como agregarle atributos

// manipular el dom con designMode 
// document.designMode = 'on' -> con 'off' lo deshabilitamos

/**** inicio FUNCIONES ANONIMAS: ****
//Una funcion tambien es un objeto por eso a travez de una constante se puede almacenar una funcion, se puede alojar la funcion dentro de una variable y puede tomar el nombre de la variable
***/

// Ejemplo funcion anonima mal intento de utilizacion: 

// const suma= function adicion(a,b){ funcion NO anonima pero que igualmente puede llamarse desde la constante
//     return a+b
// }
// console.log(adicion(2+2)) // esto seria incorrecto ya que la funcion acidion no esta definida y obtendriamos undefined


// EJEMPLO: en estos ejemplo utilizamos funciones por VALOR( es una copia del valor/una copia del dato,no afecta al valor original fuera de la función)
const suma = function (a,b){
        return a+b
    }

function resta(a, b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

const dividir = function(a,b){
    return a/b
}

const misOperaciones = [suma, resta, multiplicar, dividir] // dentro de este array llamamos objetos

for(let cadaFuncion of misOperaciones){
    console.log(`resultado de cada operacion: ${cadaFuncion(10,2)}`)
}

// console.log(suma(2+2))

// objeto funcion, json, clave valor, en este ejemplo utilizamos funciones por REFERENCIA(estamos referenciando directamente al objeto, se afecta el valor original fuera de la función.)
const objFunc = {
    sum: suma,
    res: resta,
    mult: multiplicar,
    div: dividir
}

console.log(`usando funcion mediante objeto json: ${objFunc.sum(5,5)}`)

/**** fin FUNCIONES ANONOIMAS ****/ 