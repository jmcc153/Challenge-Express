const {Schema, model} = require('mongoose');
const BrandModel = require('./brand.model');

const productSchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  specialPrice: {type: Number, required: false},
  stock: {type: Boolean, required: true},
  brand: {type: Schema.Types.ObjectId, ref: BrandModel},
});

module.exports = model('Product', productSchema);