import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../Redux/Actions";
import "./Card.css";
import axios from "axios";

const Card = ({ id, image, nombre, genre }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => alert(res.data))
      .then((res) => dispatch(getVideogames()))
      .catch((error) => alert(error.data));
  };

  return (
    <div className="Card">
      {isNaN(id) && <button onClick={deleteHandler}>❌</button>}
      <h3>{nombre}</h3>
      <p>Genero:{genre}</p>
      <NavLink to={`/detail/${id}`} className="CardLink">
        <img src={image} alt={nombre} />
      </NavLink>
    </div>
  );
};
export default Card;
