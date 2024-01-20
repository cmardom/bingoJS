let numeros1a90 = new Array();

function generarNumerosHasta90() {
    for (let i = 1; i <= 90; i++) {
        numeros1a90.push(i);
    }
    let numerosDesordenados = _.shuffle(numeros1a90);
    return numerosDesordenados;
}

let numerosParaCarton = new Array();
let numerosDesordenados = generarNumerosHasta90();

function generarNumerosParaCarton() {
    for (let i = 0; i <= 24; i++) { // Use < instead of <= for 0-based indexing
        numerosParaCarton.push(numerosDesordenados[i]);
    }
    return numerosParaCarton.sort(function(a, b) {
        return a - b; // Sorting in ascending order
    });
}

numerosParaCarton = generarNumerosParaCarton();

//se generan las bolas
let bolas = _.shuffle(numeros1a90);

let bolaSacada;
let bolasSacadas = new Array();
let bolasPremiadas = new Array();


function sacarBola(){
    //se saca 1
    bolaSacada = bolas.pop();
    //se mete en bolas sacadas
    bolasSacadas.push(bolaSacada);

    return bolaSacada;
}



function pintarAciertos (casilla){
    casilla.classList.add("bg-info");
    casilla.classList.add("text-white");
}


function consultar (){
    obtenerJugadores().then(jugadores =>{

        jugadores.forEach(jugador=> {

            if (inputUsuario.value==jugador.nombre && inputPassword.value==jugador.passwd){
                player.id = jugador.id;
                player.nombre = jugador.nombre;
                player.resultado = jugador.resultado;
                localStorage.setItem("jugador", JSON.stringify(player));
                login();
                botonConsultar.classList.add("invisible");
                //botonCerrar.classList.add("invisible");
                return;
            }
        });
    })

}

function login(){
    player = JSON.parse(localStorage.getItem("jugador"));
    document.getElementById("nombre_usuario").innerHTML="<h1>"+player.nombre+"</h1>";
    usuario.classList.add("invisible");
    contrasena.classList.add("invisible");

}