// validacion formulario de contacto
// console.log('estoy usando js...');

function verificarCamposCompletos() {
    const nombre = document.getElementById('nombre')?.value.trim();  // Añadir '?', para evitar error si el formulario no está presente.
    const correo = document.getElementById('correo')?.value.trim();
    const mensaje = document.getElementById('mensaje')?.value.trim();

    if (nombre && correo && mensaje) {
        console.log("Todos los campos están completos.");
        return true;
    } else {
        console.log("Por favor, completa todos los campos antes de enviar el formulario.");
        return false;
    }
}

// logica del formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
    // solo se ejecuta si el formulario de contacto esta presente en el DOM
    if (document.getElementById('form-contacto')) {
        console.log('Formulario de contacto encontrado');

        document.getElementById('form-contacto').addEventListener('submit', async function (event) {
            event.preventDefault();

            if (!verificarCamposCompletos()) {
                return; // Si los campos no están completos, no se envía el formulario
            }

            const form = event.target;
            const formData = new FormData(form);

            try {
                const response = await fetch('https://formspree.io/f/myzyjvve', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Mostrar alerta de éxito con bootstrap
                    const alerta = document.getElementById('alerta-envio-bootstrap');
                    alerta.classList.remove('hidden');
                    alerta.classList.add('show');
                    document.getElementById('mensaje-error').classList.add('hidden');
                    form.reset(); // Reinicio de formulario
                    setTimeout(() => {
                        alerta.classList.remove('show');
                    }, 5000);

                    console.log("Formulario enviado con éxito.");
                } else {
                    throw new Error('Error al enviar el formulario');
                }
            } catch (error) {
                const mensajeError = document.getElementById('mensaje-error');
                mensajeError.classList.remove('hidden');
                console.error('Error:', error);
            }
        });
    }
});

// logica de productos
const IVA = 0.21;
const IMPUESTOS = IVA;

document.addEventListener("DOMContentLoaded", () => {
    // solo ejecuta el codigo de productos si la sección de productos esta presente
    if (document.querySelector(".product-section")) {
        console.log('Sección de productos encontrada');

        // Definir los productos
        const productos = [
            {
                //implementar un -> id
                imagen: "../img/productos/mochila1.png",
                titulo: "Producto 1",
                cantidad: 10,
                descripcionCorta: "Detalle Producto 1.",
                descripcionLarga: "Descripción detallada del producto 1.",
                precio: 100 // Precio base
            }
            ,
            {
                imagen: "../img/productos/gorra_1.png",
                titulo: "Producto 2",
                cantidad: 5,
                descripcionCorta: "Detalle Productoo 2.",
                descripcionLarga: "Descripción detallada del producto 2.",
                precio: 150 // Precio base
            }
            ,
            {
                imagen: "../img/productos/mochila1.png",
                titulo: "Producto 2",
                cantidad: 5,
                descripcionCorta: "Detalle Producto 2.",
                descripcionLarga: "Descripción detallada del producto 2.",
                precio: 150 // Precio base
            }
            ,
            {
                imagen: "../img/productos/gorra_1.png",
                titulo: "Producto 2",
                cantidad: 5,
                descripcionCorta: "Detalle Producto 2.",
                descripcionLarga: "Descripción detallada del producto 2.",
                precio: 150 // Precio base
            }
            ,
            {
                imagen: "../img/productos/mochila1.png",
                titulo: "Producto 2",
                cantidad: 5,
                descripcionCorta: "Detalle Producto 2.",
                descripcionLarga: "Descripción detallada del producto 2.",
                precio: 150 // Precio base
            }
            ,
            {
                imagen: "../img/productos/gorra_1.png",
                titulo: "Producto 2",
                cantidad: 5,
                descripcionCorta: "Detalle Producto 2.",
                descripcionLarga: "Descripción detallada del producto 2.",
                precio: 150 // Precio base
            }
            ,
            {
                imagen: "../img/productos/mochila1.png",
                titulo: "Producto 2",
                cantidad: 5,
                descripcionCorta: "Detalle Producto 2.",
                descripcionLarga: "Descripción detallada del producto 2.",
                precio: 150 // Precio base
            }
            ,
            {
                imagen: "../img/productos/gorra_1.png",
                titulo: "Producto 2",
                cantidad: 5,
                descripcionCorta: "Detalle Producto 2.",
                descripcionLarga: "Descripción detallada del producto 2.",
                precio: 150 // Precio base
            }
        ];

        // Función para renderizar los productos
        function renderProductos(productos) {
            const productSection = document.querySelector(".product-section");
            productSection.innerHTML = ""; // Limpiar el contenido previo

            productos.forEach((producto) => {
                // Calcular el precio con IVA
                const precioConIVA = producto.precio + (producto.precio * IMPUESTOS);

                // Crear el contenedor principal de la tarjeta
                const card = document.createElement("div");
                card.classList.add("product-card");

                // Imagen de la tarjeta
                const img = document.createElement("img");
                img.src = producto.imagen;
                img.classList.add("card-img-top");
                img.alt = producto.titulo;

                // Título de la tarjeta
                const cardTitle = document.createElement("h3");
                cardTitle.textContent = producto.titulo;

                // Cantidad disponible
                const quantity = document.createElement("p");
                quantity.classList.add("quantity");
                quantity.textContent = `Disponibles: ${producto.cantidad}`;

                // breve descripcion del producto
                const shortDescription = document.createElement("p");
                shortDescription.classList.add("short-description");
                shortDescription.textContent = producto.descripcionCorta;

                // descripcion adicional (inicialmente oculta)
                const description = document.createElement("p");
                description.classList.add("description");
                description.textContent = producto.descripcionLarga;

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

                //alternar la visibilidad de la descripcion
                viewMoreButton.addEventListener("click", function () {
                    description.classList.toggle("active"); // Mostrar u ocultar la descripción
                    viewMoreButton.classList.toggle("active"); // Cambiar la clase del botón
                    viewMoreButton.textContent = description.classList.contains("active") ? "Ver menos" : "Ver más";
                });

                // Evento para agregar al carrito
                addToCartButton.addEventListener("click", function () {
                    alert(`${producto.titulo} ha sido agregado al carrito`);
                });

                // agregar elementos al contenedor de la card
                card.appendChild(img);
                card.appendChild(cardTitle);
                card.appendChild(quantity);
                card.appendChild(shortDescription);
                card.appendChild(price); // Agregar precio
                card.appendChild(viewMoreButton);
                card.appendChild(description);
                card.appendChild(addToCartButton);

                // Agregar la tarjeta al contenedor principal
                productSection.appendChild(card);
            });
        }

        // Renderizar productos
        renderProductos(productos);
    }
});
