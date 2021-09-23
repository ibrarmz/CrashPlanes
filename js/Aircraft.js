class Aircraft {
    constructor(types){
        this.types = types;
    }

    static takeDamage(){
        let lifes = 3;
        for(let i = 0; i < 3; i++){
            lifes--;
            alert('golpe numero ' + (i+1));
            if(lifes == 0){
                alert('murido (XnX)');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    Aircraft.takeDamage();
});