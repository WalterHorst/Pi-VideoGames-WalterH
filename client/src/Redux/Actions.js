import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const SEARCH = "SEARCH";

export const getVideogames = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/videogames");

    const apiVideogames = data;
    dispatch({ type: GET_VIDEOGAMES, payload: apiVideogames });
  };
};

export const searchVideogame = (data) => {
  return { type: SEARCH, payload: data };
};
