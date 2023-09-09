require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");
const axios = require("axios");

const getVideogames = async (req, res) => {
  try {
    //   Busco todos los usuarios de la db
    const databaseVideogames = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ["Genero"],
        through: { attributes: [] },
      },
    });
    const databaseVideogamesFiltered = databaseVideogames?.map((game) => {
      return {
        id: game.ID,
        image: game.Imagen,
        nombre: game.Nombre,
        genre: game.Genres?.map((g) => g.Genero).join(", "),
        rating: game.Rating,
      };
    });
    //Busco todos los usuarios de la api
    const response1 = (
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=100&page=1`
      )
    ).data.results;
    const response2 = (
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=100&page=2`
      )
    ).data.results;
    const response3 = (
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=100&page=3`
      )
    ).data.results;

    const allResponses = [...response1, ...response2, ...response3];
    const apiVideogames = allResponses.map((game) => {
      return {
        id: game.id,
        image: game.background_image,
        nombre: game.name,
        genre: game.genres?.map((g) => g.name).join(", "),
        rating: game.rating,
      };
    });

    const allVideogames = [...databaseVideogamesFiltered, ...apiVideogames];

    res.status(200).json(allVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getVideogames;
