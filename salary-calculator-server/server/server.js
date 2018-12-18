//require express - gives us a function
const express = require('express');

//create an instance of express by calling the function returned above -- give us an object
const app = express();
const PORT = 5678;

//express static filing serving - public is the folder name
app.use(express.static('salary-calculator-server/server/public'));

//start up our server
app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`);
});
