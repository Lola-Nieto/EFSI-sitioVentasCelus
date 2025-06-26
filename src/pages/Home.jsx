import {novedades, celulares} from "../data/data.js"
import Card from '../components/Card.jsx'


const Home = () => {
  const listaCelus = novedades.map(novedad => (
      celulares.find((celular) => celular.id == novedad)
    ));

    return (
      <>
          <h1>Tienda de Celus</h1> 
          <hr class="solid"/>
          <p> Bienvenido al mejor lugar para comprar celulares. Acá vas a encontrar tu próximo celular al mejor precio </p>

          <h2> Novedades</h2>
          <div className="grilla">
            {listaCelus.map(celu => (
            <Card key={celu.id} idCelular={celu.id} />
            ))}
          </div>
      </>
    )
  }
  
  export default Home
  