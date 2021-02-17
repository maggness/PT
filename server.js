const express = require('express')
const app = express()
const port = 5181

app.set('view engine', 'ejs');

app.use(express.static("static"));

app.get('/', function(req, res) {
  res.render('pages/index.ejs');

  var games = [
      { id: '1', name: 'CSGO', genre: "FPS"},
      { id: '2', name: 'Destiny', genre: "FPS MMO"},
      { id: '3', name: 'Minecraft', genre: "Survival"}
  ];

  res.render('pages/index', {
      games: games
  });

});

app.get("/", function (req, res){
    var spel = req.query.spel; // Hier door staat het in de URL
});

app.get('/about', function(req, res) {
  res.render('pages/about.ejs');
});

app.get('/test', (req, res) => {
res.send('test swag')
})

app.listen(port, () => console.log(`Server opgestart at http://localhost:${port}`))

app.use(function (req, res, next) {
  res.status(404).send("Error 404")
});
