let botonEnviar = document.getElementById("botonEnviar")
botonEnviar.addEventListener("click", guardarPlataforma)

function guardarPlataforma(){
    const formulario = document.getElementById("miPlataforma")
    const datosDeMiPlataforma = {
        nombre: formulario.nombre.value,
        origen: formulario.origen.value,
        destino: formulario.destino.value,
        fechaIda: formulario.fechaIda.value,
        fechaVuelta: formulario.fechaVuelta.value,

    }


    const datosJson = JSON.stringify(datosDeMiPlataforma)
    localStorage.setItem("tudestino", datosJson)
}


