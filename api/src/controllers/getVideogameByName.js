require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const getByName = async (req, res) => {
  const { name } = req.query;

  try {
    //Busco en la bdd
    const dbByname = await Videogame.findall({
      where: {
        Nombre: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Genre,
        attributes: ["Genero"],
        through: { attributes: [] },
      },
    });
    //Busco en la api
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
    );
    const apiByName = data.results;

    const videogameByName = [...dbByname, ...apiByName];
    if (videogameByName.length === 0) {
      throw Error("No se encontro el juego");
    }
    // Controlar la cantidad de resultados para no exceder 15 videojuegos
    if (videogameByName.length > 15) {
      const videogameByNameSliced = videogameByName.slice(0, 15);
      return res.status(200).json(videogameByNameSliced);
    }
    return res.status(200).json(videogameByName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getByName;
