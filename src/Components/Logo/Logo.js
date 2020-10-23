import React from 'react'; 
import logo from './logo.png'; 

const Logo = () =>{
    return(
        <div style={{width:'100%', margin:'0 auto', padding: '0', textAlign:'center'}}>
            <img alt="" className='mt0 center dim pointer' style={{width:'12rem', height:'auto'}} src={logo}/>
        </div>
    )
}

export default Logo; 