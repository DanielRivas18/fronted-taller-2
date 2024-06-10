document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Recoge los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const inventario = document.getElementById('inventario').value;
    const tipo_producto = document.getElementById('tipo_producto').value;
    const fecha_vencimiento = document.getElementById('fecha_vencimiento').value || null;
    const precio = document.getElementById('precio').value;

    // Crea el objeto JSON sin incluir el campo id
    const datos = {
        nombre: nombre,
        inventario: inventario,
        tipo_producto: tipo_producto,
        fecha_vencimiento: fecha_vencimiento,
        precio: precio
    };

    // Realiza la solicitud POST
    fetch('https://taller-2-sigma.vercel.app/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);
        alert('Producto enviado con éxito');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error al enviar el producto');
    });
});
