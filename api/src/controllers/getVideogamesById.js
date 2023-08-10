require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame } = require("../db");

const getByID = async (req, res) => {
  const { id } = req.params;
  try {
    // busco en la bdd si el id es uuid
    if (isNaN(id)) {
      const dbVideogame = await Videogame.findByPk(id);
      if (!dbVideogame) {
        res.status(404).send("No se escuentra en la base de datos");
      } else return res.status(200).json(dbVideogame);
    } // caso contrario busco en la api
    else {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );

      const videogameByID = data;

      res.status(200).json(videogameByID);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getByID;
