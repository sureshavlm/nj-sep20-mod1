
const fs = require('fs'); //imported a module/package

fs.readFile('./employees.json', (err, data) => {
    if(err)
        console.log('Error while reading file.');
   else
     console.log(data.toString());
});


