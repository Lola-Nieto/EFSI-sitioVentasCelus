import { Link } from "react-router-dom";
import { useState } from "react";
import  {marcas} from "../data/data.js"
//import "./Navbar.css";

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const manejarMouseEnter = () => setMostrarMenu(true);
  const manejarMouseLeave = () => setMostrarMenu(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>TiendaCelus</h1>
        <img src="./assets/icon.jpg"/>
      </div>

      <Link to="/">Home</Link>
      <Link to="/quienes-somos">Quienes somos</Link>

      <div
        className="dropdown"
        onMouseEnter={manejarMouseEnter}
        onMouseLeave={manejarMouseLeave}
      >
        <span className="dropdown-title">Productos</span>
        {mostrarMenu && (
          <div className="dropdown-menu">
            <Link to="productos"> Ver todos </Link>
            {marcas.map(marca => (
                <Link to={`/productos/${marca.id}`} key={marca.id} > {marca.nombre} </Link>
        ))}

          </div>
        )}
      </div>

      <Link to="/contacto">Contacto</Link>
    </nav>
    </>
  );
};

export default Navbar;

