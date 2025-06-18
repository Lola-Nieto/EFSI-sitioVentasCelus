import {useParams} from "react-router-dom"

import {celulares, marcas} from "../data/data.js"

//import './Productos.css'

const Productos = () => {
    const {marca} = useParams();
    if(marca){
        const marca = marcas.filter((marca) => marca.nombre===props.marca);
        const listaCelus = celulares.filter((celular) => celular.marcaId === marca.id)
    }
    return (
      <>
       {listaCelus.map(celu => (
          <Card key={celu.id} idCelular={celu.id} />
        ))}
      </>
    )
  }

  export default Productos;
