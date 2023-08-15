import { GET_VIDEOGAMES, SEARCH } from "./Actions";

const initialState = {
  videogames: [],
  searchVideogame: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: payload };

    case SEARCH:
      return { ...state, searchVideogame: payload };

    default:
      return { ...state };
  }
};

export default reducer;
