require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser') // bodyParser zorgt ervoor dat ik data kan halen uit mijn body
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const port = process.env.PORT||8000
const app = express()

// Haalt de dingen uit mijn .env bestand
const {
  MONGO_USER,
  MONGO_PASS,
  MONGO_URI,
  MONGO_DB
} = process.env

// Main function aan roepen
main()

// Connectie maken met de database
function main() {
  MongoClient
    // Maakt de connectie met de database
    .connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_URI}/${MONGO_DB}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    // Promise, als de connectie er is voert het deze dingen uit
    .then(connection => {

      let hetSpel = {
        name: '',
        genre: ''
      }

      const db = connection.db('ProjectTech')
      const gameCollection = db.collection('game')

      // Het aanroepen van mijn gebruikte engine en dan het pad van mijn views
      app.set('view engine', 'ejs')
      app.set('views', path.join(__dirname, 'views'))
      app.use(bodyParser.urlencoded({
        extended: true
      }))
      app.use(express.static('static'))

      app.get('/', (req, res) => {
        res.render('pages/index.ejs', {
          spel: hetSpel
        })
      })

      // data van het form met de /spel actie in de database
      app.post('/spel', (req, res) => {
        gameCollection.insertOne(req.body)
          .then(result => {
            res.redirect('/')
          })
          .catch(error => console.error(error))
      })

      // Spullen uit de database ophalen en in profiel renderen
      app.get('/profiel', (req, res) => {
        db.collection('game').find().toArray()
          .then(results => {
            res.render('pages/profiel.ejs', {
              spel: results,
              game: hetSpel,
            })
          })
          .catch(error => console.error(error))
      })

      app.delete('/delete', (req, res) => {
        // Maakt van de query string een officeel mongodb object id, anders verwijdert mongodb de game niet
        db.collection('game').deleteOne({
            '_id': new ObjectID(req.query.id)
          })
          .then((result) => {
            console.log(result)
            res.send('gelukt')
          })
      })

      // Als er een error is laat hij een error zien
      app.use(function(req, res) {
        res.status(404).send('Error 404')
      })

      // Als mijn server is opgestart zie ik een bericht in mijn console
      app.listen(port, () => console.log(`Yo ${MONGO_USER}, de server is opgestart bij http://localhost:${port}`))
    })
}
