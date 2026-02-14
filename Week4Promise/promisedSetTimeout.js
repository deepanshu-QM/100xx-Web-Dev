
// Create Promisified Version of seTimeout
console.log("First Execute");

function PromisifiedsetTimeOut(delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("This has To Done");
        },delay)
    })
}
PromisifiedsetTimeOut(2000)
          .then(function(){
            console.log("2000ms delay");
          })
          .catch(function(){
            console.log("Error");
          })

console.log("Last Execute");