//Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.

//A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.

//Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.

//Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.

//Considere que o array pode conter tanto números inteiros positivos quanto negativos.
   

//function sumUniqueNumbers(arr){
//   const unico = [...new Set(arr)];
// let soma = unico.reduce((inicio, soma) => inicio + soma,0)
//   console.log(soma)
//}


//sumUniqueNumbers([10,50,10,20]);


//function removeDuplicates(arr){
 //  const unico = [...new Set(arr)];
 //  console.log(`${unico}`)
//}

//removeDuplicates(['elton', 25, 'elton', 25, 'matheus', 30, 'matheus', 30])


const arr = []
for(let i = 5; i <= 25; i+=5){
   arr.push(i);
}
console.log(`${arr}`);