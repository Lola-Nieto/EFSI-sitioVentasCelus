import React, {useState} from 'react';
import '../styles/Contacto.css'
import Button from '../components/Button.jsx'


function Contacto() {
    const [nombre, setNombre] = useState();
      const [consulta, setConsulta] = useState();
      const [email, setEmail] = useState("");

      const expresionMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      const [esValido, setEsValido] = useState(true); 
     

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Entra al handleSubmit')
        let esValidoAhora = ((nombre.trim().length > 3) && expresionMail.test(email) && (consulta.trim().length > 10)); //Si alguno está vacío - dsp se niega
            setEsValido(esValidoAhora);
            if (esValidoAhora) {
              alert("Se envió el formulario con éxito");
            
              setNombre("");
              setEmail("");
              setConsulta("");
            }else{
              alert("Hay cosas incorrectas en el form, verifique los campos antes de enviar");

             }
        }
       
    
return (
    <>
        <h1>Soporte técnico</h1>
        <hr class="solid"/>

        <form onSubmit={handleSubmit}>
            <div id="divIngreso">
                <label for="nombre">Nombre: </label> 
                <input type="text" name="nombre" placeholder="Ingrese su nombre" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                <label for="email">Mail: </label> 
                <input type="mail" name="email" placeholder="Ingrese su correo electrónico" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <label for="consulta">Escriba cuál es su duda o el problema que tuvo: </label> 
                <input type="text" name="consulta" placeholder="Escriba aquí"  onChange={(e) => setConsulta(e.target.value)} value={consulta}/>
                <Button texto="Enviar" type="submit" />          


                {!esValido && <p id="msjError">El formulario NO es válido.</p>}
            </div>
        </form>

    </>
  )

  
}

export default Contacto