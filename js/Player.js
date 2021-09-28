let modifier = 15;
const player = document.getElementById('player');
let moveDown = document.addEventListener('keydown', (event)=>{
    const {style} = player;
        switch(event.key){
            case 'ArrowUp': style.bottom = `${parseInt(style.bottom) + modifier}px`; break;
            case 'ArrowDown': style.bottom = `${parseInt(style.bottom)- modifier}px`; break;
            case 'ArrowLeft': style.left = `${parseInt(style.left)- modifier}px`; break;
            case 'ArrowRight': style.left = `${parseInt(style.left)+ modifier}px`; break;
        }
});

