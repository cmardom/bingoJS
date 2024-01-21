const obtenerJugadores = (url) => {

    return fetch(url).then(resp => resp.json())

}


