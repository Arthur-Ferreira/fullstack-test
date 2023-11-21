require('dotenv').config();

const blogRoutes = require('./backend/routes/blog_routes');
const express = require('express');


const app = express();

const PORT = process.env.PORT
const HOST = process.env.HOST


app.use(blogRoutes);

app.listen(PORT, function() {
  console.log(`Server runing at: ${HOST}:${PORT}`)
});