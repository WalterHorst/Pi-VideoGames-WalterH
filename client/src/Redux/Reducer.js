import {
  GET_VIDEOGAMES,
  SEARCH,
  GET_GENRES,
  SET_PAGE,
  ORDER_BY_NUMBER,
  ALPHABETIC_ORDER,
  ORDER_BY_GENRE,
  ORDER_FROM,
  FILTER_CLEANER,
} from "./Actions";

const initialState = {
  videogames: [],
  searchVideogame: [],
  genres: [],
  currentPage: 1,
  backup: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: payload, backup: payload };
    ///////////////////////////////////////////////////////////////////////////////////////
    case SEARCH:
      return { ...state, searchVideogame: payload };
    ///////////////////////////////////////////////////////////////////////////////////////
    case GET_GENRES:
      return { ...state, genres: payload };
    ///////////////////////////////////////////////////////////////////////////////////////
    case SET_PAGE:
      return { ...state, currentPage: payload };
    ///////////////////////////////////////////////////////////////////////////////////////
    case ORDER_BY_NUMBER:
      const copy = [...state.videogames];
      const videogamesortN = copy.sort((a, b) => {
        const valueA = a.rating;
        const valueB = b.rating;
        if (payload === ">") {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });
      return {
        ...state,
        videogames: videogamesortN,
      };
    //////////////////////////////////////////////////////////////////////////////////
    case ALPHABETIC_ORDER:
      const copy2 = [...state.videogames];
      const sortedvideogames = copy2.sort((a, b) => {
        const nameA = a.nombre.toLowerCase();
        const nameB = b.nombre.toLowerCase();
        if (payload === "A-Z") {
          return nameA.localeCompare(nameB);
        } else if (payload === "Z-A") {
          return nameB.localeCompare(nameA);
        } else {
          return 0;
        }
      });
      return {
        ...state,
        videogames: sortedvideogames,
      };
    ///////////////////////////////////////////////////////////////////////////////////////
    case ORDER_BY_GENRE:
      const genreToFilter = payload; // Genero recibido en el payload
      const copy5 = [...state.backup];
      const videogamesFilteredByGenre = copy5.filter((vg) => {
        const genres = vg.genre.split(", "); // Los géneros están separados por comas y espacio
        return genres.includes(genreToFilter);
      });
      return {
        ...state,
        videogames: videogamesFilteredByGenre,
      };
    ///////////////////////////////////////////////////////////////////////////////////////
    case ORDER_FROM:
      const copy3 = [...state.backup];
      if (payload === "DB") {
        const videogamesFilteredDB = copy3.filter((vg) => {
          if (isNaN(vg.id)) {
            return vg;
          }
        });
        return {
          ...state,
          videogames: videogamesFilteredDB,
        };
      } else {
        const copy4 = [...state.backup];
        const videogamesFilteredAPI = copy4.filter((vg) => {
          if (Number(vg.id)) {
            return vg;
          }
        });

        return {
          ...state,
          videogames: videogamesFilteredAPI,
        };
      }
    ///////////////////////////////////////////////////////////////////////////////////////
    case FILTER_CLEANER:
      return { ...state, videogames: state.backup };
    ///////////////////////////////////////////////////////////////////////////////////////
    default:
      return { ...state };
  }
};

export default reducer;
