
/* Flatten object of arrays into one array
Input : { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
output : ["apple", "banana", "carrot", "pea"]  */

const Input = {
    fruits : ["apple", "banana"],
    veggies: ["carrot", "pea"]
}

//Using Spread Opeartor 
const output = [...Input.fruits , ...Input.veggies];
console.log(output)


//Second Approch 

const OUTPUT = Object.values(Input).flat();
console.log(OUTPUT)