import express from 'express'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'

const validate = (data) => {
  const { title, cover } = data
  let errors = {}
  if (title === '') {
    errors.title = "Title can't be empty."
  }
  if (cover === '') {
    errors.cover = "Cover can't be empty."
  }
  const isValid = Object.keys(errors).length === 0

  return { errors, isValid }
}

const app = express()
app.use(bodyParser.json())
const db = 'mongodb://localhost/curd-with-redux'

mongodb.MongoClient.connect(db, (err, db) => {
  // 获取全部game
  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games })
    })
  })
  // 获取单个game
  app.get('/api/games/:_id', (req, res) => {
    db.collection('games').findOne({ _id: new mongodb.ObjectID(req.params._id) }, (err, game) => {
      res.json(game)
    })
  })
  // 更新一个game
  app.put('/api/games/:_id', (req, res) => {
    const { errors, isValid } = validate(req.body)
    if (isValid) {
      const { title, cover } = req.body
      db.collection('games').findOneAndUpdate({ _id: new mongodb.ObjectID(req.params._id) }, { $set: { title, cover } }, { returnOriginal: false }, (err, result) => {
        if (err) { res.status(500).json({ errors: { global: err } }); return }
        res.json({ game: result.value })
      })
    } else {
      res.status(400).json({ errors })
    }
  })
  // 新增一个game
  app.post('/api/games', (req, res) => {
    const { errors, isValid } = validate(req.body)
    if (isValid) {
      const { title, cover } = req.body
      db.collection('games').insert({ title, cover }, (err, result) => {
        if (err) {
          res.status(500).json({
            errors: { global: '服务端错误!' }
          })
        } else {
          res.json({ game: result.ops[0] })
        }
      })
    } else {
      res.status(400).json({ errors })
    }
  })

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: 'Still working on it, try it later.'
      }
    })
  })

  app.listen(8000, () => {
    console.log('Server is listening on port 8000')
  })
})
