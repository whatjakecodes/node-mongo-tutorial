var express = require('express');
let itemRouter = express.Router();
var Item = require('../api/models/Item');

itemRouter.route('/').get((req, res) => {
  Item.find(function (err, itms) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('items', { itms: itms });
    }
  });
});

itemRouter.route('/singleItem').get((req, res) => {
  res.render('single');
});

itemRouter.route('/add').get(function (req, res) {
  res.render('addItem');
});

itemRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, (err, item) => {
    res.render('editItem', { item });
  });
});

module.exports = itemRouter;