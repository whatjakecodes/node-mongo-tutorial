var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = 3000;
var itemRouter = require('./routes/itemRoutes');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/items', itemRouter);

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://jakey:climaxpoop@ds040017.mlab.com:40017/tutorial-db',  { useMongoClient: true })
.then(() => {
    console.log('Connected to database.');
})
.catch(err => {
    console.error('Database connection error:', err.stack);
    process.exit(1);
});

app.listen(3000, function(params) {
    console.log('Server listening on port: ', port);
});

app.get('/', function (req, res) {
    res.render('index');
});