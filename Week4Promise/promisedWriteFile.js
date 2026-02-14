
// Create Promified Function to write 
const fs  = require('fs')

//Read : 
function PromisifiedReadFile(filename,encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,encoding, function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

//Write :
function PromisifiedWriteFile(filename, data, encoding){
    return  new Promise(function(resolve,reject){
        fs.writeFile(filename, data, encoding, function(err){
            if(err){
                reject(err);
            }else{
                resolve("Changes SucessFully Applied Over the File");
            }
        })
    })
}

// Changes :

function PromisifiedChanges(filename,encoding){
    return PromisifiedReadFile(filename, encoding)
                 .then(function(content){
                    let contents = content.toUpperCase();
                    return PromisifiedWriteFile(filename, contents, "utf-8");
                 })
}

PromisifiedChanges("main.txt","utf-8")
               .then(function(message){
                console.log(message)
               })
               .catch(function(err){
                console.log(err);
               })