
/* 6. Group people by city
    - Input:
        [
          { name: "A", city: "Delhi" },
          { name: "B", city: "Mumbai" },
          { name: "C", city: "Delhi" }
        ]
           Output:{ Delhi: ["A", "C"], Mumbai: ["B"] }   */

const Input = [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
]



const output = {};

for(let i=0;i<Input.length;i++){
    const name = Input[i].name;
    const city = Input[i].city;

    if(!output[city]){
        output[city] = [];
    }

    output[city].push(name)
}
console.log(output)