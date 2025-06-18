import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"

import celulares from "../data/data.js"

import Button from './Button.jsx'

import './Card.css'

const Card = ({id}) => {
    const celular = celulares.find((celular) => celular.id == id); 
 
  return (
    <>
     {celular &&
        <div className="cardHome">
            <img src={celular.fotos[0] || `http://via.placeholder.com/200x200?text=${celular.nombre}}`} />
            <p> {celular.nombre} </p>
            <p>{celular.precio}  </p>
            <Link to={`/productos/${celular.id}`} ><Button  texto="Ver más"/> </Link> 
        </div>
   
    }
    </>
  )
}

export default Card



