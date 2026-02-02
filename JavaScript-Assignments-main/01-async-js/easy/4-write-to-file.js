// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs').promises;

async function writeOnFile(){
    try{
        await fs.writeFile('main.txt', 'A Politically Unaware Generation Has No future','utf-8');  //written on file
        //Write A JSON format

        const data = {
            name :'Mr President F.kenneddy',
            Age  : 45,
            city : 'California USA'
        };
        await fs.writeFile('data.json',JSON.stringify(data,null,2),'utf8');

        console.log('Task Done SucessFully');
    }catch(err){
        console.log(`Error Writing in file : ${err}`)
    }
}

writeOnFile();