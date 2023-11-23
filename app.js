require('dotenv').config();

const blogRoutes = require('./backend/routes/blog_routes');
const express = require('express');
const enableCors = require('./backend/middlewares/cors');


const app = express();

app.use(enableCors);
app.use(express.json());

const PORT = process.env.PORT
const HOST = process.env.HOST


app.use(blogRoutes);

app.listen(PORT, function() {
  console.log(`Server runing at: ${HOST}:${PORT}`)
});