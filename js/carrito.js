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

document.addEventListener('DOMContentLoaded',cargarCarrito)


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