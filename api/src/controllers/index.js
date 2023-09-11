const getByID = require("./getVideogamesById");
const getByName = require("./getVideogameByName");
const getGenres = require("./getGenres");
const newVideogame = require("./newVideogame");
const getVideogames = require("./getVideogames");
const deleteById = require("./deleteVideogame");

module.exports = {
  getByID,
  getByName,
  getGenres,
  newVideogame,
  getVideogames,
  deleteById,
};
