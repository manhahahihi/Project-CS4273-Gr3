import React from 'react';
import { Redirect } from 'react-router-dom';

import './style.css';

export default class LoginIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            f1:' ',
            f2:' '
            
            
	        
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }



  


    handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.email=="library@iiitt.ac.in")this.setState({f1:''});else this.setState({f1:'Invalid Email'});
        if(this.state.password=="iiittrichy")this.setState({f2:''});else this.setState({f2:'Invalid Password'});;
        
    };
    checkEnter=()=>{

        if(this.keyCode===13){
            this.handleSubmit();


            return true;} else return false;
    }

    render(){
        if (this.state.email=='19521827@gm.uit.edu.vn'&&this.state.password=='123456') {
            this.props.updateRoutes(true)
            return (<Redirect to="/home" />)}
        return(
        	<div>
		        
			       
			        <div className="login_home">
				        <div id="loginBox">
					        <span style={{color:"#6fa894"}} id="loginTitle">Sign In</span>
					        <form name="loginForm" onSubmit={this.handleSubmit}>
						        <div className="inputRow">
							        <label htmlFor="email" className="loginLabel">Email</label>
							        <input type="email" id="email" name="email"
							               className={this.state.f1 ? "loginInput showError" : "loginInput"}
							               placeholder="Enter Email" autoCorrect="off" autoCapitalize="off" size="30"
							               value={this.state.email} onChange={this.handleInput} onKeyPress={this.checkEnter()?this.handleSubmit():null} spellCheck="false"/>
						        </div>
						        <div className="errorMsg">
							        {this.state.f1 ? <span>{this.state.f1}</span> : null}
						        </div>
						        <div className="inputRow">
							        <label htmlFor="password" className="loginLabel">Password</label>
							        <input type="password" name="password"
							               className={this.state.f2 ? "loginInput showError" : "loginInput"}
							               id="password" placeholder="Enter PassWord"
							               autoCorrect="off" autoComplete="off" autoCapitalize="off" spellCheck="false"
							               size="30" value={this.state.password} onChange={this.handleInput} onKeyPress={this.checkEnter()?this.handleSubmit():null} />
						        </div>
						        <div className="errorMsg">
							        {this.state.f1? <span>{this.state.f2}</span> : null}
							        
						        </div>
						        <div className="inputRow">

<div className="text-center"><button className="btn  btn_normal mr5 mb3 mt3" >
                                                <i className="fab fa-telegram-plane"></i>  &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; Login
                                </button></div>
									
						        </div>
					        </form>
				        </div>
				       
			        </div>
		        
	        </div>
        )
    }
}