//? Dependencias
const express = require('express')
const db = require('./utils/database')

const movieRouter = require('./movie/movie.router')

//? COnfigs iniciales
const port = 9005
const app = express()

//? Habilitar recibir json
app.use(express.json())

db.authenticate()
  .then(() => console.log('Database autenticada correctamente'))
  .catch((err) => console.log(err))

db.sync()
  .then(() => console.log('Database sincronizada correctamente'))
  .catch((err) => console.log(err))


  app.get('/', (req, res) => {
  res.json({
    message: 'OK'
  })
})

app.use('/', movieRouter)

app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})