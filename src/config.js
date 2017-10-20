var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

let config = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.set('view engine', 'ejs');
  app.use(express.static('public'));

  mongoose.Promise = require('bluebird');
  mongoose.connect('mongodb://jakey:climaxpoop@ds040017.mlab.com:40017/tutorial-db', { useMongoClient: true })
    .then(() => {
      console.log('Connected to database.');
    })
    .catch(err => {
      console.error('Database connection error:', err.stack);
      process.exit(1);
    });
};

module.exports = config;