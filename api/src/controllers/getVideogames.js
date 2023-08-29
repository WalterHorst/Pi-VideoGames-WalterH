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
      };
    });
    //Busco todos los usuarios de la api
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`
    );
    const apiVideogames = data.results.map((game) => {
      return {
        id: game.id,
        image: game.background_image,
        nombre: game.name,
        genre: game.genres?.map((g) => g.name).join(", "),
      };
    });

    const allVideogames = [...databaseVideogamesFiltered, ...apiVideogames];

    res.status(200).json(allVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getVideogames;
