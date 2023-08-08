const getByID = (req, res) => {
  const { id } = req.params;
  try {
    res.send(`Get by ${id}`);
  } catch (error) {}
};

module.exports = getByID;
