var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  item: String,
  archived: {
    type: Boolean,
    default: false
  },
  created_date: Date
});

module.exports = mongoose.model('Item', ItemSchema);