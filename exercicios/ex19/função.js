//Exercício 69: Escreva uma função que aceite um número e uma função de callback, e execute a função de callback o número de vezes especificado.


function ordenado(num,callback){
        for(i = num; i <= callback;  i++){
        console.log(`a função ${num} tem ${i} `)
    }

}
let numero = 10;
let call = 30;

ordenado(numero,call);







