require('dotenv').config()
const express = require('express');

const path = require('path');
const app = express();

const PORT = process.env.PORT
const URI = process.env.URI



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));


app.use(express.static(path.join(__dirname, 'src', 'public')));



app.get('/', function(req, res) {
  res.redirect('/all-post');
})

app.get('/all-post', function(req, res) {
  res.render('all-posts');
})

app.get('/contact', function(req, res) {
  res.render('contact');
})

app.listen(PORT, function() {
  console.log(`Server runing at: ${URI}:${PORT}`)
});