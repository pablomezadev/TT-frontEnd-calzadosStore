/*  ACLARACIONES:
estamos viendo estructuras estaticas, en tiempo de ejecucion NO puedo hacer cambios, 
a diferencias de las estructuras dinamicas (que no vemos en este curso), que SI, permiten cambios en tiempo de ejecucion
**/


/** incio Js VARIABLES**/
let nroComision = "24232";

// var a = 3;
let b = 3; //depende del alcance del scope
let a = 10; 
var nombre="kike"
const PI = 3.1416 // tipo de variable que no deberia cambiar  

//arreglos:
var arreglo = ["rojo", "verde", 33]


// alert("Hola comision 24232");
// alert(`hola: ${nombre}`);

document.write("<h1>Esto es un encabezado creado con \"document.write\" </h1>");

console.log(`CONCATENACION CON BACKTICKS \`\${}\` = hola comision: ${nroComision}`); 
console.log(`TIPADO POR PROXIMIDAD: valor que toma un tipo de dato por proximidad 10*3.3 = ${a*3.3}`); // el valor se convierte en entero por proximidad... si se necesita mantener un decimal habria o que castearlo o indicar 2 cifras del lado decimal
console.log(`CONSTANTES: valor de contante PI= ${PI}`); 

//arreglos:
console.log(`ARREGLOS: elemento numero 2 = ${arreglo[1]}`)

/** fin Js VARIABLES**/



/** incio Js PROMPT CONDICONALES**/
//let valor1= prompt("ingrese un numero 1: ") // se ingresan valores en la "caja de texto"
//let valor2= prompt("ingrese un numero 2: ")
// let suma = parseInt(valor1)+parseInt(valor2)
// let resta = valor1-valor2
// let producto = valor1*valor2
// let division = valor1/valor2

// console.log(`resultado suma: ${suma}`)
// console.log(`resultado resta: ${resta}`)
// console.log(`resultado producto: ${producto}`)
// console.log(`resultado division: ${division}`)

// inicio condicionales y bucles: 
// let nota1 = parseInt(prompt("ingrese la nota1 del alumno: ")); 
// let nota2 = parseInt(prompt("ingrese la nota2 del alumno: ")); 
// let nota3 = parseInt(prompt("ingrese la nota3 del alumno: ")); 

// let promedio = (nota1+nota2+nota3)/3

// if(promedio >= 6){
//     document.write("<h3> Promocionado </h3>")
// }else{
//     if(promedio >= 4){
//         document.write("<h3> Diciembre </h3>")
//     }else{
//         document.write("<h3> Reprobado </h3>")
//     }
// }

// var valor = parseInt(prompt("ingrese un numero para obtener su equivalente en japones: "));

// switch(valor){
//     case 1: document.write("<h3> ichi</h3>")
//     break
//     case 2: document.write("<h3> ni</h3>")
//     break
//     case 3: document.write("<h3> san</h3>")
//     break
//     case 4: document.write("<h3>yon</h3>")
//     break
//     case 5: document.write("<h3>go</h3>")
//     default:
//         document.write("<h3> El número que ingresó no es valido</h3>")
// }

// tarea: 10 palabras para un diccionario en ingles: 

// var valor = prompt("ingrese una palabra para traducirla al ingles : ");

// switch

// switch(valor){
//     case "casa": document.write("<h3>house</h3>")
//     break
//     case "perro": document.write("<h3>dog</h3>")
//     break
//     case "gato": document.write("<h3>cat</h3>")
//     break
//     case "vehiculo": document.write("<h3>car</h3>")
//     break
//     case "comida": document.write("<h3>food</h3>")
//     break
//     case "llamada": document.write("<h3>call</h3>")
//     break
//     case "manzana": document.write("<h3>apple</h3>")
//     break
//     case "book": document.write("<h3>libro</h3>")
//     break
//     case "friend": document.write("<h3>amigo</h3>")
//     break
//     case "school": document.write("<h3>escuela</h3>")
//     default:
//         document.write("<h3>la palabra que ingresó no es valida</h3>")
// }


// while

// let num = 10
// while(num >= 0){
//     if(num%2==0){
//         console.log(`el numero: ${num} es par`)
//     }else{
//         console.log(`el numero: ${num} es inpar`)
//     }
//     num--
// }

//for 1
// for (let n = 1; n < 10; n++) {
//     document.write(`<h3>num: ${n}</h3>`)
//     document.write("br")
// }

// for 2

// let base, altura, superficie, cuentaTriangulo=0

// for (let i = 1; i <=3; i++) {
//     base = parseInt( prompt(`base`))
//     altura = parseInt( prompt(`altura`))
//     superficie = base*altura/2 // valor
//     if(superficie >= 12){
//         cuentaTriangulo++
//     }
//     document.write(`<h3>triangulo: ${i} </h3>`)
//     document.write(`<h3>la base es: ${base} </h3>`)
//     document.write(`<h3>la altura es: ${base} </h3>`)
//     document.write(`<h3>la superficie es: ${base} </h3>`)
//     document.write(`br`)
// }

// document.write(`<h3> hay: ${cuentaTriangulo} triangulos que superan lo pedido</h3>`)



// fin condicionales y bucles

/** fin Js PROMPT CONDICIONALES**/