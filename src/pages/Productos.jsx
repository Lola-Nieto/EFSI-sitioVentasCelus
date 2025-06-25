import {useParams} from "react-router-dom"
import React, {useState, useEffect } from 'react'

import Card from '../components/Card.jsx'
import {celulares} from "../data/data.js"

import '../styles/Productos.css'

const Productos = () => {
    const {idMarca} = useParams();
    const [listaCelus, setListaCelus] = useState(celulares);

    useEffect(() => {
      if (idMarca) {
        setListaCelus(celulares.filter((celular) => celular.marcaId == idMarca));
      } else {
        setListaCelus(celulares); // Si no hay marca, mostrar todos
      }
    }, [idMarca]);   

    return (
      <>
      <div className="cardContainer">
       {listaCelus.map(celu => (
          <Card key={celu.id} idCelular={celu.id} />
        ))}
        </div>
      </>
    )
  }

  export default Productos;
