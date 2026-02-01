
const fs = require('fs');
fs.readFile("main.txt","utf-8", function(err,contents){
    if(err){
        console.log(err.message);
        return;
    }
    console.log(contents)
});