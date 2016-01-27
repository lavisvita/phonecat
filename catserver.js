var express = require('express'),
    path = require('path');
var app = express();
var port = 8080;
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.set('view engine', 'jade');
app.get('/', function(req, res, next) {
    res.render('index.jade');
});

app.listen(port, function(){
   console.log('server listening on port ' + port);
});