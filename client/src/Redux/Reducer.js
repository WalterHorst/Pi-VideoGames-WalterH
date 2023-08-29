import { GET_VIDEOGAMES, SEARCH, GET_GENRES } from "./Actions";

const initialState = {
  videogames: [],
  searchVideogame: [],
  genres: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: payload };

    case SEARCH:
      return { ...state, searchVideogame: payload };

    case GET_GENRES:
      return { ...state, genres: payload };

    default:
      return { ...state };
  }
};

export default reducer;
