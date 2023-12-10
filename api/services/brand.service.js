const brandModel = require('../models/brand.model');


const find = async () => {
  const brand = await brandModel.find()
  return brand;
}
const findOne = async (id) => {
  const brand = await brandModel.findById(id).exec();
  return brand;
}
const create = async (brand) => {
  const newBrand = new brandModel({
    ...brand
  });
  await newBrand.save()
  return newBrand;
}
const update = async (id, brand) => {
  const brandUpdate = await brandModel.findOneAndUpdate({id}, brand).exec();
  return brandUpdate;
}
const remove = async (id) => {
  await brandModel.findByIdAndDelete(id).exec();
}
const addUserBrand = async (userID, brandID) => {
  const brand = await brandModel.findById(brandID).exec();
  const updateBrand = new brandModel({
    ...brand,
    specialPriceUsers: [...brand.specialPriceUsers, userID]
  });
  await updateBrand.save()
  return updateBrand;
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
  addUserBrand
};