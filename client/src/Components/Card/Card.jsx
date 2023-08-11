import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, nombre, genre }) => {
  return (
    <div className="Card">
      <Link to={`/detail/${id}`}>{nombre}</Link>
      <p>Genero:{genre}</p>
      <img src={image} alt={nombre} />
    </div>
  );
};
export default Card;
