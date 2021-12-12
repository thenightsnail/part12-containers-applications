const express = require('express');
const { getAsync } = require('../redis');

const router = express.Router();

/* GET statistics */
router.get('/', async(req, res) => {
  const addedTodos = await getAsync('added-todos')
  res.send({ added_todos: Number(addedTodos) })
});

module.exports = router