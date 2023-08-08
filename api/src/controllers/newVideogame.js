const newVideogame = (req, res) => {
  const { Nombre, Genero } = req.body;
  try {
    res.send(`post videogame con nombre ${Nombre} y genero ${Genero}`);
  } catch (error) {}
};

module.exports = newVideogame;
