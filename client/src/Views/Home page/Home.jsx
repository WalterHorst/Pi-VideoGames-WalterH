import { useEffect } from "react";
import CardsContainer from "../../Components/Cards/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres } from "../../Redux/Actions";

const Home = () => {
  const videogames = useSelector((state) => state.videogames);
  const search = useSelector((state) => state.searchVideogame);

  const allVideogames = search.length !== 0 ? search : videogames;

  const dispatch = useDispatch();

  useEffect(() => {
    if (videogames.length === 0) {
      dispatch(getVideogames());
    }
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <CardsContainer allVideogames={allVideogames}></CardsContainer>
    </div>
  );
};
export default Home;
