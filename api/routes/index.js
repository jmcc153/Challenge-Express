const express = require('express');


const productRouter = require('./products.router');
const userRouter = require('./user.router');
const brandRouter = require('./brand.router');
const priceRouter = require('./price.router');

function routes(app) {
  const router = express.Router();
  app.use('/api', router)
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/brands', brandRouter);
  router.use('/price', priceRouter);
}

module.exports = routes;