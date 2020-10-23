import React from 'react'; 
import plan1 from './plan1.jpg';
import plan2 from './plan2.jpg';
import plan3 from './plan3.jpg';
import plan4 from './plan4.jpg';

const Planes = () =>{
    return(
        <div className="promo" >
            <div className="caja"><img alt="" src={plan1}/></div>
            <div className="caja"><img alt="" src={plan4}/></div>
            <div className="caja"><img alt="" src={plan2}/></div>
            <div className="caja"><img alt="" src={plan3}/></div>
            <h3>Promoción válida hasta el 31 de Diciembre del 2020</h3>
        </div>
    )
}

export default Planes; 