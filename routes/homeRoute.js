const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/home');

homeRouter.route('/')
    .get(homeController.Home)

module.exports = homeRouter;