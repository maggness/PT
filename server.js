const express = require('express')
const app = express()
const port = 5181

app.set('view engine', 'ejs');

app.use(express.static("static"));

app.get('/', function(req, res) {
  res.render('pages/index.ejs');
});

app.get('/about', function(req, res) {
  res.render('pages/about.ejs');
});

app.get('/test', (req, res) => {
res.send('test swag')
})

app.listen(port, () => {
    console.log("Server opgestart at http://localhost:")
})

app.use(function(req, res, next){
  res.status(404);
