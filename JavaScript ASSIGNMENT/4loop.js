
//Write a function called sum that finds the sum from 1 to a number

function sum(n){
    let Sum = 0;
    for(i=1;i<=n;i++){
        Sum += i
    }
    return Sum;
}

let result = sum(7);
console.log(`Sum : ${result}`)