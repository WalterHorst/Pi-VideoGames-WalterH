import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { searchVideogame } from "../../Redux/Actions";
import "./SearchBar.css";

//Primera forma buscar en el stado general

const Search = () => {
  const allVideogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
    handleSearch();
  };

  const handleSearch = () => {
    const found = allVideogames.filter((videogames) =>
      videogames.nombre.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(searchVideogame(found));
  };
  console.log(search);
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="searchInput"
          type="text"
          placeholder="Busca tu Videogame"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;

// 2da forma: buscar de la api:

// const Search = () => {
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState("");
//   const [dataSearch, setDataSearch] = useState([]);

//   const handleChange = (event) => {
//     setSearch(event.target.value);
//     search.length ? handleSearch() : setDataSearch([]);
//   };

//   const handleSearch = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://localhost:3001/videogamesname?name=${search}`
//       );
//       setDataSearch(data);
//       dispatch(searchVideogame(dataSearch));
//     } catch (error) {
//       alert("Error al buscar");
//     }
//   };

//   return (
//     <div className="search-container">
//       <div className="search-bar">
//         <input
//           className="searchInput"
//           type="text"
//           placeholder="Busca tu Videogame"
//           value={search}
//           onChange={handleChange}
//         />
//       </div>
//     </div>
//   );
// };
