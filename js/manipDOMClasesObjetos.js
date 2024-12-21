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
let button = document.getElementById('btn')

button.addEventListener('click', function(){
    alert('Hiciste un click en el botón')
})

/** fin ENVENTOS a elementos**/