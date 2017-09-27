var express = require('express');
// var app = express();
let itemRouter = express.Router();
var Item = require('../models/Item');

itemRouter.route('/').get((req, res) => {
    Item.find(function (err, itms){
        if(err){
          console.log(err);
        }
        else {
          res.render('items', {itms: itms});
        }
      });
});

itemRouter.route('/singleItem').get((req, res) => {
    res.render('single');
}); 

itemRouter.route('/add').get(function (req, res) {
    res.render('addItem');
});

itemRouter.route('/add/post').post(function (req, res) {
    var item = new Item(req.body);
    console.log('created: ', item);
    item.save().then(item => {
        console.log('saved: ', item);
        res.redirect('/items');
    }).catch(error => {
        res.status(400).send("unable to save to database!");
    });
});


module.exports = itemRouter;