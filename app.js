var express = require('express');
var config  = require('./config');
var controllers = require('./controllers');
var app = express();

app.use(express.logger());
app.use(express.bodyParser());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.post('/', controllers.app.home);

app.listen(process.env.VCAP_APP_PORT || 3000);