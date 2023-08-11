import { GET_VIDEOGAMES } from "./Actions";

const initialState = {
  videogames: [],
};
console.log(initialState);

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return { ...state, videogames: payload };

    default:
      return { ...state };
  }
};

export default reducer;
