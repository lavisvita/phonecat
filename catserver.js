var express = require('express'),
    path = require('path');
var app = express();
var Phones = 'phones/phones.json';
var port = 8080;
var router = express.Router();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.set('view engine', 'jade');
app.get('/', function(req, res, next) {
    res.render('index.jade');
});
app.get('/phones', function(req, res, next) {
    res.render('phones-list.jade');
});
app.get('/phone-detail', function(req, res, next) {
    res.render('phone-detail.jade');
});

app.listen(port, function(){
   console.log('server listening on port ' + port);
});

//app.route()

//You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. For more information about routes, see: Router() documentation.
//
//    Here is an example of chained route handlers that are defined by using app.route().
//
//
//    app.route('/book')
//    .get(function(req, res) {
//        res.send('Get a random book');
//    })
//    .post(function(req, res) {
//        res.send('Add a book');
//    })
//    .put(function(req, res) {
//        res.send('Update the book');
//    });
