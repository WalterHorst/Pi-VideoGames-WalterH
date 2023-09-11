import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const SEARCH = "SEARCH";
export const SET_PAGE = "SET_PAGE";
export const ORDER_BY_NUMBER = "ORDER_BY_NUMBER";
export const ALPHABETIC_ORDER = "ALPHABETIC_ORDER";
export const ORDER_BY_GENRE = "ORDER_BY_GENRE";
export const ORDER_FROM = "ORDER_FROM";
export const FILTER_CLEANER = "FILTER_CLEANER";

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/videogames");
      dispatch({ type: GET_VIDEOGAMES, payload: data });
    } catch (error) {
      console.error("Error al obtener los videojuegos:", error);
    }
  };
};

export const searchVideogame = (data) => {
  return { type: SEARCH, payload: data };
};

export const getGenres = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/genres");

    const apiGenres = data;
    dispatch({ type: GET_GENRES, payload: apiGenres });
  };
};

export const setPage = (pageNumber) => ({
  type: SET_PAGE,
  payload: pageNumber,
});

export const orderByNumber = (value) => ({
  type: ORDER_BY_NUMBER,
  payload: value,
});

export const alphabeticOrder = (value) => ({
  type: ALPHABETIC_ORDER,
  payload: value,
});

export const orderByGenre = (value) => ({
  type: ORDER_BY_GENRE,
  payload: value,
});

export const orderFrom = (value) => ({
  type: ORDER_FROM,
  payload: value,
});

export const filterCleaner = () => ({
  type: FILTER_CLEANER,
  payload: null,
});
