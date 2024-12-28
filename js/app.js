// validacion formulario de contacto
// console.log('estoy usando js...');

// function verificarCamposCompletos() {
//     const nombre = document.getElementById('nombre')?.value.trim();  // Añadir '?', para evitar error si el formulario no está presente.
//     const correo = document.getElementById('correo')?.value.trim();
//     const mensaje = document.getElementById('mensaje')?.value.trim();

//     if (nombre && correo && mensaje) {
//         console.log("Todos los campos están completos.");
//         return true;
//     } else {
//         console.log("Por favor, completa todos los campos antes de enviar el formulario.");
//         return false;
//     }
// }

// // logica del formulario de contacto
// document.addEventListener("DOMContentLoaded", () => {
//     // solo se ejecuta si el formulario de contacto esta presente en el DOM
//     if (document.getElementById('form-contacto')) {
//         console.log('Formulario de contacto encontrado');

//         document.getElementById('form-contacto').addEventListener('submit', async function (event) {
//             event.preventDefault();

//             if (!verificarCamposCompletos()) {
//                 return; // Si los campos no están completos, no se envía el formulario
//             }

//             const form = event.target;
//             const formData = new FormData(form);

//             try {
//                 const response = await fetch('https://formspree.io/f/myzyjvve', {
//                     method: 'POST',
//                     body: formData,
//                     headers: {
//                         'Accept': 'application/json'
//                     }
//                 });

//                 if (response.ok) {
//                     // Mostrar alerta de éxito con bootstrap
//                     const alerta = document.getElementById('alerta-envio-bootstrap');
//                     alerta.classList.remove('hidden');
//                     alerta.classList.add('show');
//                     document.getElementById('mensaje-error').classList.add('hidden');
//                     form.reset(); // Reinicio de formulario
//                     setTimeout(() => {
//                         alerta.classList.remove('show');
//                     }, 5000);

//                     console.log("Formulario enviado con éxito.");
//                 } else {
//                     throw new Error('Error al enviar el formulario');
//                 }
//             } catch (error) {
//                 const mensajeError = document.getElementById('mensaje-error');
//                 mensajeError.classList.remove('hidden');
//                 console.error('Error:', error);
//             }
//         });
//     }
// });

// *******************************************************  PRODUCTOS ******************************************************************

// Definir los productos
const productosSetDatos = [
    {
        id: 0,
        imagen: "../img/productos/mochila1.png",
        titulo: "Producto 1",
        stock: 17,
        descripcionCorta: "Detalle Producto 1.",
        descripcionLarga: "Descripción detallada del producto 1.",
        precio: 100 // Precio base
    }
    ,
    {
        id: 1,
        imagen: "../img/productos/gorra_1.png",
        titulo: "Producto 2",
        stock: 3,
        descripcionCorta: "Detalle Productoo 2.",
        descripcionLarga: "Descripción detallada del producto 2.",
        precio: 110 // Precio base
    }
    ,
    {
        id: 2,
        imagen: "../img/productos/mochila1.png",
        titulo: "Producto 3",
        stock: 10,
        descripcionCorta: "Detalle Producto 3.",
        descripcionLarga: "Descripción detallada del producto 3.",
        precio: 120, // Precio base
        cantidadCompra: 0
    }
    ,
    {
        id: 3,
        imagen: "../img/productos/gorra_1.png",
        titulo: "Producto 4",
        stock: 35,
        descripcionCorta: "Detalle Producto 4.",
        descripcionLarga: "Descripción detallada del producto 4.",
        precio: 130, // Precio base
        cantidadCompra: 0
    }
    ,
    {
        id: 4,
        imagen: "../img/productos/mochila1.png",
        titulo: "Producto 5",
        stock: 25,
        descripcionCorta: "Detalle Producto 5.",
        descripcionLarga: "Descripción detallada del producto 5.",
        precio: 140, // Precio base
        cantidadCompra: 0
    }
    ,
    {
        id: 5,
        imagen: "../img/productos/gorra_1.png",
        titulo: "Producto 6",
        stock: 8,
        descripcionCorta: "Detalle Producto 6.",
        descripcionLarga: "Descripción detallada del producto 6.",
        precio: 150, // Precio base
        cantidadCompra: 0
    }
    ,
    {
        id: 6,
        imagen: "../img/productos/mochila1.png",
        titulo: "Producto 7",
        stock: 4,
        descripcionCorta: "Detalle Producto 7.",
        descripcionLarga: "Descripción detallada del producto 7.",
        precio: 160, // Precio base
        cantidadCompra: 0
    }
    ,
    {
        id: 7,
        imagen: "../img/productos/gorra_1.png",
        titulo: "Producto 8",
        stock: 20,
        descripcionCorta: "Detalle Producto 8.",
        descripcionLarga: "Descripción detallada del producto 8.",
        precio: 170, // Precio base
        cantidadCompra: 0
    }
];

// //creo productos:
// const productos = productosSetDatos.map(product => ({
//     id: product.id,
//     titulo: product.titulo,
//     imagen: product.imagen,
//     descripcionCorta: product.descripcionCorta,
//     descripcionLarga: product.descripcionLarga,
//     precio: product.precio,
//     stock: product.stock,
//     descuento: 0,
//     cantidadCompra: 0
// }));

let carritoLocalStorage;
const IVA = 0.21;
const IMPUESTOS = IVA;


document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito()
    renderizarProductos()
    renderizarPaginaCarrito()
    // solo ejecuta el codigo de productos si la sección de productos esta presente
    // if (document.querySelector(".product-section")) {
    //     console.log('Sección de productos encontrada');

    //contador carrito
    // const cartCount = document.getElementById("cart-count");
    // console.log(`productos a utlizar: ${JSON.stringify(productos)}`)



    // Lógica para mostrar u ocultar el contador
    // function actualizarContadorCarrito() {
    //     const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0); // Usar 'cantidad' en lugar de 'stock'
    //     if (cantidadTotal === 0) {
    //         cartCount.classList.add("hidden");
    //     } else {
    //         cartCount.classList.remove("hidden");
    //         cartCount.textContent = cantidadTotal;
    //     }
    // }



    // ESTE ANDABA 27-12-2024
    // // Función para actualizar el contador del carrito
    // function actualizarIconoContadorCarrito() {
    //     const cartCount = document.getElementById("cart-count");
    //     const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    //     if (cantidadTotal === 0) {
    //         cartCount.classList.add("hidden");
    //     } else {
    //         cartCount.classList.remove("hidden");
    //         cartCount.textContent = cantidadTotal;
    //     }
    // }

    // Función para calcular el total del carrito
    // function calcularTotalCarrito() {

    //     // function calcularTotalCarrito() {
    //     let total = 0;  // Inicializamos el total en 0

    //     // Iteramos sobre cada producto en el carrito
    //     for (let i = 0; i < carrito.length; i++) {
    //         let item = carrito[i];  // Obtenemos el producto actual

    //         // Sumamos el precio del producto multiplicado por la cantidad al total
    //         total = total + (item.cantidad * item.precio);
    //     }

    //     // Devolvemos el total con dos decimales
    //     return total.toFixed(2);
    //     // }            
    // }

    // // actualizar el stock visual
    // function actualizarStockVisual(productoId, nuevoStock) {
    //     const cards = document.querySelectorAll(".product-card");
    //     cards.forEach(card => {
    //         const cardTitle = card.querySelector("h3").textContent;
    //         if (productosSetDatos.find(product => product.titulo === cardTitle).id === productoId) {
    //             const quantityElement = card.querySelector(".quantity");
    //             quantityElement.textContent = `Disponibles: ${nuevoStock}`;
    //         }
    //     });
    // }


    // Función para actualizar el stock visual
    // function actualizarStockVisual(productoId, nuevoStock) {
    //     const card = document.querySelector(`.product-card[data-id="${productoId}"]`);
    //     if (card) {
    //         const quantityElement = card.querySelector(".quantity");
    //         quantityElement.textContent = `Disponibles: ${nuevoStock}`;
    //     }
    // }
    //     // // Ejemplo: Mostrar el total del carrito en la consola
    //     console.log(`Total del carrito (con IVA incluido) : $${calcularTotalCarrito()}`);
    // }




});


// ********************************************************* inicio renderizacion de CARRITO ************************************************


// function cargarCarritoMainRender(){
//     renderizarCarrito()
// }


// // renderizar productos
// function renderizarCarrito() {
//     let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];


//     if(document.querySelector("#cart-count")){
//         console.log("Seccion con Icono contador de carrito encontrada")
//         console.log(`cantidad de elementos actuales del carrito en local Storage "actualizarContadorCarrito": ${carritoLocalStorage.length} `)

//         // Función para actualizar el contador del carrito
//         function actualizarIconoContadorCarrito() {
//             const cartCount = document.getElementById("cart-count");
//             const cantidadTotal = carritoLocalStorage.reduce((acc, item) => acc + item.cantidad, 0);
//             if (cantidadTotal === 0) {
//                 cartCount.classList.add("hidden");
//             } else {
//                 cartCount.classList.remove("hidden");
//                 cartCount.textContent = cantidadTotal;
//             }
//         }
//         actualizarContadorCarrito();
//     }


//     // solo ejecuta el codigo de productos si la sección de carrito esta presente
//     if (document.querySelector(".carrito-section")) {
//         console.log('Sección de carrito encontrada');

//         const listaCarrito = document.getElementById('lista-carrito')
//         const subTotalCarrito = document.getElementById('subtotal-carrito')
//         const descuentoCarrito = document.getElementById('descuento-carrito')
//         const ivaCarrito = document.getElementById('iva-carrito')
//         const totalCarrito = document.getElementById('total-carrito')
//         const carrito = JSON.parse(localStorage.getItem('carrito')) || []

//         console.log(`cant inicial en carrito: ${carrito.length} `)
//         // console.log(`probando acceso a productos - primer producto : ${JSON.stringify(productosSetDatos[0])}`)


//         listaCarrito.innerHTML = ''; //limpiamos carrito

//         let subtotal = 0
//         let descuentoTotal = 0

//         // renderizar cada producto con el foreach
//         /** toFixed(0) : el número se redondeará a 0 decimales, es decir, se mostrará como un número entero
//             toFixed(2) : mostrar el valor con 2 decimales
//         **/
//         carrito.forEach((producto, index) => {
//             const productoInfo = productos[producto.id]
//             const li = document.createElement('li')
//             //calcular un descuento individual
//             const descuentoProducto = productoInfo.descuento * producto.precio
//             const precioConDescuento = producto.descuento - descuentoProducto
//             li.innerHTML = `
//             ${producto.nombre} - ${producto.precio} 
//             ${productoInfo.descuento >= 0 ?
//                     `<span class="descuento">(Desc. ${(productoInfo.descuento * 100).toFixed(0)}%): 
//                 -$${descuentoProducto.toFixed(2)})</span>`
//                     : ''}`

//             // eliminar el producto:
//             const botonEliminar = document.createElement('button')
//             botonEliminar.textContent = 'Eliminar'
//             botonEliminar.onclick = () => eliminarCarrito(index)

//             //Agregamos boton a elemento de la lista que va incluyendo la informacion de la lista
//             li.appendChild(botonEliminar)
//             listaCarrito.appendChild(li)  // incorporamos el elemento a su contenedor (ul)

//             //cuentas:
//             subtotal += producto.precio
//             descuentoTotal += descuentoProducto
//         });

//         //calcular el IVA
//         const ivaTotal = (subtotal - descuentoTotal) * IVA
//         const total = subtotal - descuentoTotal * ivaTotal

//         //Atucalizar los totales
//         subTotalCarrito.textContent = subtotal.toFixed(2)
//         descuentoCarrito.textContent = descuentoTotal.toFixed(2)
//         ivaCarrito.textContent = ivaTotal.toFixed(2)
//         totalCarrito.textContent = total.toFixed(2)

//         //vaciar limpiar carrito 
//         function vaciarCarrito() {
//             // Restaurar stock de todos los productos
//             const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//             carrito.forEach(item => {
//                 const producto = productos[item.id];
//                 producto.stock++;
//                 // document.getElementById(`stock-${item.id}`).textContent = producto.stock;
//             });

//             // Limpiar localStorage
//             localStorage.removeItem('carrito');

//             // Renderizar
//             renderizarCarrito();
//         }
//     }
// }



//******************************            comienzo FUNCIONES AUXILIARES                    *****************************/

// Función para renderizar los productos
// function renderizarProductos(productos) {
function renderizarProductos() {
    //creo productos:
    const productos = productosSetDatos.map(product => ({
        id: product.id,
        titulo: product.titulo,
        imagen: product.imagen,
        descripcionCorta: product.descripcionCorta,
        descripcionLarga: product.descripcionLarga,
        precio: product.precio,
        stock: product.stock,
        descuento: 0,
        cantidadCompra: 0
    }));

    console.log(`Detalle de productos: ${JSON.stringify(productos)}`)

    if (document.querySelector(".product-section")) {

        console.log(`SECCION PRODUCTOS- Estamos en seccion catalogo de productos || tenemos: ${productos.length} tipo de productos`)

        const productSection = document.querySelector(".product-section");
        productSection.innerHTML = ""; // Limpiar el contenido previo

        productos.forEach((productItem) => {
            // carritoLocalStorage.forEach((itemCarrito)=>{ })

            //actualizo el estado del stock del productos de acuerdo al carrito armado
            actualizarEstadoProductosDisponiblesDesdeCarritoStorage(productItem)

            // Calcular el precio con IVA
            const precioConIVA = productItem.precio + (productItem.precio * IVA);
            console.log(`precio sin IVA: ${productItem.precio} || precio con IVA: ${precioConIVA}`)


            // Crear el contenedor principal de la tarjeta
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.setAttribute("data-id", productItem.id); // Añadir atributo data-id

            // Imagen de la tarjeta
            const img = document.createElement("img");
            img.src = productItem.imagen;
            img.classList.add("card-img-top");
            img.alt = productItem.titulo;

            // Título de la tarjeta
            const cardTitle = document.createElement("h3");
            cardTitle.textContent = productItem.titulo;

            // Cantidad disponible
            const quantity = document.createElement("p");
            quantity.classList.add("quantity");
            quantity.textContent = `Disponibles: ${productItem.stock}`;

            // breve descripcion del producto
            const shortDescription = document.createElement("p");
            shortDescription.classList.add("short-description");
            shortDescription.textContent = productItem.descripcionCorta;

            // descripcion adicional (inicialmente oculta)
            const description = document.createElement("p");
            description.classList.add("description");
            description.textContent = productItem.descripcionLarga;

            // mostrar precio con IVA
            const price = document.createElement("p");
            price.classList.add("price");
            price.textContent = `Precio c/IVA: $${precioConIVA.toFixed(2)}`; // mostramos el precio con IVA incluido

            // boton "ver mas"
            const viewMoreButton = document.createElement("button");
            viewMoreButton.classList.add("view-more");
            viewMoreButton.textContent = "Ver más";

            // boton "Agregar al carrito"
            const addToCartButton = document.createElement("button");
            addToCartButton.classList.add("add-to-cart");
            addToCartButton.textContent = "Agregar al carrito";

            //******                    eventos productos                    ******//

            // alternar la visibilidad de la descripcion
            viewMoreButton.addEventListener("click", function () {
                description.classList.toggle("active"); // Mostrar u ocultar la descripción
                viewMoreButton.classList.toggle("active"); // Cambiar la clase del botón
                viewMoreButton.textContent = description.classList.contains("active") ? "Ver menos" : "Ver más";
            });

            // Evento para agregar al carrito
            addToCartButton.addEventListener("click", function () {
                agregarAlCarritoConConfirmacion(productItem);
            });


            // agregar elementos al contenedor de la card
            card.appendChild(img);
            card.appendChild(cardTitle);
            card.appendChild(quantity);
            card.appendChild(shortDescription);
            card.appendChild(price);
            card.appendChild(viewMoreButton);
            card.appendChild(description);
            card.appendChild(addToCartButton);
            // Agregar la card/tarjeta completa al contenedor principal
            productSection.appendChild(card);

        });
    }
}

function renderizarCarrito() {
    carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(`CARRITO Local Storage - tenemos: ${carritoLocalStorage.length} TIPO de productos `)
    console.log(`CARRITO Local Storage - tenemos: ${carritoLocalStorage.reduce((acc, item) => acc + item.cantidad, 0)} productos en TOTAL `)

    actualizarContadorIconoCarrito()
}


// Función para cargar el carrito y ajustar el stock al cargar la página 
function actualizarContadorIconoCarrito() {
    // Ajustar el stock de los productos basándose en el carrito

    if (document.querySelector("#cart-icon")) {
        const cartCount = document.getElementById("cart-count");
        console.log(`se ejecuta la carga de icono contador carrito`)

        const cantidadTotal = carritoLocalStorage.reduce((acc, item) => acc + item.cantidad, 0); // Usar 'cantidad' en lugar de 'stock'
        if (cantidadTotal === 0) {
            cartCount.classList.add("hidden");
        } else {
            cartCount.classList.remove("hidden");
            cartCount.textContent = cantidadTotal;
        }

    }

}

//actualizar stock - (Disponibles en card)
// Función para actualizar el stock visual
function actualizarStockVisual(productoId, nuevoStock) {
    const card = document.querySelector(`.product-card[data-id="${productoId}"]`);
    if (card) {
        const quantityElement = card.querySelector(".quantity");
        quantityElement.textContent = `Disponibles: ${nuevoStock}`;
    }
}


function agregarAlCarrito(carrito) {
    localStorage.setItem("carrito", carrito)
}

//**** inicio modal confirmacion agregar al carrito ****//
if (document.getElementById("confirmModal")) {

    // Modal de confirmación
    const modal = document.getElementById("confirmModal");
    const closeModal = document.querySelector(".close");
    const cancelBtn = document.getElementById("cancelBtn");
    const confirmBtn = document.getElementById("confirmBtn");

    // Función para abrir el modal
    function abrirModal() {
        modal.style.display = "flex"; // Muestra el modal
    }

    // Función para cerrar el modal
    function cerrarModal() {
        modal.style.display = "none"; // Oculta el modal
    }

    // Evento para cerrar el modal si el usuario hace clic en el botón "Cancelar"
    cancelBtn.addEventListener("click", function () {
        cerrarModal();
    });

    // Evento para cerrar el modal si el usuario hace clic en la "X"
    closeModal.addEventListener("click", function () {
        cerrarModal();
    });

    // Evento para confirmar la acción
    confirmBtn.addEventListener("click", function () {
        // Llamar a la función de agregar al carrito
        agregarAlCarritoProducto(productoConfirmado);
        cerrarModal();
    });

    // Función para mostrar el modal y confirmar la acción de agregar al carrito
    let productoConfirmado = null;  // Variable para guardar el producto que el usuario quiere agregar al carrito

    function agregarAlCarritoConConfirmacion(productItem) {
        productoConfirmado = productItem; // Guardamos el producto que el usuario está intentando agregar
        abrirModal();
    }

}


// Función para agregar el producto al carrito
function agregarAlCarritoProducto(productItem) {
    // Verificar si hay stock disponible
    if (productItem.stock <= 0) {
        alert("No hay suficiente stock disponible.");
        return;
    }

    // Buscar si el producto ya está en el carrito
    const productoEnCarrito = carritoLocalStorage.find(item => item.id === productItem.id);
    // console.log(`productos en referencia a carrito antes de ser agregado ${JSON.stringify(productoEnCarrito)}`)


    // Reducir el stock disponible
    productItem.stock -= 1;
    if (productoEnCarrito) {
        // Incrementar la cantidad si ya existe en el carrito
        productoEnCarrito.cantidad += 1;
        productoEnCarrito.stokk = productItem.stock;
    } else {
        // Si no está en el carrito, agregarlo con cantidad inicial de 1
        carritoLocalStorage.push({
            id: productItem.id,
            cantidad: 1,
            precio: productItem.precio, // Guardar el precio base del producto
            stokk: productItem.stock
        });
    }

    // console.log(`productos en referencia a carrito despues de que carrito Local Storage fue hecho push agregado ${JSON.stringify(productoEnCarrito)}`)

    // Actualizar el stock visual
    actualizarStockVisual(productItem.id, productItem.stock);

    // Guardar el carrito actualizado en localStorage
    agregarAlCarrito(JSON.stringify(carritoLocalStorage));

    // Actualizar el contador del carrito
    actualizarContadorIconoCarrito();

    // Mostrar mensaje de éxito
    // alert(`${productItem.titulo} ha sido agregado al carrito`);
}
//***** fin modal confirmacion agregar al carrito *****//

//****************** inicio pagina con detalles del carrito ***************//
function renderizarPaginaCarrito() {
    if (document.getElementById('section-carrito-resumen')) {
        // Seleccionamos la sección por su ID
        const sectionCarritoResumen = document.getElementById('section-carrito-resumen');

        // Crear el contenedor principal
        const divContenedor = document.createElement('div');
        divContenedor.className = 'carrito-resumen-contenedor';

        // Crear el encabezado
        const encabezado = document.createElement('h2');
        encabezado.textContent = 'Resumen del carrito';

        // Crear el contenedor de detalles
        const divDetalles = document.createElement('div');
        divDetalles.className = 'resumen-detalles';

        // Detalles del resumen
        const detalles = [
            { label: 'Subtotal:', id: 'subtotal', value: '$1100.00' },
            { label: 'Descuento:', id: 'descuento', value: '$0.00' },
            { label: 'IVA (21%):', id: 'iva', value: '$231.00' },
            { label: 'Total:', id: 'total', value: '$1331.00', className: 'total' }
        ];

        detalles.forEach(detalle => {
            const p = document.createElement('p');
            if (detalle.className) p.className = detalle.className;

            const label = document.createTextNode(`${detalle.label} `);
            const span = document.createElement('span');
            span.id = detalle.id;
            span.textContent = detalle.value;

            p.appendChild(label);
            p.appendChild(span);
            divDetalles.appendChild(p);
        });

        // Crear el contenedor de botones
        const divBotones = document.createElement('div');
        divBotones.className = 'resumen-botones';

        // Botón "Vaciar carrito"
        const btnVaciarCarrito = document.createElement('button');
        btnVaciarCarrito.id = 'vaciar-carrito';
        btnVaciarCarrito.className = 'btn btn-danger';
        btnVaciarCarrito.textContent = 'Vaciar carrito';

        // Botón "Checkout"
        const btnCheckout = document.createElement('button');
        btnCheckout.id = 'checkout';
        btnCheckout.className = 'btn btn-primary';
        btnCheckout.textContent = 'Checkout';

        // ******   eventos     ******//

        //limpiar carrito
        btnVaciarCarrito.addEventListener("click", function () {
            //vaciar limpiar carrito 
            function vaciarCarrito() {
                // Restaurar stock de todos los productos

                // Limpiar localStorage
                localStorage.removeItem('carrito');

                // Renderizar
                renderizarCarrito();
            }
            vaciarCarrito();
        });


        // Agregar botones al contenedor de botones
        divBotones.appendChild(btnVaciarCarrito);
        divBotones.appendChild(btnCheckout);

        // Agregar elementos al contenedor principal
        // divContenedor.appendChild(encabezado);
        // divContenedor.appendChild(divDetalles);
        divContenedor.appendChild(divBotones);

        // Insertar el contenedor principal en la sección
        sectionCarritoResumen.appendChild(divContenedor);

    }
}

//****************** fin pagina con detalles del carrito ***************//




// ********* inicio actualizacion estados producto***********
function actualizarEstadoProductosDisponiblesDesdeCarritoStorage(productItem) {
    const actulizacionEstadoProductos = carritoLocalStorage.find(item => item.id === productItem.id);
    if (actulizacionEstadoProductos) {
        productItem.stock = actulizacionEstadoProductos.stokk
    }
}

// ********* fin actualizacion estados producto***********