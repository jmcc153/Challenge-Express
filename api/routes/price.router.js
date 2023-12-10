const express = require('express');

const router = express.Router();

const {findSpecialPrice} = require('../services/price.service');

router.get('/:userID/:productName', async (req, res) => {
  const price = await findSpecialPrice(decodeURI(req.params.userID), decodeURI(req.params.productName));
  res.json(price).status(200);
});

module.exports = router;