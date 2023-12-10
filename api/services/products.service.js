const { v4: uuidv4 } = require('uuid');
const productModel = require('../models/products.model');
const brandModel = require('../models/brand.model');

let products = []
const find = async () => {
  products = await productModel.find()
  return products;
}
const findOne = async (id) => {
  const product = await productModel.findById(id).exec();
  return product;
}
const create = async (product) => {
  const brand = await brandModel.find({name: product.brand}).exec();
  const specialPrice = (product.price * brand[0].discount)/100;
  const newProduct = new productModel({
    ...product,
    brand: brand[0].id,
    specialPrice: product.price - specialPrice,
    id: uuidv4(),
  });
  await newProduct.save()
  products.push(newProduct);
  return newProduct;
}
const update = async (id, product) => {
  const productUpdate = await productModel.findOneAndUpdate({id}, product).exec();
  return productUpdate;
}
const remove = async (id) => {
  await productModel.findByIdAndDelete(id).exec();
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
};

