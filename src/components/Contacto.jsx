import React, {useState} from 'react';
//import './Contacto.css'
import Button from './Button.jsx'


function Contacto() {
    const [nombreCompleto, setNombreCompleto] = useState({
        nombre: '',
        apellido: '',
      });
      const [edad, setEdad] = useState();
      const [email, setEmail] = useState("");

      const expresionMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      const [esValido, setEsValido] = useState(true); 
      
      const handleChangeNombre = (event) => {
        const { name, value } = event.target;
        setNombreCompleto(prevNombreCompleto => ({
          ...prevNombreCompleto, 
          [name]: value
        }));
        console.log(`campo que cambió: ${name} valor qeu se guardó: ${value}`); //Va a ser siempre el texto
    
      };
     

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Entra al handleSubmit')
        let esValidoAhora = (!(!nombreCompleto.nombre.trim() || !nombreCompleto.apellido.trim()) && expresionMail.test(email) && edad > 0); //Si alguno está vacío - dsp se niega
            setEsValido(esValidoAhora);
            if(esValidoAhora){
                alert("Se envió el formulario con éxito");
                Array.from(document.querySelectorAll("input")).forEach(
                    input => (input.value = "")
                );
                this.setState({
                  itemvalues: [{}]
                });
             }
        }
       
    
return (
    <>
        <h1>Form de contacto</h1>

        <h2>Crear mi Cita</h2>
        <form onSubmit={handleSubmit}>
            <div id="divIngreso">
                <label for="nombre">Nombre: </label> 
                <input type="text" name="nombre" placeholder="Ingrese su nombre" onChange={handleChangeNombre} value={nombreCompleto.nombre}/>
                <label for="apellido">Apelldio: </label> 
                <input type="text" name="apellido" placeholder="Ingrese su apelldio" onChange={handleChangeNombre} value={nombreCompleto.apellido}/>
                <label for="email">Mail: </label> 
                <input type="mail" name="email" placeholder="Ingrese su correo electrónico" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <label for="edad">Edad: </label> 
                <input type="number" name="edad" placeholder="Ingrese su edad" min="1" max="130" onChange={(e) => setEdad(e.target.value)} value={edad}/>
                <Button texto="Enviar" type="submit" />          


                {!esValido && <p id="msjError">El formulario NO es válido.</p>}
            </div>
        </form>

    </>
  )

  
}

export default Contacto