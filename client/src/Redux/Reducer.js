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
  searchVideogameBackup: [],
  genres: [],
  currentPage: 1,
  backup: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: payload, backup: payload };
    case SEARCH:
      return {
        ...state,
        searchVideogame: payload,
        searchVideogameBackup: payload,
      };
    case GET_GENRES:
      return { ...state, genres: payload };
    case SET_PAGE:
      return { ...state, currentPage: payload };
    case ORDER_BY_NUMBER:
      const copy2 = [...state.videogames];
      const videogamesSortedByNumber = copy2.sort((a, b) => {
        const valueA = a.rating;
        const valueB = b.rating;
        if (payload === "<") {
          return valueA - valueB;
        } else {
          return valueB - valueA;
        }
      });

      const searchVideogameSortedByNumber = [
        ...state.searchVideogameBackup,
      ].sort((a, b) => {
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
        videogames: videogamesSortedByNumber,
        searchVideogame: searchVideogameSortedByNumber,
      };
    case ALPHABETIC_ORDER:
      const copy3 = [...state.videogames];
      const sortedVideogames = copy3.sort((a, b) => {
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

      const searchVideogameSortedAlphabetically = [
        ...state.searchVideogameBackup,
      ].sort((a, b) => {
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
        videogames: sortedVideogames,
        searchVideogame: searchVideogameSortedAlphabetically,
      };
    case ORDER_BY_GENRE:
      const genreToFilter = payload;
      const copy4 = [...state.backup];
      const videogamesFilteredByGenre = copy4.filter((vg) => {
        const genres = vg.genre.split(", ");
        return genres.includes(genreToFilter);
      });

      if (videogamesFilteredByGenre.length === 0) {
        alert("No se encontraron coincidencias para el género seleccionado.");
        return state;
      }

      if (state.searchVideogame.length !== 0) {
        const searchVideogameFilteredByGenre = [
          ...state.searchVideogameBackup,
        ].filter((vg) => {
          const genres = vg.genre.split(", ");
          return genres.includes(genreToFilter);
        });

        if (searchVideogameFilteredByGenre.length === 0) {
          alert(
            "No se encontraron coincidencias para este género en la búsqueda."
          );
          return state;
        }
        return { ...state, searchVideogame: searchVideogameFilteredByGenre };
      }

      return {
        ...state,
        videogames: videogamesFilteredByGenre,
      };
    case ORDER_FROM:
      const copy5 = [...state.backup];
      if (payload === "DB") {
        const videogamesFilteredDB = copy5.filter((vg) => isNaN(vg.id));
        const searchVideogamesFilteredDB = [
          ...state.searchVideogameBackup,
        ].filter((vg) => isNaN(vg.id));

        if (videogamesFilteredDB.length === 0) {
          alert(
            "No se encontraron coincidencias para el filtro de origen 'DB'."
          );
          return state;
        }

        return {
          ...state,
          videogames: videogamesFilteredDB,
          searchVideogame: searchVideogamesFilteredDB,
        };
      } else {
        const copy6 = [...state.backup];
        const videogamesFilteredAPI = copy6.filter((vg) => !isNaN(vg.id));
        const searchVideogamesFilteredAPI = [
          ...state.searchVideogameBackup,
        ].filter((vg) => !isNaN(vg.id));

        if (videogamesFilteredAPI.length === 0) {
          alert(
            "No se encontraron coincidencias para el filtro de origen 'API'."
          );
          return state;
        }

        return {
          ...state,
          videogames: videogamesFilteredAPI,
          searchVideogame: searchVideogamesFilteredAPI,
        };
      }
    case FILTER_CLEANER:
      return {
        ...state,
        videogames: state.backup,
        searchVideogame: state.searchVideogameBackup,
      };
    default:
      return { ...state };
  }
};

export default reducer;

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case GET_VIDEOGAMES:
//       return { ...state, videogames: payload, backup: payload };
//     ///////////////////////////////////////////////////////////////////////////////////////
//     case SEARCH:
//       return {
//         ...state,
//         searchVideogame: payload,
//         searchVideogameBackup: payload,
//       };
//     ///////////////////////////////////////////////////////////////////////////////////////
//     case GET_GENRES:
//       return { ...state, genres: payload };
//     ///////////////////////////////////////////////////////////////////////////////////////
//     case SET_PAGE:
//       return { ...state, currentPage: payload };
//     ///////////////////////////////////////////////////////////////////////////////////////
//     case ORDER_BY_NUMBER:
//       const copy = [...state.videogames];
//       const videogamesortN = copy.sort((a, b) => {
//         const valueA = a.rating;
//         const valueB = b.rating;
//         if (payload === ">") {
//           return valueA - valueB;
//         } else {
//           return valueB - valueA;
//         }
//       });
//       return {
//         ...state,
//         videogames: videogamesortN,
//       };
//     //////////////////////////////////////////////////////////////////////////////////
//     case ALPHABETIC_ORDER:
//       const copy2 = [...state.videogames];
//       const sortedvideogames = copy2.sort((a, b) => {
//         const nameA = a.nombre.toLowerCase();
//         const nameB = b.nombre.toLowerCase();
//         if (payload === "A-Z") {
//           return nameA.localeCompare(nameB);
//         } else if (payload === "Z-A") {
//           return nameB.localeCompare(nameA);
//         } else {
//           return 0;
//         }
//       });
//       return {
//         ...state,
//         videogames: sortedvideogames,
//       };
//     ///////////////////////////////////////////////////////////////////////////////////////
//     case ORDER_BY_GENRE:
//       const genreToFilter = payload; // Género recibido en el payload
//       const copy5 = [...state.backup];
//       const videogamesFilteredByGenre = copy5.filter((vg) => {
//         const genres = vg.genre.split(", "); // Los géneros están separados por comas y espacio
//         return genres.includes(genreToFilter);
//       });

//       if (videogamesFilteredByGenre.length === 0) {
//         // Si no se encuentran coincidencias, puedes mostrar una alerta
//         alert("No se encontraron coincidencias para el género seleccionado.");
//         return state; // Mantén el estado sin cambios
//       }

//       const searchVideogameFilteredByGenre = [...state.searchVideogame].filter(
//         (vg) => {
//           const genres = vg.genre.split(", "); // Los géneros están separados por comas y espacio
//           return genres.includes(genreToFilter);
//         }
//       );
//       if (searchVideogameFilteredByGenre.length === 0) {
//         // Si no se encuentran coincidencias en la búsqueda, muestra una alerta y mantiene el estado sin cambios
//         alert(
//           "No se encontraron coincidencias para este género en la búsqueda."
//         );
//         return state; // Mantén el estado sin cambios
//       }

//       return {
//         ...state,
//         videogames: videogamesFilteredByGenre,
//         searchVideogame: searchVideogameFilteredByGenre,
//       };

//     ///////////////////////////////////////////////////////////////////////////////////////
//     case ORDER_FROM:
//       const copy3 = [...state.backup];
//       if (payload === "DB") {
//         const videogamesFilteredDB = copy3.filter((vg) => {
//           if (isNaN(vg.id)) {
//             return vg;
//           }
//         });
//         return {
//           ...state,
//           videogames: videogamesFilteredDB,
//         };
//       } else {
//         const copy4 = [...state.backup];
//         const videogamesFilteredAPI = copy4.filter((vg) => {
//           if (Number(vg.id)) {
//             return vg;
//           }
//         });

//         return {
//           ...state,
//           videogames: videogamesFilteredAPI,
//         };
//       }
//     ///////////////////////////////////////////////////////////////////////////////////////
//     case FILTER_CLEANER:
//       return {
//         ...state,
//         videogames: state.backup,
//         searchVideogame: state.searchVideogameBackup,
//       };
//     ///////////////////////////////////////////////////////////////////////////////////////
//     default:
//       return { ...state };
//   }
// };

// export default reducer;

// import {
//   GET_VIDEOGAMES,
//   SEARCH,
//   GET_GENRES,
//   SET_PAGE,
//   ORDER_BY_NUMBER,
//   ALPHABETIC_ORDER,
//   ORDER_BY_GENRE,
//   ORDER_FROM,
//   FILTER_CLEANER,
// } from "./Actions";

// const initialState = {
//   videogames: [],
//   searchVideogame: [],
//   searchVideogameBackup: [],
//   genres: [],
//   currentPage: 1,
//   backup: [],
// };
