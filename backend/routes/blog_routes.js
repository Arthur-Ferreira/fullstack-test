const express = require('express');

const blogController = require('../controllers/blog_controller');

const router = express.Router();

router.get('/api/posts', blogController.getAllPosts);

router.get('/api/posts/:id', blogController.getSinglePost);

module.exports = router;