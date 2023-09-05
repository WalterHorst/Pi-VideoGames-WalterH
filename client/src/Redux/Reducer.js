import { GET_VIDEOGAMES, SEARCH, GET_GENRES, SET_PAGE } from "./Actions";

const initialState = {
  videogames: [],
  searchVideogame: [],
  genres: [],
  currentPage: 1,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: payload };

    case SEARCH:
      return { ...state, searchVideogame: payload };

    case GET_GENRES:
      return { ...state, genres: payload };

    case SET_PAGE:
      return { ...state, currentPage: payload };

    default:
      return { ...state };
  }
};

export default reducer;
