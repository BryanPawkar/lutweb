import React from 'react'; 

const Formclients = () =>{
    return(
        <div>
            <div className="usersForm">
            <h2>MI EMPRESA</h2>
                <label>
                    Dominio:
                    <input type="text"          required placeholder="www.ejemplo.com">
                </input>
                </label>
                
                <label>
                    Eslogan:
                    <input type="text"          required placeholder="Eslogan de ejemplo">
                </input>
                </label>
              
                <label>
                    Misión:
                    <textarea>

                    </textarea>
                </label>
             
                <label>
                    Visión:
                    <textarea>
                    
                    </textarea>
                </label>
               
                <label>
                    Historia:
                    <textarea>
                    
                    </textarea>
                </label>
                <label>
                    Numeros de contacto:
                    <textarea>
                    
                    </textarea>
                </label>
                <label>
                    Horarios de atención:
                    <input type="texto"/>
                </label>
                <label>
                    Otros Links:
                    <input type="link"/>
                </label>
                <br></br>
                <h2>Multimedia</h2>
                <label>
                    Colores Corporativos
                    <input className="color" type="color" />
                    <input className="color"  type="color"/>
                    <input className="color"  type="color"/>
                </label>
                <label>
                    Logo:
                    <input type="file"/>
                </label>
                <input style={{flexGrow:'0', marginTop:'3rem'}}type="submit"/>
            </div>
        </div>
    )
}

export default Formclients; 