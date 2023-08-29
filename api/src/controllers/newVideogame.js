const { Videogame, Genre } = require("../db");

const newVideogame = async (req, res) => {
  const {
    Nombre,
    Descripcion,
    Plataformas,
    Imagen,
    FechaLanzamiento,
    Rating,
    Genero,
  } = req.body;
  try {
    const newVideogame = await Videogame.create({
      Nombre,
      Descripcion,
      Plataformas,
      Imagen,
      FechaLanzamiento,
      Rating,
    });
    Genero.forEach(async (g) => {
      let genresDB = await Genre.findAll({ where: { Genero: g } });
      await newVideogame.addGenre(genresDB);
    });
    res.status(201).json(newVideogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = newVideogame;
