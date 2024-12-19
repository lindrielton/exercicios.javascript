function fatorial(num){
    let valor = 1;
    for(i = 2; i <= num; i++ ){
        valor *= i ;
    }

    return valor ;

   
}


console.log(fatorial(5))