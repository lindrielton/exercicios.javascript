
function verificador(array,...orgs){
     return  array.map(...orgs)
 
}

let lista = [[1,2,3],[4,5,8], [12,16]];
let call = num => num.reduce((a , b) => a + b , 0 ) ;


console.log(verificador(lista, call));



