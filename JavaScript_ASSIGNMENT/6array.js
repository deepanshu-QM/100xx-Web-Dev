
//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS


let array = [21,22,23,24,25,26,27,28,29,30];
function Even(array){
    for(i=0;i<array.length;i++){
        if(array[i] % 2 == 0){
            console.log(`${array[i]} : Even`);
        }else{
            console.log(`${array[i]}:  Odd`)
        }
    }
}
Even(array);

//2)Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

let usersAge = [21,20,18,15,22,20,18,17,16,21,22,67];

function users(usersAge) {
    for (let i = 0; i < usersAge.length; i++) {
        if (usersAge[i] > 18) {
            console.log(`${usersAge[i]} Age is more than 18`);
        } else {
            console.log(`${usersAge[i]} Age is less than 18`);
        }
    }
}

users(usersAge);


//3) Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

const data = [{
    name : "Pradeep Singh",
    Age : 21,
    gender : "male"
},{
    name : "Akash Kumar",
    Age : 22,
    gender : "male"
},{
    name : "Sandeep Kapoor",
    Age : 18,
    gender : "male"
},{
    name : "Vanshika Kapoor",
    Age : 17,
    gender : "female"
}]

function DisplayAge(data){
    for(i=0;i<data.length;i++){
        if(data[i].Age>18 && data[i].gender.toLowerCase() == "male"){
            console.log(`User is ${data[i].name}`)
        }
    }
}
DisplayAge(data);