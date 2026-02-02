// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');



function Filehandle(){
    
    //Read-File
    fs.readFile('main.txt','utf8',(err,data) => {
        if(err){
            console.log(err.message);
            return;
        }
        const new_data = data.replace(/\s+/g, ' ');
        console.log(new_data);
    });

    // Write-BackOn-File
    fs.writeFile('main.txt', new_data,(err) => {
        if(err){
            console.log(err.message);
            return;
        }

        console.log("Task Completed");
    });
}
Filehandle();