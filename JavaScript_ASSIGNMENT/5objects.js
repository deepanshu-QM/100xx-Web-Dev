
//1) Write a function that takes a user as an input and greets them with their name and age

const user = {
    Name : "John Cena",
    Age : 55
}
function Greets(user){
    console.log(`Hello ${user.Name} , Welcome to late Night party as You are ${user.Age} years older , so Drink less`)
}

Greets(user);


//2) Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

const User = {
    Name : "Harkirat Singh",
    Age : 28,
    Gender : "male"
}

function Greeting(User){
    let title;
    if(User.Gender.toLowerCase() == "male"){
        title = "Mr"
    }else if(User.Gender.toLowerCase() == "female"){
        title = "Mrs"
    }else{
        title = "Other"
    }
    console.log(`hello ${title} ${User.Name} , You age ${User.Age} , Welcome to This Community`)
}

Greeting(User);



//3) 