
//Variables globales (etiquetas y demás)

// array de Squares
const tdArray = [];
for (let i = 0; i < 5; i++){
    
    for (let j = 0; j < 5; j++){
        const id = `square${i * 5 + j}`;
        const tdElement = document.getElementById(id);
        if(tdElement){
            tdArray.push(tdElement);
        }
    
        /*  0 * 5 + 0 = 0
            0 * 5 + 1 = 1
            0 * 5 + 2 = 2 */
    }
}


const divJugando = document.getElementById("jugando");
const divResultado = document.getElementById("resultado");
const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("passwd");


//Inicialización de bototes
const botonPedirCarta = document.getElementById("botonPedirCarta");
const botonStart = document.getElementById("start");
const botonConsultar = document.getElementById("botonConsultar");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");

//Variables






//Configuración de eventos (eventListeners)

    //Escribir en el carton los numeros
botonPedirCarta.addEventListener('click', function(event) {

    //para ordenar los numeros
    numerosParaCarton.sort(function(a, b) {
        return a - b;
    });

    //escribirlos
    for (let i = 0; i < tdArray.length; i++){
        tdArray[i].innerText = numerosParaCarton[i];
    }

});



let contadorAciertosJugador=0;

botonStart.addEventListener('click', function(event){


    let indice = 1,
    interval;
    let contadorBolasSacadas = 0;
    let tdArraylength= tdArray.length;

    interval = setInterval(() => {
        indice += 1;

        if (contadorAciertosJugador === 5) { /*condicion para parar. Interval == bucle */
            divResultado.innerText = "Se han sacado " + contadorBolasSacadas + " bolas: " + bolasPremiadas;
        
            clearInterval(interval);
        } else {
            //saca bola y lo pinta en JUGANDO
            bolaSacada = sacarBola();
            
            divJugando.innerText = bolaSacada;
    
            //comprobar aciertos y anadir a bolasPremiadas
            for (let i = 0; i < tdArraylength; i++){
                if (bolaSacada === parseInt(tdArray[i].innerText)){
                    bolasPremiadas.push(bolaSacada);
                    pintarAciertos(tdArray[i]);
                    contadorAciertosJugador++;
                    
                
                }
        
            }
        }
       
       
        contadorBolasSacadas++;

        
    }, 1000);


});
botonPedirCarta.classList.add("invisible");
botonStart.classList.add("invisible");
botonCerrarSesion.classList.add("invisible");
let url = "http://localhost:3000/jugador";

botonConsultar.addEventListener('click', function(event){
    consultar(url);


});

botonCerrarSesion.addEventListener('click', function(event){
    cerrarSesion();

});


//Comprobación localStorage
//  1. Información de jugador (parte 2)
if (localStorage.getItem("jugador")){
    login();
} 


//  2. Información de partida en juego (parte 3)


if (localStorage.getItem("partida")){
    cargarPartida();
} else {
    numerosParaCarton = generarNumerosParaCarton();
    bolas = _.shuffle(numeros1a90);
    bolasSacadas = new Array();
    bolasPremiadas = new Array();
}
