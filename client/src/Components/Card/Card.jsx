import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, nombre, genre }) => {
  return (
    <NavLink to={`/detail/${id}`} className="CardLink">
      <div className="Card">
        {nombre}
        <p>Genero:{genre}</p>
        <img src={image} alt={nombre} />
      </div>
    </NavLink>
  );
};
export default Card;
