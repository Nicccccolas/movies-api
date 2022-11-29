const express = require('express')

const port = 8000
const app = express()

app.use(express.json())

const moviesApi = []
let id = 1

app.get('/', (req, res) => {
  res.json({
    message: 'OK'
  })
})

app.get('/movies', (req, res) => {
  res.status(200).json(moviesApi)
})

app.post('/movies', (req, res) => {
  const {title, year, director, genre} = req.body

  if(title && year && director && genre){
    const newMovie = {
      id: id++,
      title, 
      year, 
      director, 
      genre, 
      is_completed: false
    }
    moviesApi.push(newMovie)
    res.status(200).json(newMovie)
  } else {
    res.status(400).json({
      message: 'Invalid data'
    })
  }
})

app.get('/movies/:id', (req, res) => {
  const id = req.params.id;

  const movie = moviesApi.find(item => item.id == id)

  if (movie){
    res.status(200).json(movie)
  } else {
    res.status(404).json({message: 'Invalid id'})
  }
})

app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})