var express = require('express');
var app = express();
var port = 3000;

var config = require('./config');
config(app);

// routes
var itemViewsRouter = require('./routes/itemViews');
var itemApiRouter = require('./api/routes/items');
app.use('/items', itemViewsRouter);
app.use('/api/items', itemApiRouter);

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, (params) => {
  console.log('Server listening on port: ', port);
});