const {Schema, model} = require('mongoose');

const brandSchema = new Schema({
  name: {type: String, required: true},
  discount: {type: Number, required: true},
  specialPriceUsers: {type: Array, required: false},
});

module.exports = model('Brand', brandSchema);