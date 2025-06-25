import {Link} from "react-router-dom"

import {celulares} from "../data/data.js"

import Button from './Button.jsx'

import '../styles/Card.css'

const Card = ({idCelular}) => {
    const celular = celulares.find((celular) => celular.id == idCelular); 
 console.log("celular en Card", celular.nombre );
  return (
    <>
     {celular &&
        <div className="cardHome">
            <img src={celular.fotos[0] || `http://via.placeholder.com/200x200?text=${celular.nombre}}`} />
            <p> {celular.nombre} </p>
            <p>Precio: ${celular.precio}  </p>
            <Link to={`/productosD/${celular.id}`} celularId={celular.id} ><Button  texto="Ver más"/> </Link> 
        </div>
   
    }
    </>
  )
}

export default Card



