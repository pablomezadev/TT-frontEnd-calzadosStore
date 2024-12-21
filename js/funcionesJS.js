/** incion FUNCIONES**/

// EJ: 1
// *** ( asignarle valor al parametro de entrada para evitar que pase un undefined aunque se lo indique desde el llamado a la funcion ) ***
// function mostrarMensaje(nombre="nombre",apellido="apellido", edad=30 ){
//     console.log(`Buenas, ${nombre} ${apellido} ${edad} años, bienvenido a funciones en javascrip`)
// }

// mostrarMensaje("Pablo", "Meza",35)
// mostrarMensaje("Juan", "Perez")
// mostrarMensaje(undefined, undefined, 33)

// EJ: 2
// funcion con return (con NaN , "Not a Number") , por intentar realizar una operacion con un parametro que no tiene un valor definido
// function Media(num1 , num2, num3){
//     let media = num1+num2+num3/3
//     return media
// }
// console.log(Media(4,18))

// EJ: 3
// let resultado = 0/0 // INDETERMINACION
// console.log(resultado)

// EJ: 4
// let sqrtRes = Math.sqrt(-1)

// EJ: 5 arguments (es una interfaz IArguments)
/** ARGUMENTS:
 es un objeto especial que se utiliza dentro de las funciones para hacer referencia a los argumentos pasados a la función, independientemente de la cantidad de parámetros definidos en la declaración de la función.
Características de arguments:   
Es un objeto similar a un array (pero no es un array real).
Contiene todos los argumentos pasados a la función, incluso si no se han declarado explícitamente en los parámetros.
Está disponible solo dentro de las funciones.**/
// funcion con arguments (no interesa la cantidad de elementos que le pase porque recrea el for con lo que se le pase como arguemnto)

// function Media(){
//     let suma = 0
//     for (let i = 0; i < arguments.length; i++) {
//         suma += arguments[i];
//     }
//     return suma/arguments.length
// }
// let valor = Media(8,8,8,8)
// console.log(`la media es: ${valor}`)


// EJ:6 Funciones anidadas
// function decorar(texto){
//     return `## ${texto} ##`
// }

// function decorarMas(texto2){
//     return `*** ${texto2} ***`
// }

// console.log(decorarMas("River Campeon "))

// EJ: 7 Funciones Array o de flecha

// funcion tradicional:
// function saludar(alumno){
//     console.log(`Hola ${alumno}`)
// }

// funcion : Array function o funcino de flecha || en JAVA : funcion lambda
// funcino de flecha modo 1
// const saludo = (alumno)=>{
//     console.log(`Hola ${alumno}`)
// }

// funcion flecha simplificada: 
// const saludo = (alumno)=> console.log(`Hola ${alumno}`)
//  saludo("Williams")

// function sumar(num1, num2){
//     return num1+num2
// }

// console.log(sumar(6,4))

// const suma = (num1,num2)=>num1+num2

// let res = suma(6,4)
// console.log( res)

// funciones en arrays:
const numeros= [2,23,4,5,6,76,44,15,11,10] // array
// const filtroM10 = numeros.filter(function(number){
//     return number>10
// })
const filtroM10 = numeros.filter((number)=> number>10 )

console.log(`filtro numeros mayores a 10 en array:[${filtroM10}]`)

/** funciones - Recursivas - No recursivas o iterativas - ámbito de una variable**/

// recursividad con factorial
// const factorial = function(n){
//     if(n==0 | n==1){ // caso base
//         return 1 
//     }else{
//         return factorial(n-1)*n //calculo recursivo
//     }
// }
// console.log(factorial(6))

// NO recursiva con fibonacci
// function fibonacci(n){
//     if(n<=0){
//         return 0    // n=0
//     }else if(n==1){
//         return 1    // caso n= 1
//     }
//     let a = 1
//     let b = 2
//     let fibo = 0
//     for (let i = 2; i <= n; i++) {
//         fibo = a+b  // 2+1 =3 | 
//         a=b         // 
//         b=fibo
//     }
//     return fibo
// }
// console.log(fibonacci(8))


// fibonacci con recursividad
// function fibonacci(n){
//     if(n<=0){
//         return 0    // n=0
//     }else if(n==1){
//         return 1    // caso n= 1
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(8))

/** fin FUNCIONES**/

// Alcance de las variables, super global 
let nombre = "Juan" // variable global , puedo acceder desde cualquier lugar

function saludo(){
    console.log(`Hola ${nombre}`)
}
saludo()

// variable de funcion / ambito local 

