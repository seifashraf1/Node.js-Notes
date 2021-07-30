const fs = require('fs');       //importing the nodejs built in file system ('fs')


//reading files 
//so when readFile is finished cuz it takes time, it will this callback function (the second parameter)
//we pass to this functions two variables (err and data), err to store any errors to output it, and data to save the data read from the file
fs.readFile('./docs/blog1.txt', (err, data)=>{
    if (err) {
        console.log(err);
    }
    
    console.log(data);      //will just print buffer with ascii code <Buffer 68 65 6c 6c 6f 2c ...>
    console.log(data.toString());       //toString method turn the buffer into normal readable string
});



//writing to files 





//directories 




//deleting files
