const express = require('express');
const app = express();
const routes = require('./router');
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

//getting the routes
app.use(routes); 

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});