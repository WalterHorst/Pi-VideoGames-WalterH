import "./CardsContainer.css";
import Card from "../Card/Card";

const CardsContainer = ({ allVideogames }) => {
  return (
    <div className="Container">
      {allVideogames.map((videogame) => {
        return (
          <Card
            Rating={videogame.rating}
            key={videogame.id}
            id={videogame.id}
            image={videogame.image}
            nombre={videogame.nombre}
            genre={videogame.genre}
          />
        );
      })}
    </div>
  );
};
export default CardsContainer;
