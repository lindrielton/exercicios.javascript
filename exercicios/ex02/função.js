// numero de fibonance

function fibonance(num){
   let  a = 0;
   let  b = 1;
    for(i = 2; i <= num; i++){
      let soma = a
      a = b;
      b = soma + b;
    }
    return b;
}

console.log(fibonance(7))