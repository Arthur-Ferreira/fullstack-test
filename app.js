require('dotenv').config()
const express = require('express');

const path = require('path');
const PORT = process.env.PORT
const URI = process.env.URI


const app = express();



app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'src', 'views'));


app.use(express.static(path.join(__dirname, 'src', 'public')));



app.get('/', function(req, res) {
  res.render('index');
})

app.get('/post', function(req, res) {
  res.render('post');
})

app.get('/contact', function(req, res) {
  res.render('contact');
})







app.listen(PORT, function() {
  console.log(`Server runing at: ${URI}:${PORT}`)
});