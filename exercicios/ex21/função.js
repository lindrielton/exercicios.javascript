//Exercício 71: Escreva uma função que aceite uma função de callback e um número, e execute a função de 
// callback após um certo número de milissegundos especificados pelo número.

function limitadorTempo(callback,tempo){
       setTimeout(callback,tempo)
}

let callback = () => console.log('executado!');



console.log(limitadorTempo(callback,2000));



