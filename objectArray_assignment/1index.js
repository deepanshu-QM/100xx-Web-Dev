
/*Sum values in object arrays
Input : { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

Output : { food: 60, travel: 20, bills: 100 }   */

const value = {
    food :[10,20,30],
    travel : [5,15],
    bills : [40,60]
}

let result = {};
for(let key in value){
    let sum = 0;

    for(i=0;i<value[key].length;i++){
        sum += value[key][i];
    }

    result[key] = sum;
}
console.log(result)



//Second Approach 

let SUM = {};

for(let key in value ){
    SUM[key] = value[key].reduce((sum ,num) => sum + num , 0);
}
console.log(SUM)