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

    res.status(200).send("Generos cargados en base de datos");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getGenres;
