const db = require('../data/database');

class Post {
  constructor(title, author, content, id) {
    title = this.title
    content = this.content
    author = this.author
    id = this.id
  }

  static async fetchAllPosts() {

    const posts = await db.query('SELECT * FROM posts');
    return posts;
  }


}

module.exports = Post;