import {useParams} from "react-router-dom"
import React, {useState, useEffect } from 'react'

import Card from '../components/Card.jsx'
import {celulares} from "../data/data.js"

//import './Productos.css'

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
       {listaCelus.map(celu => (
          <Card key={celu.id} idCelular={celu.id} />
        ))}
      </>
    )
  }

  export default Productos;
