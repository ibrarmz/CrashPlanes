import '/js/FO.js';
import '/js/UFO.js';
import '/js/Aircraft.js';
import '/js/Player.js';
import '/js/Bosses.js';
import '/js/Enemies.js';

const tablero = document.getElementById('tablero');

document.addEventListener('DomContentLoaded', () => {

});

const draw = () => {
    if(tablero.getContext){
        let ctx = tablero.getContext('2d');
    }

    gifler('../pics/chems-burger.gif').frames(tablero, onDrawFrame);
}

draw();