const express = require('express');

const blogController = require('../controllers/blog_controller');

const router = express.Router();

router.get('/', blogController.getAllPosts);

module.exports = router;