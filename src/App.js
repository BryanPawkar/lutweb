import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'; 
import Logo from './Components/Logo/Logo'; 
import Video from './Components/Video/Video'; 
import Planes from './Components/Planes/Planes'; 
import Form from './Components/Form/Form'; 
import Footer from './Components/Footer/Footer'; 
import User from './Components/User/User'; 
import Formclients from './Components/Formclients/Formclients'; 
import Signin from './Components/Signin/Signin'; 
import Register from './Components/Register/Register'; 
import Particles from 'react-particles-js';
import 'tachyons'; 

const particleOptions = {
	"particles": {
		"number": {
			"value": 160,
			"density": {
				"enable": false
			}
		},
		"size": {
			"value": 10,
			"random": true
		},
		"move": {
			"direction": "bottom",
			"out_mode": "out"
		},
		"line_linked": {
			"enable": false
		}
	},
	"interactivity": {
		"events": {
			"onclick": {
				"enable": true,
				"mode": "remove"
			}
		},
		"modes": {
			"remove": {
				"particles_nb": 10
			}
		}
	}
}

class App extends Component{
	constructor(){
		super();
		this.state = {
			route: 'Signin',
			registrado : false,
			user: {
				id: '',
				name: '',
				email: '',
				entries: 0,
				joined: ''
			}
		}
	}

	loadUser = (data) =>{
		this.setState( {user: {
			id: data.id,
			name: data.name,
			email: data.email,
			entries: data.entries,
			joined: data.joined
		}})
	}
	
	cambioDeRuta = (route) =>{
		if(route === 'salir'){
			this.setState({registrado: false})
		}else if (route=== 'home'){
			this.setState({registrado: true})
		}
		this.setState({route: route});
	}
	render(){
		const { registrado, route} = this.state; 
  		return (
    	<div className="App">
			<Particles 			className="particles"
    			params={particleOptions} 
			/>
     		<Navigation registrado={registrado} cambioDeRuta={this.cambioDeRuta}/>
			 <Logo />
			{route === 'home' 
			? <div>
	 			<User />
     			<Video />
     			<Planes/>
				<Formclients />
				<Form/>
     			<Footer/>
				
			 </div>
     		: (
				 route === 'Signin'
				 ?<Signin loadUser={this.loadUser} cambioDeRuta={this.cambioDeRuta}/>
				 : <Register loadUser={this.loadUser} cambioDeRuta={this.cambioDeRuta} />
			 )
			}
    	</div>
  		);
	}
}

export default App;
