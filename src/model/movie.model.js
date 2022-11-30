const { DataTypes } = require('sequelize')

const db =  require('../utils/database')

//* {
//*   id: id++,
//*   title, 
//*   year, 
//*   director, 
//*   genre, 
//*   is_completed: false
//* }


const Tasks = db.define('movies', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  director: {
    type: DataTypes.STRING
  },
  genre: {
    type: DataTypes.STRING
  }
})