const express = require('express');
const router = express.Router();
const {find, findOne, create, remove} = require('../services/products.service');

router.get('/', async (req, res) => {
  const products = await find();
  res.json(products).status(200);
});

router.post('/', async (req, res) => {
  const product = await create(req.body);
  res.json(product).status(201);
});
router.get('/:id', async (req, res) => {
  const product = await findOne(req.params.id);
  res.json(product).status(200);
});
router.delete('/:id', async (req, res) => {
  await remove(req.params.id);
  res.status(204).send();
});

module.exports = router;