const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const controller = require('./controller')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

var routes = require('./routes');
console.log(routes);
    routes(app);   
app.listen(8000);

console.log('Belajar Node Js API dengan Port ');

