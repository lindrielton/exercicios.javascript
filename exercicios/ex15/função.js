//funçao que retorna a soma de um array depois da ordem de uma funçao de callbeck

  function soma(lista , callback){
       return  lista.map(callback).reduce((a, b ) =>  a + b, 0);
  }

 let  numeros = [ 1,2,3,4];
 let  callbac = num => num + num;


console.log(soma(numeros,callbac));
