
//Create Promisified Version of fs.read
const fs = require('fs');

function PromisifiedReadFile(filename,encoding){
    return new Promise(function(resolve,reject) {
        fs.readFile(filename,encoding, function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

PromisifiedReadFile("main.txt","utf-8")
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log("Error Reading File");
        })