import React from 'react'; 

const Navigation = ({cambioDeRuta, registrado}) =>{
        if (registrado){
            return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p 
            onClick={()=>cambioDeRuta('salir')}
            className="f5 link dim blank underline pa3 pointer white mb0 mt0">
                Salir
            </p>
        </nav>
        );
        }else{
            return(
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p 
            onClick={()=>cambioDeRuta('Signin')}
            className="f5 link dim blank  pa1 pointer white mb0 mt0">
                Ingresar /
            </p>
            <p 
            onClick={()=>cambioDeRuta('register')}
            className="f5 link dim blank  pa1 pointer white mb0 mt0">
                Registro
            </p>
        </nav>
            );
        }
}

export default Navigation; 