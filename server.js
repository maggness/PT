require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser")
const path = require("path");
const MongoClient = require('mongodb').MongoClient
const port = 5181;
const app = express();

const { MONGO_USER, MONGO_PASS, MONGO_URI, MONGO_DB } = process.env;

main();

function main() {
  MongoClient
    .connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_URI}/${MONGO_DB}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    .then(connection => {

      const test = "swag";
      const db = connection.db('ProjectTech')
      const genreCollection = db.collection('Genre')

      app.set("view engine", "ejs");
      app.set("views", path.join(__dirname, "views"));
      app.use(bodyParser.urlencoded({extended: true}))
      app.use(express.static('static'))

      app.get('/', (req, res) => {
        res.render('pages/index.ejs')
      })

      app.get('/liked', (req, res) => {
          res.render('pages/liked.ejs')
        })

      app.post('/genre', (req, res) => {
        genreCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })

      // app.get('/', (req, res) => {
      //   db.collection('Genre').find().toArray()
      //     .then(quotes => {
      //       res.render('index.ejs', { Genre: name })
      //     })
      //     .catch(/* ... */)
      // })

      app.use(function (req, res, next) {
        res.status(404).send("Error 404")
      });

      app.listen(port, () => console.log(`Yo ${MONGO_USER}, de server is opgestart bij http://localhost:${port}`))

    });
}
