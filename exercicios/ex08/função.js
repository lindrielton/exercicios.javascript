

// soma dos numeros pares
function numeroPAR(lista){
     soma = 0 ;
     lista.reduce((valorinicial, produto ) => {
        if(produto % 2 == 0 ){
            soma += produto;
        }else{
            console.log(`seus numeros inpares são ${produto}`)
        }
     }, 0 )
     console.log(`soma dos pares = ${soma}`)
}
 

numeroPAR([4,6,7,5])

 