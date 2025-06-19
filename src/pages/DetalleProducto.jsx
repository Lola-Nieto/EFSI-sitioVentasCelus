import {useParams} from "react-router-dom"
import {celulares, marcas} from "../data/data.js"

//import './DetalleProducto.css'

const DetalleProducto = () => {
    const {idCelular} = useParams();

    const productoBuscado = celulares.find((celular) => celular.id == id); 
    const marca = marcas.find((marca) => marca.id == productoBuscado.id);
    if(!productoBuscado){
        return   ( <h1>Detalle de Producto -  El ID no existe </h1>)      
    }

    return (
        <>
        {productoBuscado &&
            <div className="todo">
                      
                <h1>Detalle de {productoBuscado.nombre}</h1> 

                <div className="detalleProducto">
                    <p>Descripción: <span className="datoDestacado">{productoBuscado.descripcion} </span> </p>
                    <p>Precio: <span className="datoDestacado">{productoBuscado.precio}</span>  </p>
                    <p>Marca: <span className="datoDestacado">{marca.nombre}</span>  </p>
                    {productoBuscado.fotos.map(foto => (
                         <img src={foto || `http://via.placeholder.com/200x200?text=fotoCelular}`} />
                    ))}
                </div>
            </div>
        
        }

        </>

    );
};

export default DetalleProducto;