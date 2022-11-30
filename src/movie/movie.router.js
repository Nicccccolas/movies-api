//? Aqui vamos a tener las rutas y sus respectivos verbos

const router = require('express').Router()

const movieServices = require('./movie.services')

router.get('/movies', movieServices.getAllMovies)
router.post('/movies', movieServices.postMovie)
router.get('/movies/:id', movieServices.getMoviesById)

module.exports = router