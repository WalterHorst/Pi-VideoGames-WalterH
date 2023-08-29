require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../db");

const removeHTMLTags = (text) => {
  // Expresión regular para buscar y eliminar las etiquetas HTML
  const regex = /(<([^>]+)>)/gi;
  return text.replace(regex, "");
};

const getByID = async (req, res) => {
  const { id } = req.params;
  try {
    // busco en la bdd si el id es uuid
    if (isNaN(id)) {
      const dbVideogame = await Videogame.findByPk(id, {
        include: {
          model: Genre,
          attributes: ["Genero"],
          through: { attributes: [] },
        },
      });
      if (!dbVideogame) {
        res.status(404).send("No se escuentra en la base de datos");
      } else return res.status(200).json(dbVideogame);
    } // caso contrario busco en la api
    else {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );

      const videogameByID = {
        id: data.id,
        Nombre: data.name,
        Plataformas: data.platforms?.map((p) => p.platform.name).join(", "),
        Descripcion: removeHTMLTags(data.description),
        FechaLanzamiento: data.released,
        Rating: data.rating,
        Generos: data.genres?.map((g) => g.name).join(", "),
        Imagen: data.background_image,
      };

      res.status(200).json(videogameByID);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getByID;
