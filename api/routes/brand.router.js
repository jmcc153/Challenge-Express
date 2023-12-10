const express = require('express');
const router = express.Router();

const {find, findOne, create, remove} = require('../services/brand.service');

router.get('/', async (req, res) => {
  const brand = await find();
  res.json(brand).status(200);
}
);

router.post('/', async (req, res) => {
  const brand = await create(req.body);
  res.json(brand).status(201);
}
);

module.exports = router;