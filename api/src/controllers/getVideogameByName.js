require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const getByName = async (req, res) => {
  const { name } = req.query;

  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
    );
    const videogameByName = data.results;
    if (!videogameByName.length) {
      throw Error("No se encontro el juego");
    }
    res.status(200).json(videogameByName);
  } catch (error) {
    res.status(400).json({ error: error.mesagge });
  }
};
module.exports = getByName;
