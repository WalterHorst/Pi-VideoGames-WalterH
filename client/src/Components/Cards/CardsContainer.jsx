import "./CardsContainer.css";
import Card from "../Card/Card";

const CardsContainer = ({ allVideogames }) => {
  return (
    <div className="Container">
      {allVideogames.map((videogame) => {
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
