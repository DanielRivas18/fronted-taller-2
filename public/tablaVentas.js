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



            tBody.appendChild(row);
        });

        console.log(data);

    })
    .catch(err => console.log(err))