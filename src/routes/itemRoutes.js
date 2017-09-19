var express = require('express');
var app = express();
let itemRouter = express.Router();

itemRouter.route('/').get((req, res) => {
    res.render('items');
});

itemRouter.route('/singleItem').get((req, res) => {
    res.render('single');
}); 

itemRouter.route('/add').get(function (req, res) {
    res.render('addItem');
});

module.exports = itemRouter;