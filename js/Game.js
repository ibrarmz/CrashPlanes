const tablero = document.getElementById('tablero');
const juego = document.getElementById('game-container');
const playBtn = document.getElementById('play');
const volumeBtn = document.getElementById('volume-btn');
const player = document.getElementById('player');

volumeBtn.addEventListener('click', ()=> {
    if(volumeBtn.className == 'fas fa-volume-up'){
        volumeBtn.classList.remove('fa-volume-up');
        volumeBtn.classList.add('fa-volume-mute');
        document.querySelector('audio').muted = true;
    }else{
        volumeBtn.classList.remove('fa-volume-mute');
        volumeBtn.classList.add('fa-volume-up');
        document.querySelector('audio').muted = false;
    }
});

playBtn.addEventListener('click', ()=> {
    tablero.style.display = "none";
    juego.classList.add('game-container-on');
    player.classList.add('player');
});