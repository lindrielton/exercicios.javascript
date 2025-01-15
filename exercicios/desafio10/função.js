
    let calculadora = {
       soma:function(num1,num2){
        if(num1 == undefined || num2 == undefined){
            console.log('erro,verifique os numeros e tente novamente.')
        }else{
            return num1 + num2;
        }
       }
       ,subtrair:function(n1,n2){
        if(n1 == undefined || n2 == undefined){
            console.log('erro')
        }else{
            return n1 - n2;
        }
       }

       ,mult:function(c1,c2){
        if(c1 == undefined || c2 == undefined){
            console.log('erro')
        }else{
            return c1 * c2;
        }
       }
       ,dividir:function(x1,x2){
        if(x1 == undefined || x2 == undefined){
            console.log('erro')
        }else{
            return x1 / x2;
        }
       }

        
    }


    console.log(calculadora.soma(5,10));
    console.log(calculadora.subtrair(10,4));
    console.log(calculadora.mult(10,5));
    console.log(calculadora.dividir(10,2))
    









   