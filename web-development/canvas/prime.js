function findPrimeNumbersBetween(a, b){
    while(a<b){
        a=a+1; 
        let isPrimeNumber= isAaPrimeNumber(a);
        if(isPrimeNumber===true){
            console.log(a+" is a prime number")
        }
    }
    
}

function isAaPrimeNumber(num){
    let x=2;
    while(x<num){
        if(num%x===0){
            return false;
        }
        x=x+1
    }
    return true;
} 
findPrimeNumbersBetween(2, 30)
