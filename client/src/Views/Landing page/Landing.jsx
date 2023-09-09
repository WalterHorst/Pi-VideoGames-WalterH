import "./Landing.css";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="landing-Page">
        <header></header>
        <NavLink to={"/home"} className="CardLink">
          <button class="btn" type="button">
            <strong>Play</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </NavLink>
        <footer>
          <p className="parrafo2">Todos los derechos reservados &copy; 2023</p>
        </footer>
      </div>
    </div>
  );
};
export default Landing;
