// Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um array de resultados de aplicar cada função de callback ao valor.



function ordenado(num, callback){
    return callback.map( callback => callback(num));

}

let call = [num => num + 2, num => num * 2, num => num / 2 ];
let numero = 2;

console.log(ordenado(numero,call));




function aplicarCallbacks (callback, valor) { 
        return  callback.map(callback => callback(valor)); 
    }
    
   
    let  callback = [num => num * 2 , num => num * num, num => num / 2 ]; 
    let  valor = 4 ;
    
   

    console.log(aplicarCallbacks(callback, valor));

   


