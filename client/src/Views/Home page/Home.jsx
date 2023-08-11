import { useState } from "react";
import CardsContainer from "../../Components/Cards/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../Redux/Actions";

const Home = () => {
  const videogames = useSelector((state) => state.videogames);

  const dispatch = useDispatch();

  useState(() => {
    if (videogames.length === 0) {
      dispatch(getVideogames());
    }
  }, []);

  return (
    <div>
      <CardsContainer></CardsContainer>
    </div>
  );
};
export default Home;
