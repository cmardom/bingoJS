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



let bolas, bolaSacada, bolasPremiadas;

// if (!localStorage.getItem("partida")){
//     numerosParaCarton = generarNumerosParaCarton();
//     bolas = _.shuffle(numeros1a90);
//     bolasSacadas = new Array();
//     bolasPremiadas = new Array();
// } 

//se generan las bolas
// let bolas = _.shuffle(numeros1a90);

// let bolaSacada;
// let bolasSacadas = new Array();
// let bolasPremiadas = new Array();


function sacarBola(){
    //se saca 1
    bolaSacada = bolas.pop();
    //se mete en bolas sacadas
    bolasSacadas.push(bolaSacada);
    
    /*localStorage JUGADOR */
    player = JSON.parse(localStorage.getItem("jugador"));
    player.resultado = bolasSacadas;
    localStorage.setItem("jugador", JSON.stringify(player));



    return bolaSacada;
}



function pintarAciertos (casilla){
    casilla.classList.add("bg-info");
    casilla.classList.add("text-white");
}

function consultar (url){
    obtenerJugadores(url).then(players =>{

        players.forEach(player=> {

            if (inputUsuario.value==player.nombre && inputPassword.value==player.passwd){
                //jugador_cargar(player.id, player.nombre, player.resultado);
                jugador.nombre = player.nombre;
                jugador.id = player.id;
                jugador.resultado = player.resultado;
                localStorage.setItem("jugador", JSON.stringify(player));
                login();

                return;
            }
        });
    })

}

function login(){
    player = JSON.parse(localStorage.getItem("jugador"));
    
    document.getElementById("saludo").innerHTML="<h1>"+player.nombre+"</h1>";


    botonCerrarSesion.classList.remove("invisible");
    inputPassword.classList.add("invisible");
    inputUsuario.classList.add("invisible");
    botonConsultar.classList.add("invisible");
    botonPedirCarta.classList.remove("invisible");
    botonStart.classList.remove("invisible");
   


}

function cerrarSesion(){
    localStorage.removeItem("player");
    botonCerrarSesion.classList.add("invisible");
    inputPassword.classList.remove("invisible");
    inputUsuario.classList.remove("invisible");
    botonConsultar.classList.remove("invisible");
    botonPedirCarta.classList.add("invisible");
    botonStart.classList.add("invisible");
    document.getElementById("saludo").innerHTML="";

}

function cargarPartida(){
             /*localStorage PARTIDA */
   
        partida = JSON.parse(localStorage.getItem("partida"));
        enJuego.carton = partida[0],
        enJuego.bolas = partida[1],
        enJuego.bolasPremiadas = partida[2],
        enJuego.bolasSacadas = partida[3]



        numerosParaCarton= partida[0];
        bolas = partida[1];
        bolasSacadas = partida[2];
        bolasPremiadas = partida[3];







    
}