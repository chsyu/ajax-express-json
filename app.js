var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
	res.render('index');
});


app.post('/json', function(req, res){
	// var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});


app.listen(3000);
