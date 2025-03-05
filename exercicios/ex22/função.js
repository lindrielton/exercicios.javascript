//Exercício 72: Escreva uma função que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado.

function numeroFunction(num,array,inicio){
    let valor = inicio;
    for(i=0; i < num; i++){
        array.forEach(array => {
            valor = array(valor);
        });
        return valor;
    }
    


  
}
let arra = [ n => n * 2, n => n * 4, n=>  n + n];
let inicio = 1;



console.log(numeroFunction(10,arra, inicio));

