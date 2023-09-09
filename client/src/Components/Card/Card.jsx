import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, nombre, genre }) => {
  return (
    <div className="Card">
      <h4>{nombre}</h4>
      <p>Genero:{genre}</p>
      <NavLink to={`/detail/${id}`} className="CardLink">
        <img src={image} alt={nombre} />
      </NavLink>
    </div>
  );
};
export default Card;
