 fetch('panel.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenedor-navegacion').innerHTML = data;
        });
