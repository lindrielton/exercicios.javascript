

// soma dos numeros inpares

function Soma(numeros){
    let media = 0;
     numeros.reduce((numeropar, elemenntoAtual) => {
        if(elemenntoAtual % 2 != 0){
            media += elemenntoAtual;
        }else{
            console.log( `esse numero é par ${elemenntoAtual}`);
        }


     }, 0)
     console.log(`soma de numeros inpares ${media}`);



}



Soma([2,3,6,8,5])
 

 