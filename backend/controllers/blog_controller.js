const Post = require('../models/post_model');

async function getAllPosts(req, res, next) {
  try {
    const posts = await Post.fetchAllPosts();
    res.status(200)
      .json({
        posts: posts
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getSinglePost(req, res, next) {
  const postID = req.params.id;
  try {
    const post = await Post.fetchSinglePost(postID);
    res.status(200)
      .json({ post });
  } catch (error) {
    console.log(error);
    next(error);
  }
}


module.exports = {
  getAllPosts: getAllPosts,
  getSinglePost: getSinglePost
};