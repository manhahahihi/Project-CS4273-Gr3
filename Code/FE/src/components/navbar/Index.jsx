import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logoGrey from '../common/images/logo1.png';
import logOut from '../common/images/logout.png';

export default class NavBar extends React.Component{
    render(){

        return(
	        <div id="navBar">
		        <ul style={{height:'100%'}}>
			        <li className="logo" style={{margin:'0px 0px 0px 0px',padding:'0px 0px 0px 0px'}}>
				        <Link to="/" draggable="false" >
					        <img className="navIcon" src={logoGrey} alt="logo" draggable="false" style={{height:'45px', width:'180px',marginTop:'2px',marginLeft:'3px'}} />
				        </Link>
			        </li>
			        <li className="navItem logout" style={{marginTop:'10px'}} >
					<a style={{marginLeft:"-290px"}} className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span className="mr-2 d-none d-lg-inline text-gray-600 small">Nguyễn Đức Mạnh</span>
						<img style={{width:'35px', height:'35px'}}className="img-profile rounded-circle" src="assets/img/avatar.jpg" />
					</a>
			        </li>

					<li>

					<li className="navItem logout" style={{marginTop:'10px'}} >
				        <Link to="/login" draggable="false" style={{fontSize:'20px', marginLeft:"1160px", marginTop:"-60px",  color:"#3e8177"}} onClick={()=>this.props.updateRoutes(false)}>
					        LogOut
				        </Link>
			        </li>
					
					</li>

					<li className="nav-Item">
  
  
</li>
		        </ul>
	        </div>
        )
    }
}