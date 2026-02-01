
/* Find the Largest Value 
input : { a: 10, b: 50, c: 20 }
output :b  */

Input =  { a: 10, b: 50, c: 20 }

let maxValue = null;
let maxkey = " ";
for(let key in Input){
    if(Input[key]> maxValue){
        maxValue = Input[key];
        maxkey = key;
    }
}
console.log(maxkey)
