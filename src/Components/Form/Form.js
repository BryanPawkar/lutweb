import React from 'react'; 
import pika from './pika.svg';

const Form = () =>{
    return(
        <div className="form">
        <h2>CONTACTO</h2>
            <div className="forms">
                <label>Nombre</label>
                <br></br>
                <input 
                type="text" 
                required placeholder="Nombre"></input>
                <label>E-mail</label> <br></br>
                <input 
                type="mail" 
                required
                placeholder="ejemplo@mail.com">
                </input>
                <label>Teléfono</label> <br></br>
                <input 
                type="text" 
                required
                placeholder="">
                </input>
                <label>Mensaje</label> <br></br>
                <textarea></textarea>
                <input type="submit" className="enviar"></input>
            </div>
            <div className="piku">
                <img alt="" className="pika" src={pika}/>
            </div>
        </div>
    )
}

export default Form; 