const validate = (form) => {
  const errors = {};

  // Validar el campo Nombre (solo debe contener caracteres)
  if (/^[A-Za-z\s\-()']+$/.test(form.Nombre)) {
    errors.Nombre = ""; // Si es válido, se elimina el mensaje de error
  } else if (form.Nombre === "") {
    errors.Nombre = "El nombre del videogame no puede estar vacío.";
  } else {
    errors.Nombre = "El nombre de del videogame solo debe contener caracteres.";
  }

  // Validar el campo Descripcion (no debe estar vacio)
  if (form.Descripcion.trim() !== "") {
    errors.Descripcion = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.Descripcion = "Este campo no puede estar vacío.";
  }

  // Validar el campo rating (debe ser un valor entre 1 y 10)
  const Rating = parseInt(form.Rating);
  if (!isNaN(Rating) && Rating >= 1 && Rating <= 10) {
    errors.Rating = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.Rating = "El valor de Rating debe ser un número entre 1 y 10.";
  }

  // Validar el campo Plataformas (no debe estar vacío)
  if (form.Plataformas.trim() !== "") {
    errors.Plataformas = ""; // Si es válido, se elimina el mensaje de error
  } else {
    errors.Plataformas = "Este campo no puede estar vacío.";
  }

  return errors;
};

export default validate;
