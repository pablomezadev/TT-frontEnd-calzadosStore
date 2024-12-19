/*  ACLARACIONES:
estamos viendo estructuras estaticas, en tiempo de ejecucion NO puedo hacer cambios, 
a diferencias de las estructuras dinamicas (que no vemos en este curso), que SI, permiten cambios en tiempo de ejecucion
**/

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
console.log(`TIPADO POR PROXIMODAD: valor que toma un tipo de dato por proximidad 10*3.3 = ${a*3.3}`); // el valor se convierte en entero por proximidad... si se necesita mantener un decimal habria o que castearlo o indicar 2 cifras del lado decimal
console.log(`CONSTANTES: valor de contante PI= ${PI}`); 

//arreglos:
console.log(`ARREGLOS: elemento numero 2 = ${arreglo[1]}`)