//Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.

//A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.

//Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.

//Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.

//Considere que o array pode conter tanto números inteiros positivos quanto negativos.
   

function sumUniqueNumbers(arr){
   const unico = [...new Set(arr)];

  // unico.forEach(lista => {
   //   console.log(lista)
      
 //  })

   for(i = 0; i <= unico.length; i+unico){
      
   }
   console.log(`${i} + ${unico}`)

   


  
   


 
}

sumUniqueNumbers([10,20,10,20]);