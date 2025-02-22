
function verificador(array, call){
     return  array.filter(call)
 
}

let lista = [1,2,3,4,5,8,12,16];
let call = num =>  num > 5 ; 


console.log(verificador(lista, call));



