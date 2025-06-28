import {novedades, celulares} from "../data/data.js"
import Card from '../components/Card.jsx'


const Home = () => {
  const listaCelus = novedades.map(novedad => (
      celulares.find((celular) => celular.id == novedad)
    ));

    return (
      <>

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
  