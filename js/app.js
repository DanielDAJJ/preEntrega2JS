// ************************************** variables

const jugador = prompt("Ingresa el nombre del jugador");
const cartasJugador = [];

const maquina = "Rival";
const cartasRival = [];

let seleccionJugador;
let seleccionRival;

class cartas {
    constructor (numero, palo) {
        this.numero = numero;
        this.palo = palo;
    }
};

let victoriasJugador = 0;
let victoriasMaquina = 0;

let rondas = 1;
//************************************* Funciones

alert("Hola " + jugador + " a continuación te enfrentarás en un juego de cartas contra tu " + maquina + ". El objetivo es ganar 3 de 5 rondas en las que deberás escoger entre un conjunto de tres números, una vez hayas seleccionado tu número este se comparará con la carta de tu " + maquina + ". El número mayor ganará");

manoJugador();
escogerCartaJugador();
escogerCartaRival()

//-------- función para crear cartas del jugador y el rival

function generarNumero(min, max) {
    return Math.floor(Math.random()*(max - min + 1) +min);
}// función para generar los números de las cartas
function generarPalo() {
    let palo = generarNumero(1,4);
    switch (palo){
        case 1:
            return "♥";
        break;
        case 2:
            return "♦";
        break;
        case 3:
            return "♣";
        break;
        default:
            return "♠"
    }
}// función para devolver el palo de la carta
function manoJugador() {
    if (cartasJugador.length <= 3 && cartasRival.length <= 3) {
        for (let i = 0; i < 3; i+=1) {
            const cartaJugador = new cartas (generarNumero(1,13), generarPalo());
            const cartaRival = new cartas (generarNumero(1,13), generarPalo());
            cartasJugador.push(cartaJugador);
            cartasRival.push(cartaRival);
        }
    }
}//Función para crear nuevas cartas en la mano de los jugadores

//-------- función para seleccionar cartas del jugador

function escogerCartaJugador() {
    if (cartasJugador.length == 3) {
        console.log("Tus cartas son: ");
        cartasJugador.forEach(cartas => {
            console.log(cartas)
        });
    }
    let seleccion = Number(prompt("Elige tu carta: " + cartasJugador[0].numero + cartasJugador[0].palo + ", " + cartasJugador[1].numero + cartasJugador[1].palo + ", " + cartasJugador[2].numero + cartasJugador[2].palo));
    if (seleccion == cartasJugador[0].numero){
        seleccionJugador = cartasJugador[0];
    } else if (seleccion == cartasJugador[1].numero){
        seleccionJugador = cartasJugador[1];
    } else if (seleccion == cartasJugador[2].numero){
        seleccionJugador = cartasJugador[2];
    } else {
        alert ("debes seleccionar una opción de carta valida")
        escogerCartaJugador();
    }
    return alert ("Escogiste la carta: " + seleccionJugador.numero + seleccionJugador.palo);
}//Función que permite al jugador escoger una carta
function escogerCartaRival() {
    let seleccionR = generarNumero(1,3);
    switch (seleccionR) {
        case 1:
            if (seleccionR == 1) {
                seleccionRival = cartasRival[0];  
            };
            break;
        case 2:
            if (seleccionR == 2) {
                seleccionRival = cartasRival[0];  
            };
            break;
        default:
            seleccionRival = cartasRival[2];
    }
    return alert ("Tu " + maquina + " ha sacado " + seleccionRival.numero + seleccionRival.palo);
}//Función para escoger la carta del rival