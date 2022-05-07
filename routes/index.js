const express = require('express');
const router = express.Router();  // allowing to create multiple end-points for the api

router.use("/sirenBlog", require('./homeRoute')); // appending home route
router.use("/sirenBlog", require('./categoryRoute')); // appending category route
router.use("/sirenBlog", require('./articleRoute')); // appending article route

module.exports = router;


// const express = require("express")
// const router = express.Router();
// const blogController= require ('../controllers/appData')

// router.route("/blog").get(blogController);
// router.route("/blog/category/:id").get(blogController);

// module.exports = router;