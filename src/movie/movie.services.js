//? En el archivo services utilizaré todo lo relacionado al req y res

const moviesControllers = require('./movie.controller')

const getAllMovies = (req, res) => {
  const data = moviesControllers.findAllMovies()
  res.status(200).json(data)
}

const getMoviesById = (req, res) => {
  const id = req.params.id
  const data = moviesControllers.findMovieByID(id)

  if(data){
    res.status(200).json(data)
  } else {
    res.status(404).json({
      message: 'Invalid ID'
    })
  }
}

const postMovie = (req, res) => {
  const { title, director } = req.body

  if(title && director){
    const data = moviesControllers.createMovie({title, director})
    res.status(201).json(data)
  } else {
    res.status(400).json({message: 'Invalid data', fields: {title: 'String', director: 'String'}})
  }
}

module.exports = {
  getAllMovies,
  getMoviesById, 
  postMovie
}