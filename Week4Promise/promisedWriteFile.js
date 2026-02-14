
const fs = require('fs');

function PromisifiedWriteFile(filename,encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(function(err,data){
            if(err){
                reject(err);
            }else{
                
            }
        })
    })
}

PromisifiedWriteFile("main.txt","utf-8")
              .then(function(data){
                console.log(data);
              })
              .catch(function(err){
                console.log("Error Writing OverFile");
              })