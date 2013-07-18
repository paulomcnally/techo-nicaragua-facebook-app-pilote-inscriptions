var express = require('express');
var config  = require('./config');
var controllers = require('./controllers');
var app = express();

app.use(express.logger());

app.get('/', controllers.app.home);

app.listen(process.env.PORT || 5000);