import { Link } from "react-router-dom";
import { celulares } from "../data/data.js";
import Button from './Button.jsx';
import '../styles/Card.css';
import { useState } from "react";

const Card = ({ idCelular }) => {
  const celular = celulares.find((celular) => celular.id == idCelular); 
  const [imgError, setImgError] = useState(false);

    const placeholder = `https://via.placeholder.com/200x200?text=${encodeURIComponent(celular?.nombre || "Sin imagen")}`;



  return (
    <>
      {celular &&
        <div className="cardHome">
          <img
            src={imgError ? placeholder : celular.fotos[0]}
            alt={celular.nombre}
            onError={() => setImgError(true)}
          />
          <p>{celular.nombre}</p>
          <p>Precio: ${celular.precio}</p>
          <Link to={`/productosD/${celular.id}`}>
            <Button texto="Ver más" />
          </Link>
        </div>
      }
    </>
  );
};

export default Card;


