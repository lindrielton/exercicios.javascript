//Escreva uma função que receba um número e retorne um array com todos os números primos até aquele número.

function primosAnetN(num){
    let primos = [];
    for(let i = 2 ; i <= num; i++){
        if(filtragem(i)){
            primos.push(i);
        }
    }
       return primos;
}


function filtragem(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }

    return num > 1;
}


console.log(primosAnetN(10));
 








