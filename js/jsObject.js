// NO debemos usar metodos para tipos primitivos :
//  EJ: 
// let numero= 5
// numero.toString()

/** Tipos primitivos:
 * String: Representa una secuencia de caracteres (texto). Se puede definir con comillas simples, dobles o backticks.

Ejemplo: 'Hola', "Mundo", `¡Hola!`
Number: Representa valores numéricos, tanto enteros como decimales (flotantes).

Ejemplo: 42, 3.14, -7
BigInt: Representa enteros grandes que no pueden ser manejados por el tipo Number.

Ejemplo: 9007199254740991n, 1234567890123456789012345678901234567890n
Boolean: Representa un valor de verdad, que puede ser true o false.

Ejemplo: true, false
Undefined: Representa una variable que ha sido declarada pero no tiene un valor asignado.

Ejemplo: let x; // x es undefined
Null: Representa la ausencia intencional de cualquier valor u objeto.

Ejemplo: let obj = null;
Symbol: Representa un valor único e inmutable, generalmente utilizado como identificador de propiedades de objetos.

Ejemplo: let sym = Symbol('descripcion');
Undefined: Representa la ausencia de valor o que una variable no ha sido inicializada.

Ejemplo: let x; // x es undefined**/

// referencias a objetos:

// let persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     email: "jperez@gmail.com",
//     edad: 35,
//     nombreCompleto: function(){
//         return `${this.nombre} ${this.apellido}`
//     }
// }

// console.log(persona.nombreCompleto())
 //creamos persona reservando espacio en la memoria con new
//  let persona2= new Object()
//  persona2.nombre = 'Jorge'
//  persona2.direccion = 'pamplinas 232'
//  persona2.tel = '44991122'

//  console.log(`valor de tel.: "${persona2.tel}"`)


// accedemos a las propiedades mediante [] con el nombre de su clave, NO tiene indices, no es array
// let persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     email: "jperez@gmail.com",
//     edad: 35,
//     nombreCompleto: function(){
//         return `${this.nombre} ${this.apellido}`
//     }
// }

// recorrer objeto con for in 

// for (nombrePropiedad in persona) {
//     console.log('propiedad clave: '+nombrePropiedad) //obtenemos el valor de la CLAVE
//     console.log('propiedad valor: '+persona[nombrePropiedad]) //obtenemos el valor del VALOR

// }

// console.log('apellido: '+persona['apellido']) // accedemos por nombre de propiedad (clave)
// console.log("persona: "+ persona.email)
// delete persona.email
// console.log("persona: "+ persona.email) // undefined : se elimino la propiedad
// console.log(persona) 

// recorrer con Object.values
// let personaCol = Object.values(persona) // devulve el objeto como Arreglo 
// console.log(personaCol) 

// recorrer con JSON
// let personaString = JSON.stringify(persona) // devulve el objeto como JSON -  todo está pasado a string 
// console.log(personaString) 

// metodos GET y SET
// let persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     email: "jperez@gmail.com",
//     edad: 35,
//     idioma: 'es',
//     get nombreCompleto(){ // aplicamos el uso de getters
//         return `${this.nombre} ${this.apellido}`
//     },
//     get lang(){
//         return this.idioma.toUpperCase()
//     },
//     set lang(lang){
//         return this.idioma = lang.toUpperCase()
//     }

// }

// console.log(persona.nombreCompleto)
// persona.lang = 'indian'
// console.log(persona.idioma)


// crear objetos mediante constructor: 
// podemos crear objetos basados en persona que hacen referencia a otra parte de la memoria
function Persona(nombre, apellido, edad){
    this.nombre= nombre,
    this.apellido= apellido,
    this.edad = edad
}

let padre = new Persona('Julio','Lopez',39)
let madre = new Persona('Maria','Ibañez',38)
padre.nombre = 'Carlos'
console.log(padre)
console.log(madre)

