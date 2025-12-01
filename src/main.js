// Importa todas las escenas
//import { Start } from './scenes/Start.js';
import { Inicio } from './scenes/Inicio.js';
import { Juego } from './scenes/Juego.js';
import { Fin } from './scenes/Fin.js';

const config = {
    type: Phaser.AUTO,
    title: 'Overlord Rising',
    //description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    scene: [
        //Start,   // escena inicial (puede ser tu loader o splash)

        Inicio,  // pantalla de inicio con botón "jugar"
        Juego,   // lógica principal del juego
        Fin      // pantalla final con puntaje y reinicio    


    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
            