import { useEffect } from "react";
import CardsContainer from "../../Components/Cards/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres, setPage } from "../../Redux/Actions";
import "./Home.css";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const videogames = useSelector((state) => state.videogames);
  const search = useSelector((state) => state.searchVideogame);
  const currentPage = useSelector((satate) => satate.currentPage);
  const VideogamesPerPage = 15;
  const totalPages = Math.ceil(videogames.length / VideogamesPerPage);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentVideogames();
    if (videogames.length === 0) {
      dispatch(getVideogames());
    }
    dispatch(getGenres());
  }, [videogames]);

  // Función para obtener los games de la página actual
  const getCurrentVideogames = () => {
    const startIndex = (currentPage - 1) * VideogamesPerPage;
    const endIndex = startIndex + VideogamesPerPage;
    return videogames.slice(startIndex, endIndex);
  };

  // Función para cambiar a la página anterior
  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  // Función para cambiar a la página siguiente
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };
  if (videogames.length === 0) {
    return <Loader></Loader>;
  }
  return search.length !== 0 && search.length < 15 ? (
    <div>
      <CardsContainer allVideogames={search}></CardsContainer>
      <div className="button-container">
        <button
          className="botton-page"
          onClick={handlePrevPage}
          disabled={search.length !== 0}
        >
          Prev
        </button>
        {currentPage}/{totalPages}
        <button
          className="botton-page"
          onClick={handleNextPage}
          disabled={search.length !== 0}
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    <div>
      <CardsContainer allVideogames={getCurrentVideogames()}></CardsContainer>
      <div className="button-container">
        <button
          className="botton-page"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className="page">
          {currentPage}/{totalPages}
        </div>
        <button
          className="botton-page"
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(videogames.length / VideogamesPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Home;
