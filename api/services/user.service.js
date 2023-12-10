const { v4: uuidv4 } = require('uuid');
const userModel = require('../models/user.model');

const find = async () => {
  users = await userModel.find()
  return users;
}
const findOne = async (id) => {
  const user = await userModel.findById(id).exec();
  return user;
}
const create = async (user) => {
  const newUser = new userModel({
    ...user,
    id: uuidv4(),
  });
  await newUser.save()
  return newUser;
}
const update = async (id, user) => {
  const userUpdate = await userModel.findOneAndUpdate({id}, user).exec();
  return userUpdate;
}
const remove = async (id) => {
  await userModel.findByIdAndDelete(id).exec();
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
};