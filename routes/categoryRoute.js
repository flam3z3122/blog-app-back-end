const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/category')

categoryRouter.route('/:categoryName')
    .get(categoryController.Category)

module.exports = categoryRouter;