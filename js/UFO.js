import '/js/Enemies.js'

class UFO extends Enemies {
    static steal() {
        let hora = prompt('Que hora son? ');
        if(hora == 'no traigo cel'){
            alert('Ta bien');
        }else{
            alert('pues a las ' + hora + ' valiste nepe');
        }
        
    }

    static scream() {
        console.log('gritito');
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    UFO.steal();
});