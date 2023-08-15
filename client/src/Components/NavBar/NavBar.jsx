import { Link } from "react-router-dom";
import "./NavBar.css";
import Search from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to={"/home"}>Home</Link>
      <Search></Search>
      <Link to={"/create"}>Crear</Link>
      <Link to={"/"}>Salir</Link>
    </div>
  );
};
export default NavBar;
