
/* 1) Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens? */

function sum(a,b){
    add = a + b;
    return add;
}
let result = sum(21,34);
console.log(`Result : ${result}`)


function Sum(x,y){
    return x + y;
}
let Result = Sum("900" , "100");
console.log(`Result : ${Result}`)    //This will Concatenate



/* 2) Write a function called canVote that returns true or false if the age of a user is > 18  */

function canVote(Age){
    if(Age > 18){
        return `Can Vote : ${true}`;
    }else{
        return `Can Vote : ${false}`;
    }
}

let answ = canVote(21);
console.log(answ)