const Post = require('../models/post_model');

async function getAllPosts(req, res) {
  const posts = await Post.fetchAllPosts();
  res.json({
    posts: posts
  });
}


module.exports = { getAllPosts: getAllPosts };