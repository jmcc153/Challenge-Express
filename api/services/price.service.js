const brandModel = require('../models/brand.model');
const productModel = require('../models/products.model');

const findSpecialPrice = async (userID, productName) => {
  const product = await productModel.findOne({name: productName}).exec();
  if(!product.stock) return 'Out of stock';
  const brand = await brandModel.find({specialPriceUsers: userID}).exec();
  if(!brand.length) return product.price;
  for(const i of brand) {
    if(i.id === product.brand.toString()) {
      return product.specialPrice;
    }
    else{
      return product.price;
    }
  }
}

module.exports = {
  findSpecialPrice
};