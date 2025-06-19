import React from 'react'
import '../styles/Button.css'

function Button(props) {
    return (
      <>
      <button  className='acciones'> {props.texto} </button >
      </>
    )
  }


export default Button