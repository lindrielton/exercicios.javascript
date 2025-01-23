function Novoarray(arr){
    let modificar =  arr.map(function(element){
        return element*2;
        
     })
     console.log(modificar);
}


Novoarray([2,3,4,5]);

// outra forma;

function duplicarNum(array){
    return array.map(num => num *2);
}

console.log(duplicarNum([2,4,6]));