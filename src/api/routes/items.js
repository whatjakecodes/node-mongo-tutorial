var express = require('express');
let itemApiRouter = express.Router();
var Item = require('../models/Item');

itemApiRouter.route('/').post(function (req, res) {
  console.log('body: ', req.body);
  var item = new Item({
    item: req.body.item,
    created_date: Date.now()
  });
  item.save().then(item => {
    console.log('added: ', item);
    res.redirect('/items');
  }).catch(error => {
    console.log(error)
    res.status(400).send("unable to save to database!");
  });
});

itemApiRouter.route('/:id').post((req, res) => {
  Item.findById(req.params.id, (err, item) => {
    item.item = req.body.item;
    item.save().then(item => {
      console.log('edited: ', item);
      res.redirect('/items');
    }).catch(err => {
      console.log('edit failed: ', err)
      res.redirect(500, '/error');
    });
  });
});


module.exports = itemApiRouter;