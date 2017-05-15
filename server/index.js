import express from 'express'
import mongodb from 'mongodb'

const app = express()
const db = 'mongodb://localhost/curd-with-redux'

mongodb.MongoClient.connect(db, (err, db) => {
  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      console.log(games)
      res.json({ games })
    })
  })  
  app.listen(8000, () => {
    console.log('Server is listening on port 8000')
  })
})
