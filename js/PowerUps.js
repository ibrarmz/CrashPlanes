class poweUps{
    constructor(types, cadencia){
        this.types = types;
        this.cadencia = cadencia;
    }

    static patternOfBullets(){
        if(this.types == 'escopeta'){
            alert('mushas balas alv');
        }else{
            alert('muy rapido alv');
        }
    }

    static trackingPowerUps(){
        alert('ahi te va prro');
    }
}