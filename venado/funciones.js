var triagulo = (numero = 5) => {
    a = "";
    for(let i = 0;i<numero;i++){
        a += "*";
        console.log(a);
    }
    for(i = numero-1;i>=0;i--){
        a = a.substr(0,i);
        console.log(a);
    }
}


var fiizbuzz = (arrg) => {
    for(let i = 0; i < arrg.length; i++){
        if( arrg[i] % 5 == 0 && arrg[i] % 3 == 0){
            console.log("FizzBuzz");
        } else if(arrg[i] % 5 == 0){
            console.log("Buzz")
        } else if(arrg[i] % 3 == 0){
            console.log("Fizz")
        }else {
            console.log(arrg[i])
        }
    }
}

[1,2,3,4,5,6,7,8,9,10].forEach(
((x % 3 == 0)? "Fizz":"")+((x % 5 == 0)? "Buzz":"")+ ((x % 3== 0 || x%5==0)? "":x))