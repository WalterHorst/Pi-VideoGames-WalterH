const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame",
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Descripción: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Plataformas: {
        type: DataTypes.STRING,
      },
      Imagen: {
        type: DataTypes.STRING,
      },
      FechaLanzamiento: {
        type: DataTypes.DATE,
      },
      Rating: {
        type: DataTypes.INTEGER,
      },
      Creado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
