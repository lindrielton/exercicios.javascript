// numero primo

function primo(num){
    let i = 2;
    while(i <= num){
        i++;
        if( num % i  == 0){
            return false;
        }else{
            return true;
        }
        
    }
}


console.log(primo(11))
