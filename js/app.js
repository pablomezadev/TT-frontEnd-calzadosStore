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

// Definir los productos simulando bd o api
const productosSetDatos = [
    // const productos = [
    {
        id: 0,
        imagen: "../img/productos/mochila1.png",
        titulo: "Producto 1",
        stock: 17,
        descripcionCorta: "Detalle Producto 1.",
        descripcionLarga: "Descripción detallada del producto 1.",
        precio: 100,
        descuento: 10
    }
    ,
    {
        id: 1,
        imagen: "../img/productos/gorra_1.png",
        titulo: "Producto 2",
        stock: 3,
        descripcionCorta: "Detalle Productoo 2.",
        descripcionLarga: "Descripción detallada del producto 2.",
        precio: 110,
        descuento: 0
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
        cantidadCompra: 0,
        descuento: 50
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
        cantidadCompra: 0,
        descuento: 50
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
        cantidadCompra: 0,
        descuento: 50
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
        cantidadCompra: 0,
        descuento: 50
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
        cantidadCompra: 0,
        descuento: 0
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
        cantidadCompra: 0,
        descuento: 10
    }
];

let carritoLocalStorage;
const IVA = 0.21;
const IMPUESTOS = IVA;

//creo productos:
const productos = productosSetDatos.map(product => ({
    id: product.id,
    titulo: product.titulo,
    imagen: product.imagen,
    descripcionCorta: product.descripcionCorta,
    descripcionLarga: product.descripcionLarga,
    precio: product.precio,
    stock: product.stock,
    descuento: product.descuento,
    cantidad: product.cantidadCompra
}));

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito()
    renderizarProductos()
    renderizarPaginaCarrito()

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

});


// ********************************************************* inicio renderizacion de CARRITO ************************************************



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


    console.log(`Detalle de productos: ${JSON.stringify(productos)}`)

    if (document.querySelector(".product-section")) {

        console.log(`SECCION PRODUCTOS- Estamos en seccion catalogo de productos || tenemos: ${productos.length} tipo de productos`)

        const productSection = document.querySelector(".product-section");
        productSection.innerHTML = ""; // Limpiar el contenido previo

        productos.forEach((productItem) => {

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
    carritoLocalStorage = obtenerCarrito();
    console.log(`CARRITO Local Storage - tenemos: ${carritoLocalStorage.length} TIPO de productos `)
    console.log(`CARRITO Local Storage - tenemos: ${carritoLocalStorage.reduce((acc, item) => acc + item.cantidad, 0)} productos en TOTAL `)

    actualizarContadorIconoCarrito()
}

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito y ajustar el stock al cargar la página 
function actualizarContadorIconoCarrito() {
    // Ajustar el stock de los productos basándose en el carrito

    if (document.querySelector("#cart-icon")) {
        carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];

        const cartCount = document.getElementById("cart-count");
        const cantidadTotal = carritoLocalStorage.reduce((acc, item) => acc + item.cantidad, 0);
        console.log(`se ejecuta la carga de icono contador - carrito Local Storag tiene : ${carritoLocalStorage.length} productos`)
        console.log(`se ejecuta la carga de icono contador - tiene esta cantidad total: ${cantidadTotal} `)
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


//**** inicio modal confirmacion agregar al carrito ****//
if (document.getElementById("confirmModal") || document.querySelector("carrito-section")) {

    // Modal de confirmación
    const modal = document.getElementById("confirmModal");
    const closeModal = document.querySelector(".close");
    const cancelBtn = document.getElementById("cancelBtn");
    const confirmBtn = document.getElementById("confirmBtn");
    const txtConfirmacion = document.getElementById("txt-confirmacion");

    // txtConfirmacion.innerHTML = ""
    // txtConfirmacion.textContent = `¿Deseas agregar producto: ${productoConfirmado.titulo} al carrito?`


    // Función para abrir el modal
    function abrirModal() {
        if (productoConfirmado) {  // Solo actualizamos si productoConfirmado no es null
            txtConfirmacion.innerHTML = "";
            txtConfirmacion.innerHTML = `¿Deseas agregar el producto: "<strong>${productoConfirmado.titulo}</strong>" al carrito?`;
        } else {
            console.error("No se ha definido el producto para confirmar.");
        }
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
        if (productItem.stock == 0) {
            alert("No hay stock disponible en este momento")
        } else {
            abrirModal();
        }
    }

}


// Función para agregar el producto al carrito
function agregarAlCarritoProducto(productItem) {
    // Verificar si hay stock disponible
    if (productItem.stock <= 0) {
        alert("No hay suficiente stock disponible.");
        return;
    }
    console.log(`agregarAlCarrito - contenido de carrito en LS :${carritoLocalStorage}`)
    // Buscar si el producto ya está en el carrito
    const productoEnCarrito = carritoLocalStorage.find(item => item.id === productItem.id);
    // console.log(`productos en referencia a carrito antes de ser agregado ${JSON.stringify(productoEnCarrito)}`)
    // console.log(`se econtro producto en carrito : ${productoEnCarrito}`)

    // Reducir el stock disponible
    productItem.stock -= 1;
    if (productoEnCarrito) {
        console.log(`productos encontrado en carrito: ${JSON.stringify(productoEnCarrito)}`)

        // Incrementar la cantidad si ya existe en el carrito
        productoEnCarrito.cantidad += 1;
        productoEnCarrito.stock = productItem.stock;
    } else {
        // Si no está en el carrito, agregarlo con cantidad inicial de 1
        // carritoLocalStorage.push({
        //     id: productItem.id,
        //     cantidad: 1,
        //     precio: productItem.precio, // Guardar el precio base del producto
        //     stock: productItem.stock
        // });


        productItem.cantidad = 1
        carritoLocalStorage.push(
            productItem
        );
    }

    // console.log(`productos en referencia a carrito despues de que carrito Local Storage fue hecho push agregado ${JSON.stringify(productoEnCarrito)}`)

    // Actualizar el stock visual
    actualizarStockVisual(productItem.id, productItem.stock);

    // Guardar el carrito actualizado en localStorage
    // agregarAlCarrito(JSON.stringify(carritoLocalStorage));
    guardarCarrito(carritoLocalStorage);

    // Actualizar el contador del carrito
    actualizarContadorIconoCarrito();
    renderizarSeccionCarritoResumen();

    // Mostrar mensaje de éxito
    // alert(`${productItem.titulo} ha sido agregado al carrito`);
}
//***** fin modal confirmacion agregar al carrito *****//

//****************** inicio pagina con detalles del carrito ***************//

function renderizarPaginaCarrito() {
    renderizarSeccionCarritoListaProductos()
    renderizarSeccionCarritoResumen()
}



function renderizarSeccionCarritoResumen() {
    if (document.getElementById('section-carrito-resumen')) {
        renderizarCarrito()

        if (carritoLocalStorage.length === 0 || !carritoLocalStorage) {
            const sectionCarritoResumen = document.getElementById('section-carrito-resumen');
            sectionCarritoResumen.innerHTML = ""
            // Botón "seguir comprando"
            const btnSeguirComprando = document.createElement('button');
            btnSeguirComprando.id = 'productos';
            btnSeguirComprando.className = 'btn btn-primary';
            btnSeguirComprando.textContent = 'Seguir Comprando';
            // btnSeguirComprando.href="../pages/productos.html";
            sectionCarritoResumen.appendChild(btnSeguirComprando)
            btnSeguirComprando.addEventListener("click", () => {
                window.location.href = "../pages/productos.html";
            })
            return
        } else {


            const sectionCarritoResumen = document.getElementById('section-carrito-resumen');
            const divContenedor = document.querySelector(".carrito-resumen-contenedor")
            const divDetalles = document.querySelector(".resumen-detalles")

            // if(document.querySelector(".carrito-resumen-contenedor")){

            // encabezado = document.querySelector(".")

            // }else{
            // const divContenedor = document.createElement('div');
            // divContenedor.className = 'carrito-resumen-contenedor';
            // const encabezado = document.createElement('h2');
            // encabezado.textContent = 'Resumen de tu carrito';
            // const divDetalles = document.createElement('div');
            // divDetalles.className = 'resumen-detalles';
            // }


            // Crear el contenedor principal
            // divContenedor = document.createElement('div');
            // divContenedor.className = 'carrito-resumen-contenedor';

            // Crear el encabezado
            // encabezado = document.createElement('h2');
            // encabezado.textContent = 'Resumen de tu carrito';
            const encabezado = document.querySelector('.carrito-resumen-contenedor h2');
            encabezado.textContent = '';
            encabezado.textContent = 'Resumen de tu carrito';

            // Crear el contenedor de detalles
            // divDetalles = document.querySelector('div');
            // divDetalles.className = 'resumen-detalles';
            // divDetalles = document.querySelector(".resumen-detalles")   


            //calcular costos
            let subtotal = 0;
            let descuentos = 0;
            let totalImpuestos = 0;
            let total = 0;
            carritoLocalStorage.forEach(producto => {
                subtotal += producto.precio * producto.cantidad; // Calculamos el subtotal de cada producto
            });

            carritoLocalStorage.forEach(producto => {
                descuentos += producto.descuento * producto.cantidad; // Calculamos el subtotal de cada producto
            });
            // iva = (subtotal - descuentos) * 0.21
            totalImpuestos = (subtotal - descuentos) * IMPUESTOS
            total = (subtotal - descuentos) + totalImpuestos 
            console.log(`subtotal= ${subtotal}`)
            console.log(`descuentos= ${descuentos}`)
            // console.log(`IVA= ${iva.toFixed(2)}`)
            console.log(`IMPUESTOS= ${totalImpuestos.toFixed(2)}`)
            // Detalles del resumen
            const detalles = [
                { label: 'Subtotal:', id: 'subtotal', value: `$${subtotal.toFixed(2)}` },
                { label: 'Descuento:', id: 'descuento', value: `$${descuentos.toFixed(2)}` },
                { label: 'IVA (21%):', id: 'iva', value: `$${totalImpuestos.toFixed(2)}` },
                { label: 'Total:', id: 'total', value: `$${total.toFixed(2)}`, className: 'total' }
            ];

            // detalles.forEach(detalle => {
            //     const p = document.querySelector('.resumen-detalles p');
            //     if (detalle.className) p.className = detalle.className;

            //     const label = document.createTextNode(`${detalle.label} `);
            //     const span = document.querySelector('.resumen-detalles span');
            //     span.id = detalle.id;
            //     span.textContent = detalle.value;

            //     p.appendChild(label);
            //     p.appendChild(span);
            //     divDetalles.appendChild(p);
            // });

            // Actualizar solo los valores de los spans existentes en el HTML
            detalles.forEach(detalle => {
                const span = document.getElementById(detalle.id);
                if (span) {
                    span.textContent = detalle.value;  // Actualiza solo el valor sin tocar el id o clases
                }
            });

            // Crear el contenedor de botones
            const divBotones = document.querySelector('.resumen-botones');
            // divBotones.className = 'resumen-botones';

            // Botón "Vaciar carrito"
            const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
            // btnVaciarCarrito.id = 'vaciar-carrito';
            // btnVaciarCarrito.className = 'btn btn-danger';
            btnVaciarCarrito.textContent = 'Vaciar carrito';

            // Botón "Checkout"
            const btnCheckout = document.querySelector('#checkout');
            // btnCheckout.id = 'checkout';
            // btnCheckout.className = 'btn btn-primary';
            btnCheckout.textContent = 'Checkout';




            // renderizarCarritoPaginaDetalle()



            // ******   eventos     ******//

            //limpiar carrito
            btnVaciarCarrito.addEventListener("click", function () {
                const ventanaModalVaciarCarrito = document.createElement("div")
                ventanaModalVaciarCarrito.classList.add("modal");
                ventanaModalVaciarCarrito.innerHTML =
                    `<div class="modal-content">
                    <span class="close">&times;</span>
                    <h2>Confirmar acción</h2>
                    <p id="txt-confirmacion">¿Deseas eliminar todos los productos del carrito?</p>
                    <div class="modal-buttons">
                        <button id="cancelBtn" class="cancel">Cancelar</button>
                        <button id="confirmBtn" class="confirm">Confirmar</button>
                    </div>
                </div>`

                // const modalEliminarCarrito = document.createElement("div")
                // modalEliminarCarrito.classList.add("modal-content")
                // const contentModalEliminarCarrito = document.createElement("div")
                // contentModalEliminarCarrito.classList.add("modal-content"

                // Agregar el modal al cuerpo de la página
                document.body.appendChild(ventanaModalVaciarCarrito);

                // Obtener elementos del modal
                const closeModalVaciarCarrito = ventanaModalVaciarCarrito.querySelector(".close");
                const cancelBtnVaciarCarrito = ventanaModalVaciarCarrito.querySelector("#cancelBtn");
                const confirmBtnVaciarCarrito = ventanaModalVaciarCarrito.querySelector("#confirmBtn");
                // const txtConfirmacion = ventanaModal.querySelector("#txt-confirmacion");


                // Función para abrir el modal
                function abrirModalVaciarCarrito() {
                    ventanaModalVaciarCarrito.style.display = "flex"; // Muestra el modal
                }

                // Función para cerrar el modal
                function cerrarModalVaciarCarrito() {
                    ventanaModalVaciarCarrito.style.display = "none"; // Oculta el modal
                }

                // Evento para cerrar el modal si el usuario hace clic en el botón "Cancelar"
                cancelBtnVaciarCarrito.addEventListener("click", function () {
                    cerrarModalVaciarCarrito();
                });

                // Evento para cerrar el modal si el usuario hace clic en la "X"
                closeModalVaciarCarrito.addEventListener("click", function () {
                    cerrarModalVaciarCarrito();
                });

                // Evento para confirmar la acción de vaciar el carrito
                confirmBtnVaciarCarrito.addEventListener("click", function () {
                    vaciarCarrito(); // Llamar a la función para vaciar el carrito
                    cerrarModalVaciarCarrito();
                    renderizarPaginaCarrito()
                });

                // Función para vaciar el carrito y eliminar productos
                function vaciarCarrito() {
                    // Aquí puedes agregar la lógica de vaciar el carrito, por ejemplo:
                    // Restaurar el stock de productos, limpiar el localStorage, etc.
                    localStorage.removeItem('carrito');
                    alert("Carrito vaciado con éxito.");
                    renderizarSeccionCarritoResumen();
                }

                // Mostrar el modal
                abrirModalVaciarCarrito();
            });

            btnCheckout.addEventListener("click",()=>{
                confirmarCompra();
            })


            // Agregar botones al contenedor de botones
            divBotones.appendChild(btnVaciarCarrito);
            divBotones.appendChild(btnCheckout);

            // Agregar elementos al contenedor principal
            // if(){

            // }
            divContenedor.appendChild(encabezado);
            divContenedor.appendChild(divDetalles);
            divContenedor.appendChild(divBotones);

            // Insertar el contenedor principal en la sección
            sectionCarritoResumen.appendChild(divContenedor);

        }

    }
}

//****************** fin pagina con detalles del carrito ***************//




// ********* inicio actualizacion estados producto***********
function actualizarEstadoProductosDisponiblesDesdeCarritoStorage(productItem) {
    const actualizacionEstadoProductos = carritoLocalStorage.find(item => item.id === productItem.id);
    if (actualizacionEstadoProductos) {
        productItem.stock = actualizacionEstadoProductos.stock
    }
}


function renderizarSeccionCarritoListaProductos() {
    if (document.querySelector(".carrito-section")) {

        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const carritoSection = document.querySelector(".carrito-section")
        // const contenedorCarritoDet = document.getElementById("contenedor-carrito-det");
        // const productoCarrito = document.querySelector(".producto-carrito");

        // Limpiar el contenedor antes de renderizar
        carritoSection.innerHTML = "";
        carritoSection.innerHTML = "<h2>Terminá tu carrito</h2> ";
        // contenedorCarritoDet.innerHTML = "";
        // productoCarrito.innerHTML = "";

        // Si no hay productos, mostrar mensaje
        console.log(carrito.length === 0)
        if (carrito.length === 0) {
            carritoSection.innerHTML = "<p>No hay productos en tu carrito.</p>";
            return;
        }

        // Si hay productos, renderizarlos
        carrito.forEach(producto => {
            // obtenerCarrito();
            // carritoSection.innerHTML = "";

            //crear contendedores items
            const contenedorItems = document.createElement("div")

            //crear contenedorCarritoDet
            const contenedorCarritoDet = document.createElement("div")
            contenedorCarritoDet.id = "contenedor-carrito-det";

            //crear contenedor producto-carrito
            const productoCarrito = document.createElement("div")
            productoCarrito.classList.add("producto-carrito")

            // crear producto carrito desc stock compra 
            const productoCarritoDescripcionCompra = document.createElement("div");
            productoCarritoDescripcionCompra.id = "productoCarritoDescripcionCompra"
            productoCarritoDescripcionCompra.dataset.id = producto.id;


            // const productoCarrito = document.createElement("div");
            // productoCarrito.classList.add("producto-carrito");
            productoCarrito.dataset.id = producto.id; // Guardar ID en el dataset para manipulación posterior



            productoCarrito.innerHTML =
                `<div>
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <button class="btn btn-danger btn-sm" id="eliminarProducto" onclick="eliminarProducto(${producto.id})">x</button>
            </div>
            <h3>${producto.titulo}</h3>
            <div id="bnt-carrito">
                <button class="btn-eliminar" onclick="disminuirCantidadProductosPorId(${producto.id})">-</button>
                <span id="seccion-carrito-cant-val">x <span class="cantidad">${producto.cantidad}</span></span>
                <button class="btn-agregar" onclick="agregarProducto(${producto.id})">+</button>
            </div>`;
            productoConfirmado = producto
            // <!-- <button class="btn-agregar" onclick="agregarProducto(${producto.id})">+</> -->

            productoCarritoDescripcionCompra.innerHTML =
                `<div id="producto-carrito-descripcion-compra">
                <span id="seccion-carrito-disponible">Stock: <span class="stock">${producto.stock}</span></span>
                <span>C/U: <span class="precio">$${producto.precio.toFixed(2)}</span></span>
                <span>Total: <span class="subtotal">$${(producto.precio * producto.cantidad).toFixed(2)}</span></span>
            </div>
            `;

            // contenedorCarritoDet.appendChild(productoCarrito); // Añadir el producto al contenedor
            // contenedorCarritoDet.append(productoCarritoDescripcionCompra); // Añadir el producto al contenedor


            // contenedorCarritoDet.innerHTML = ""
            contenedorCarritoDet.appendChild(productoCarrito); // Añadir el producto al contenedor
            contenedorCarritoDet.appendChild(productoCarritoDescripcionCompra); // Añadir el producto al contenedor
            carritoSection.appendChild(contenedorCarritoDet)
        });

        // renderizarCarritoPaginaDetalle()
    }
}


// Función para agregar un producto
function agregarProducto(id) {
    // const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    console.log(`Carrito actual en agregarProductos: ${JSON.stringify(carrito)}`);

    const productoConfirmado = carrito.find(p => p.id === id); // Encuentra el producto por su id

    console.log(`Producto confirmado: ${JSON.stringify(productoConfirmado)}`);
    console.log(`Producto stock: ${JSON.stringify(productoConfirmado.stock)}`);

    if (productoConfirmado) {
        if (JSON.stringify(productoConfirmado).stock === 0) {
            alert("No hay stock disponible.");
        } else {
            // abrirModal();
            agregarAlCarritoProducto(productoConfirmado);
            renderizarSeccionCarritoListaProductos()
        }
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para agregar un producto
function disminuirCantidadProductosPorId(id) {
    // const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    console.log(`Carrito actual en agregarProductos: ${JSON.stringify(carrito)}`);

    const productoConfirmado = carrito.find(p => p.id === id); // Encuentra el producto por su id

    console.log(`Producto confirmado: ${JSON.stringify(productoConfirmado)}`);
    console.log(`Producto stock: ${JSON.stringify(productoConfirmado.stock)}`);

    if (productoConfirmado) {
        if (productoConfirmado.cantidad === 1) {
            console.log(`producto confirmado cantidad= ${productoConfirmado}`)
            eliminarProducto(productoConfirmado.id)
            renderizarSeccionCarritoListaProductos()
            renderizarSeccionCarritoResumen()
            renderizarCarrito()
            alert("Se eliminó el producto de la lista.");
        } else {
            // abrirModal();
            disminuyeCantidadDeUnProdPorId(productoConfirmado);
            renderizarSeccionCarritoListaProductos()
        }
    } else {
        alert("Producto no encontrado.");
    }
    // renderizarPaginaCarrito()
}

// Función para eliminar un producto
function eliminarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(p => p.id !== id); // Eliminar el producto por su ID
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
    renderizarSeccionCarritoListaProductos()
    renderizarSeccionCarritoResumen()
}

// Llamar a la función para renderizar el carrito al cargar la página
renderizarCarrito();


// ********* fin actualizacion estados producto***********

// Función para disminuir la cantidad de productos en la lista de productos en carrito
function disminuyeCantidadDeUnProdPorId(productItem) {
    // Verificar si hay stock disponible

    // console.log(`Productos en carrito: ${JSON.stringify(carritoLocalStorage)}`)

    if (productItem.cantidad <= 0) {
        alert("No hay suficientes productos disponibles.");
        eliminarProducto(productItem.id)
        renderizarSeccionCarritoListaProductos()
        // renderizarPaginaCarrito()
        return;
    }


    // console.log(`agregarAlCarrito - contenido de carrito en LS :${carritoLocalStorage}`)
    // Buscar si el producto ya está en el carrito
    const productoEnCarrito = carritoLocalStorage.find(item => item.id === productItem.id);
    // console.log(`productos en referencia a carrito antes de ser agregado ${JSON.stringify(productoEnCarrito)}`)
    // console.log(`se econtro producto en carrito : ${JSON.stringify(productoEnCarrito)}`)

    // // Reducir cantidad disponible en carrito la
    productItem.cantidad += 1;
    if (productoEnCarrito) {
        console.log(`productos encontrado en carrito: ${JSON.stringify(productoEnCarrito)}`)
        // Incrementar el stock
        productoEnCarrito.stock += 1;
        // productoEnCarrito.cantidad = productItem.stock;
        productoEnCarrito.cantidad--;

    } else {
        carritoLocalStorage.push(
            productItem
        );
    }

    // console.log(`productos en referencia a carrito despues de que carrito Local Storage fue hecho push agregado ${JSON.stringify(productoEnCarrito)}`)

    // Actualizar el stock visual
    actualizarStockVisual(productItem.id, productItem.stock);

    // Guardar el carrito actualizado en localStorage
    // agregarAlCarrito(JSON.stringify(carritoLocalStorage));
    guardarCarrito(carritoLocalStorage);

    // Actualizar el contador del carrito
    actualizarContadorIconoCarrito();

    renderizarSeccionCarritoResumen();

    // Mostrar mensaje de éxito
    // alert(`${productItem.titulo} ha sido agregado al carrito`);
}


//******************* inicio seccion carrito Resumen ******************************//

// checkout confirmar compra:

function confirmarCompra(){
    const ventanaModaConfirmarCompraCarrito = document.createElement("div")
    ventanaModaConfirmarCompraCarrito.classList.add("modal");
    ventanaModaConfirmarCompraCarrito.innerHTML =
        `<div class="modal-content">
        <span class="close">&times;</span>
        <h2>Confirmar acción</h2>
        <p id="txt-confirmacion">¿Deseas confirmar la compra?</p>
        <div class="modal-buttons">
            <button id="cancelBtn" class="cancel">Cancelar</button>
            <button id="confirmBtn" class="confirm">Confirmar</button>
        </div>
    </div>`

    // const modalEliminarCarrito = document.createElement("div")
    // modalEliminarCarrito.classList.add("modal-content")
    // const contentModalEliminarCarrito = document.createElement("div")
    // contentModalEliminarCarrito.classList.add("modal-content"

    // Agregar el modal al cuerpo de la página
    document.body.appendChild(ventanaModaConfirmarCompraCarrito);

    // Obtener elementos del modal
    const closeModalVaciarCarrito = ventanaModaConfirmarCompraCarrito.querySelector(".close");
    const cancelBtnVaciarCarrito = ventanaModaConfirmarCompraCarrito.querySelector("#cancelBtn");
    const confirmBtnVaciarCarrito = ventanaModaConfirmarCompraCarrito.querySelector("#confirmBtn");
    // const txtConfirmacion = ventanaModal.querySelector("#txt-confirmacion");


    // Función para abrir el modal
    function abrirModalConfirmarCompra() {
        ventanaModaConfirmarCompraCarrito.style.display = "flex"; // Muestra el modal
    }

    // Función para cerrar el modal
    function cerrarModalVaciarCarrito() {
        ventanaModaConfirmarCompraCarrito.style.display = "none"; // Oculta el modal
    }

    // Evento para cerrar el modal si el usuario hace clic en el botón "Cancelar"
    cancelBtnVaciarCarrito.addEventListener("click", function () {
        cerrarModalVaciarCarrito();
    });

    // Evento para cerrar el modal si el usuario hace clic en la "X"
    closeModalVaciarCarrito.addEventListener("click", function () {
        cerrarModalVaciarCarrito();
    });

    // Evento para confirmar la acción de vaciar el carrito
    confirmBtnVaciarCarrito.addEventListener("click", function () {
        // vaciarCarrito(); // Llamar a la función para vaciar el carrito
        alert("compra realizada con exito")
        cerrarModalVaciarCarrito();
        vaciarCarrito();
        renderizarPaginaCarrito()
    });

    // Función para vaciar el carrito y eliminar productos
    function vaciarCarrito() {
        // Aquí puedes agregar la lógica de vaciar el carrito, por ejemplo:
        // Restaurar el stock de productos, limpiar el localStorage, etc.
        localStorage.removeItem('carrito');
        // alert("Carrito vaciado con éxito.");
        renderizarSeccionCarritoResumen();
    }

    // Mostrar el modal
    abrirModalConfirmarCompra();
}

//******************* fin seccion carrito Resumen ******************************//