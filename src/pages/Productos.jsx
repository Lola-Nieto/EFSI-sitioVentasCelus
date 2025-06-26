import {useParams} from "react-router-dom"
import React, {useState, useEffect } from 'react'

import Card from '../components/Card.jsx'
import {celulares, marcas} from "../data/data.js"

import '../styles/Productos.css'

const Productos = () => {
    const {idMarca} = useParams();
    const [listaCelus, setListaCelus] = useState(celulares);

    useEffect(() => {
      if (idMarca && (idMarca < marcas.length && idMarca >= 0)) {
        setListaCelus(celulares.filter((celular) => celular.marcaId == idMarca));
      } else {
        setListaCelus(celulares); // Si no hay marca, mostrar todos
      }
    }, [idMarca]);   
    if(idMarca && listaCelus == celulares){
        return   ( <h1> Producto -  El ID de la marca no existe </h1>)      
    }

    return (
      <>
      <h1> Productos</h1>
      <div className="cardContainer">
       {listaCelus.map(celu => (
          <Card key={celu.id} idCelular={celu.id} />
        ))}
        </div>
      </>
    )
  }

  export default Productos;
