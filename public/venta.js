document.getElementById('ventaFormulario').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;

    try {
        const response = await fetch('https://taller-2-sigma.vercel.app/api/products/sell', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, cantidad })
        });

        const result = await response.json();

        if (response.ok) {
            alert('Producto vendido exitosamente.');
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
});