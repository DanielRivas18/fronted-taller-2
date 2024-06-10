async function loadData() {
    try {

        var result = await fetch("https://taller-2-sigma.vercel.app/api/products")

    } catch (err) {

        return err
    }

    return result;

}

loadData()
    .then(r => r.json())
    .then(data => {
        const tBody = document.querySelector("#tBodi")
        data.data.forEach(prj => {
            const row = document.createElement('tr')

            const colNombre = document.createElement('td')
            colNombre.appendChild(document.createTextNode(prj.nombre))
            row.appendChild(colNombre)

            const colInventario = document.createElement('td')
            colInventario.appendChild(document.createTextNode(prj.inventario))
            row.appendChild(colInventario)

            const colPrecio = document.createElement('td')
            colPrecio.appendChild(document.createTextNode(prj.precio))
            row.appendChild(colPrecio)

            const colTipo = document.createElement('td')
            colTipo.appendChild(document.createTextNode(prj.tipo_producto))
            row.appendChild(colTipo)

            const colEstado = document.createElement('td');
            colEstado.appendChild(document.createTextNode(prj.estado_actual));
            if (prj.estado_actual === 'Vencido') {
                colEstado.classList.add('text-danger'); 
            } else {
                colEstado.classList.add('text-success'); 
            }
            row.appendChild(colEstado);

            tBody.appendChild(row);
        });

        console.log(data);

    })
    .catch(err => console.log(err))