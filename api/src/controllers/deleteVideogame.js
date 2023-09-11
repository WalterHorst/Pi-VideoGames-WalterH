const { Videogame } = require("../db");

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    await Videogame.destroy({
      where: {
        ID: id,
      },
    });
    res.status(200).send("Videogame eliminado");
  } catch (error) {
    res.status(400).send("Tu videogame no ha podido ser eliminado");
  }
};

module.exports = deleteById;
