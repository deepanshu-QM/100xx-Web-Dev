
/* Count word occurrences in array
INPUT : ["apple", "banana", "apple", "orange", "banana", "apple"]
OUTPUT : { apple: 3, banana: 2, orange: 1 }  */


const array = ["apple", "banana", "apple", "orange", "banana", "apple"];


let applecount = 0, bananacount = 0, orangecount = 0 ;
for(i=0;i<array.length;i++){
    if(array[i].toLowerCase() == "apple"){
        applecount++;
    }else if(array[i].toLowerCase() == "banana"){
        bananacount++
    }else if(array[i].toLowerCase() == "orange"){
        orangecount++
    }
}
console.log(`apple : ${applecount} , banana : ${bananacount} , orange : ${orangecount}`)



//Second Approch :


const count = {};

for(i=0;i<array.length;i++){
    const fruit = array[i].toLowerCase();
    if(count[fruit]){
        count[fruit]++;
    }else{
        count[fruit] = 1;
    }
}
console.log(count)