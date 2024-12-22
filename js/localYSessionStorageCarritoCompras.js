// if(typeof(Storage) !== 'undefined'){
//     alert(Storage)
//     let alumnos = [ 'Juan','Pedro','Fasola','Armando']
//     sessionStorage.setItem('students', alumnos)
// }else{
//     alert('Local Storage NO disponible')
// }

// //Obtener informacion del Local Storage:
// function obtenerLocalStorage(){
//     if(localStorage.getItem('nombre')){
//         let nombre = localStorage.getItem('nombre')
//         let persona = JSON.parse(localStorage.getItem('persona')) // parseamos el dato a tipo json 
//         console.log(`nombre desde local storage: ${nombre}`)
//         console.log(`persona desde local storage: ${persona}`)
//     }else{
//         console.log('No hay entrada en el local storage')
//     }
// }

// obtenerLocalStorage()

// // Local Storage 
let btn = document.querySelector('#btn1')
btn.addEventListener('click', ()=>{
    let nuevoNombre = document.querySelector('#nuevoNombre')  // capturamos valor ingresado al input
    document.querySelector('#nombre').innerHTML = nuevoNombre.value // inbuimos html con el valor ingresado en el input
    localStorage.setItem('nombre', nuevoNombre.value)  // almacenamos el valor nuevoNombre a local storage
    nuevoNombre.value = ''                              // limpiamos el valor
})

let nombreLocal = window.localStorage.getItem('nombre') // obtiene el valor almacenado en Local Storage
document.querySelector('#nombre').innerHTML = nombreLocal // para inbuir el html desde local storage


//almacenar objeto
function guardarLocalStorage(){
    let persona= {
        nombre: 'Roberto',
        apellido: 'Saul',
        edad: 44,
        correo: 'pablo@gmail.com',
        coordenadas: {
            lat: 10, 
            long: -10
        }
    }

    let nombre = 'Pedro'
    // localStorage.setItem('nombre1', nombre)
    localStorage.setItem('persona', JSON.stringify(persona))
}

// guardarLocalStorage()
