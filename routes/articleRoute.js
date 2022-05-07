const express = require('express');
const articleRouter = express.Router();
const articleController = require('../controllers/article');

articleRouter.route('/article/:ID/:categoryName')
    .get(articleController.Article)

module.exports = articleRouter;