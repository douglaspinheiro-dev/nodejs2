var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = () => {
    var app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    //validador dos dados recebidos
    app.use(expressValidator());
    

    consign()
        .include('routes')
        .then('persistencia')
        .into(app);

    return app
}