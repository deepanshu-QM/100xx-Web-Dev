
/*Swap keys and values of object
input : { a: "x", b: "y", c: "z" }
output : { x: "a", y: "b", z: "c" }   */


let Input =  { a: "x", b: "y", c: "z" };

let output = {};
for(let key in Input){      //Keys = a,b,c

    output[Input[key]] = key;
}
console.log(output)