import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const Detail = () => {
  const { id } = useParams();

  const [Videogame, setVideogame] = useState({});

  useEffect(() => {
    axios
      .get(`https://deploy-pi-videogame.onrender.com/videogames/${id}`)
      .then(({ data }) => {
        setVideogame(data);
      })
      .catch((error) => {
        alert("Error al obtener los detalles de videogame:", error);
      });
  }, [id]);

  if (!Videogame.id) {
    return <Loader></Loader>;
  }
  return (
    <div className="detailContainer">
      <div className="detail">
        <h1>{Videogame.Nombre}</h1> <span> ID:{Videogame.id}</span>
        <h3>{Videogame.Descripcion}</h3>
        <h3>Lanzamiento: {Videogame.FechaLanzamiento}</h3>
        <h3>Rating: {Videogame.Rating}</h3>
        <h3>Genero: {Videogame.Generos}</h3>
        <h3>Plataformas: {Videogame.Plataformas}</h3>
        <img src={Videogame.Imagen} alt={Videogame.Nombre} />
      </div>
    </div>
  );
};
export default Detail;
