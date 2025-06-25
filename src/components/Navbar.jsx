import { Link } from "react-router-dom";
import { useState } from "react";
import  {marcas} from "../data/data.js"
import "../styles/Navbar.css";
import logo from '../assets/favicon.png';

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const manejarMouseEnter = () => setMostrarMenu(true);
  const manejarMouseLeave = () => setMostrarMenu(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo}/>
        <h1>TiendaCelus</h1>
      </div>

      <div className="opciones">
        <Link to="/">Home</Link>
        <Link to="/quienes-somos">Quienes somos</Link>

        <div
          className="dropdown"
          onMouseEnter={manejarMouseEnter}
          onMouseLeave={manejarMouseLeave}
        >
          <span className={`dropdown-title ${mostrarMenu ? 'activa' : ''}`}>Productos</span>
          {mostrarMenu && (
            <div className="dropdown-menu">
              <Link to="productos"> Ver todos </Link>
              {marcas.map(marca => (
                  <Link to={`/productos/${marca.id}`} key={marca.id} idMarca={marca.id}> {marca.nombre} </Link>
          ))}

            </div>
          )}
        </div>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

