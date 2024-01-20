
let jugador = {
    id: 0,
    nombre: "",
    resultado: [],
};

function jugador_cargar(id, nombre, resultado) {
    jugador.id = id;
    jugador.nombre = nombre;
    jugador.resultado = resultado;
}

let enJuego = {
    // Incluir la información necesaria a guardar para reanudar la partida
    // en caso de interrupción por cierre de la página web.
    // dato1: [],
    // dato2: 0
}

function enJuego_reset() {
    // Reinicializar las propiedades a valores por defecto.
}