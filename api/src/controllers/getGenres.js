require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Genre } = require("../db");

const getGenres = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );

    const genres = data.results;

    const genresFilteres = genres?.map((genre) => genre.name);

    genresFilteres.forEach(async (g) => {
      await Genre.findOrCreate({
        where: {
          Genero: g,
        },
      });
    });

    //Necesito cargar los generos para el reducer
    const allGenres = await Genre.findAll();

    res.status(200).json(allGenres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getGenres;
