const { Router } = require("express");
const {
  getByID,
  getByName,
  getGenres,
  getVideogames,
  newVideogame,
  deleteById,
} = require("../controllers/index");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers

router.get("/videogames", getVideogames);
router.get("/videogames/:id", getByID);
router.get("/videogamesname", getByName);
router.post("/videogames", newVideogame);
router.get("/genres", getGenres);
router.delete("/delete/:id", deleteById);

module.exports = router;
