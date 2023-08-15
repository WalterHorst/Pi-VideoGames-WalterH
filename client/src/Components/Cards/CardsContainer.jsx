import "./CardsContainer.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const videogames = useSelector((state) => state.videogames);

  return (
    <div className="Container">
      {videogames.map((videogame) => {
        return (
          <Card
            key={videogame.id}
            id={videogame.id}
            image={videogame.background_image}
            nombre={videogame.name}
            genre={videogame.genres.map((g) => g.name).join(", ")}
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;
