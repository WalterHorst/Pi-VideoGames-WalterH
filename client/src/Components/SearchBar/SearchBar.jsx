import { useState } from "react";
import "./SearchBar.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //   const handleSearch = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `http://localhost:3001/recipesname?name=${searchTerm}`
  //       );
  //       dispatch(setFoundRecipe(data)); // Actualizar el estado global con la receta encontrada
  //       setSearchTerm("");
  //     } catch (error) {
  //       alert("Error al buscar recetas:", error);
  //     }
  //   };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="searchInput"
          type="text"
          placeholder="Busca tu Videogame"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="inputButton">Buscar</button>
      </div>
    </div>
  );
};

export default Search;
