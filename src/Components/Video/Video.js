import React from 'react'; 
import video from './video.mp4';

const Video = () =>{
    return(
        <div style={{maxWidth:'100%', padding:'2rem'}}>
          <video style={{maxWidth:'100%'}} width="100%" height="auto" autoPlay loop controls>
            <source src={video} type="video/mp4"/>
            Hubo un error al cargar el video, por favor recarga la página.
        </video>
        </div>
    )
}

export default Video; 