import {useParams} from "react-router-dom"
import {celulares, marcas} from "../data/data.js"
import React, { useEffect, useState } from 'react'

import '../styles/DetalleProducto.css'

const DetalleProducto = () => {
    const {idCelular} = useParams();
    const [productoBuscado, setProductoBuscado] = useState(celulares.find((celular) => celular.id == idCelular));

    
    useEffect(() => {
        setProductoBuscado(celulares.find((celular) => celular.id == idCelular));
      }, [idCelular]);   
  

    if(!productoBuscado){
        return   ( <h1>Detalle de Producto -  El ID del celular no existe </h1>)      
    }

    return (
        <>
        {productoBuscado &&
            <div className="todo">
                      
                <h1>Detalle de {productoBuscado.nombre}</h1> 
                <hr class="solid"/>

                <div className="detalleProducto">
                    <p>Descripción: <span className="datoDestacado">{productoBuscado.descripcion} </span> </p>
                    <p>Precio: <span className="datoDestacado">{productoBuscado.precio}</span>  </p>
                    <p>Marca: <span className="datoDestacado">{marcas.find((marca) => marca.id == productoBuscado.marcaId)?.nombre}</span>  </p>
                    <div className="grilla">   
                       {productoBuscado.fotos.map((foto, index) => (
                        <img key={index} src={foto || `http://via.placeholder.com/200x200?text=${productoBuscado.nombre}`} />
                        ))} 
                    </div>
                    
                </div>
            </div>
        
        }

        </>

    );
};

export default DetalleProducto;