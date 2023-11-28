const express = require('express');

const blogController = require('../controllers/blog_controller');
const contactController = require('../controllers/contact_controller');

const router = express.Router();

router.get('/api/posts', blogController.getAllPosts);

router.get('/api/posts/:id', blogController.getSinglePost);

router.get('/api/contacts', contactController.getAllContacts);

router.post('/api/new-contact', contactController.insertNewContact);

module.exports = router;