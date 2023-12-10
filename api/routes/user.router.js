const express = require('express');
const router = express.Router();

const {find, findOne, create, remove} = require('../services/user.service');

router.get('/', async (req, res) => {
  const users = await find();
  res.json(users).status(200);
}
);

router.post('/', async (req, res) => {
  const user = await create(req.body);
  res.json(user).status(201);
});

module.exports = router;