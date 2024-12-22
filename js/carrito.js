// CARRITO DE COMPRAS:

//productos (simulamos base de datos):
const productos = {
    laptop:{
        nombre:"Laptop",
        precio: 1800,
        stock: 10,
        descuento: 0.1
    },
    smartphone:{
        nombre:"Smartphone",
        precio: 1000,
        stock: 8,
        descuento: 0.5
    },
    tablet:{
        nombre:"Tablet",
        precio: 900,
        stock: 15,
        descuento: 0
    }
}

const IVA = 0.21

document.addEventListener('DOMContentLoaded', cargarCarrito)


function agregarCarrito(nombre, precio, productoKey){
    const producto = productos[productoKey]
    if(producto.stock <= 0){
        alert('Producto sin stock')
        return
    }

    //obtener info del carrito en el momento actual desde el local storage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []  // o tiene un valor en carrito desde local Storage o asume un array vacio

    // agregar un nuevo producto
    carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
        productoKey: productoKey
    })

    // reducir stock
    producto.stock--
    document.getElementById(`stock-${productoKey}`).textContent = producto.stock

    //Guradar en local storage
    localStorage.setItem('carrito',JSON.stringify(carrito))

    //renderizar la vista
    renderizarCarrito() 
}

// renderizar productos
function renderizarCarrito(){
    const listaCarrito = document.getElementById('lista-carrito')
    const subTotalCarrito = document.getElementById('subtotal-carrito')
    const descuentoCarrito = document.getElementById('descuento-carrito')
    const ivaCarrito = document.getElementById('iva-carrito')
    const totalCarrito = document.getElementById('total-carrito')
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []

    listaCarrito.innerHTML = ''  //limpiamos carrito

    let subtotal = 0
    let descuentoTotal = 0

    // renderizar cada producto con el foreach
    /** toFixed(0) : el número se redondeará a 0 decimales, es decir, se mostrará como un número entero
        toFixed(2) : mostrar el valor con 2 decimales
     **/
    carrito.forEach(producto, index => {
        const productoInfo = productos[producto.productoKey]
        const li = document.createElement('li')
        //calcular un descuento individual
        const descuentoProducto  = productoInfo.descuento * producto.precio
        const precioConDescuento = producto.descuento - descuentoProducto 
        li.innerHTML = `
        ${producto.nombre} - ${producto.precio} 
        ${productoInfo.descuento >= 0 ?
            `<span class="descuento">(Desc. ${(productoInfo.descuento * 100).toFixed(0)}%): 
            -$${descuentoProducto.toFixed(2)})</span>`
        : ''}`

        // eliminar el producto:
        const botonEliminar = document.createElement('button')
        botonEliminar.textContent = 'Eliminar'
        botonEliminar.onclick =  ()=> eliminarCarrito(index)

        //Agregamos boton a elemento de la lista que va incluyendo la informacion de la lista
        li.appendChild(botonEliminar)
        listaCarrito.appendChild(li)  // incorporamos el elemento a su contenedor (ul)
        
        //cuentas:
        subtotal += producto.precio
        descuentoTotal += descuentoProducto 
    });

    //calcular el IVA
    const ivaTotal = (subtotal-descuentoTotal)*IVA
    const total = subtotal - descuentoTotal * ivaTotal

    //Atucalizar los totales
    subTotalCarrito.textContent = subtotal.toFixed(2)
    descuentoCarrito.textContent = descuentoTotal.toFixed(2)
    ivaCarrito.textContent = ivaTotal.toFixed(2)
    totalCarrito.textContent = total.toFixed(2)
}

function eliminarCarrito(index){
    let carrito=  JSON.parse(localStorage.getItem('carrito')) || []
    // recuperar el producto y devolverlo al stock
    const producto = productos[carrito[indice].productoKey]
    producto.stock++
    document.getElementById(`stock-${carrito[index].productoKey}`).textContent = producto.stock
    //eliminarmos el producto por indice
    carrito.splice(index, 1)
    localStorage.setItem('carrito',JSON.stringify(carrito))
    renderizarCarrito()
}

//vaciar carrito
function vaciarCarrito(){
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    // recorremos cada item del carrito 
    carrito.forEach(item =>{
        const producto= productos[item.productoKey]
        producto.stock++
        document.getElementById(`stock-${item.productoKey}`).textContent = producto.stock
        localStorage.removeItem('carrito')

        renderizarCarrito()
    } )
}

//cargar carrito
function cargarCarrito(){
    renderizarCarrito()
}