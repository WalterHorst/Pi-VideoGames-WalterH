import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, nombre, genre }) => {
  return (
    <div className="Card">
      <h3>{nombre}</h3>
      <p>Genero:{genre}</p>
      <NavLink to={`/detail/${id}`} className="CardLink">
        <img src={image} alt={nombre} />
      </NavLink>
    </div>
  );
};
export default Card;
