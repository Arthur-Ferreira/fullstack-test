const db = require('../data/database');

class Post {
  constructor(title, content, author, id) {
    title = this.title
    content = this.content
    author = this.author
    id = this.id
  }

  static async fetchAllPosts() {
    const sqlQuery = `
    SELECT * FROM posts
    INNER JOIN authors ON posts.author_id = authors.author_id
    `;

    const [posts, headers] = await db.query(sqlQuery);
    return posts;
  }

  static async fetchSinglePost(id) {
    const sqlQuery = `
    SELECT * FROM posts
    INNER JOIN authors ON posts.author_id = authors.author_id
    WHERE posts.post_id = ${id}
    `;

    const [post, headers] = await db.query(sqlQuery);
    return post
  }
}

module.exports = Post;