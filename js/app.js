// inicio formulario validacion de campos y mensaje exitoso
console.log('estoy usando js...')

function verificarCamposCompletos() {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && correo && mensaje) {
        console.log("Todos los campos están completos.");
        return true;
    } else {
        console.log("Por favor, completa todos los campos antes de enviar el formulario.");
        return false;
    }
}
// Manejo del envío del formulario
document.getElementById('form-contacto').addEventListener('submit', async function(event) {
    event.preventDefault();

    if (!verificarCamposCompletos()) {
        return; // Si los campos no estan completos, no se envia el formulario
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
            // mostrar alerta de exito con bootstrap
            const alerta = document.getElementById('alerta-envio-bootstrap');
            alerta.classList.remove('hidden');
            alerta.classList.add('show');
            document.getElementById('mensaje-error').classList.add('hidden');
            form.reset(); // reinicio de formulario
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

// fin formulario validacion de campos y mensaje exitoso