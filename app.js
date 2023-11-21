require('dotenv').config();

const blogRoutes = require('./backend/routes/blog_routes');
const express = require('express');


const app = express();

const PORT = process.env.PORT
const HOST = process.env.HOST


// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'src', 'views'));


// app.use(express.static(path.join(__dirname, 'src', 'public')));

app.use('/api/posts', blogRoutes);

app.listen(PORT, function() {
  console.log(`Server runing at: ${HOST}:${PORT}`)
});

