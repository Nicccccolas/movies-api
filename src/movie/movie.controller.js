//? Este archivo va a manejar todo lo relacionado a acciones de la DB 

const moviesDB = []
//? Movies

//* {
//*   id: id++,
//*   title, 
//*   year, 
//*   director, 
//*   genre, 
//*   is_completed: false
//* }

let id = 1

const findAllMovies = () => {
  //? Aquí traemos todas las peliculas
  return moviesDB
}

const findMovieByID = (id) => {
  //? Aqui traemos la película por id 
  const movie = moviesDB.find(item => item.id == id) 
  return movie
}

const createMovie =  (obj) => {
  //? Aqui creamos nueva película 
  const newMovie = {
    id: id++, 
    title: obj.title, 
    year: obj.year || 'Year Unknown', 
    director: obj.director || 'Anonymous', 
    genre: obj.genre || 'Genre Unknown', 
    is_completed: false
  }
  moviesDB.push(newMovie)
  return newMovie
}

module.exports = {
  findAllMovies,
  findMovieByID,
  createMovie
}