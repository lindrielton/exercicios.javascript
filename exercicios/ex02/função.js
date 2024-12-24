// numero de fibonance

function fibonance(num){
   let  a = 0;
   let  b = 1;
    for(i = 2; i <= num; i++){
      let soma = a;
      a = b;
      b = soma + b;
    }
    return b;
}

console.log(fibonance(7))


// com while


function fibonan(n){
  let a = 0;
  let b = 1;
  let i = 2;
  while( i <= n){
    i++
    let som = a;
    a = b;
    b = som + b;
  }
  return(b)
}

console.log(fibonan(7))
