require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const getByID = async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );

    const videogameByID = data;

    res.status(200).json(videogameByID);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getByID;
