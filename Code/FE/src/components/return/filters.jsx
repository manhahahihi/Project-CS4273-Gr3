import React from 'react';
import './style.css'
import { toast } from 'react-toastify';	
export default class Filters extends React.Component {

/*eslint-disable no-unused-expressions */
	constructor(){
		super();
		this.state = {
			bookList:[],
			search:'',
			
			
			

		};
		
	}


	
	



	updateInfo = (event) =>{
		let fieldName = event.target.name;
		let fieldValue = event.target.value;
		if(fieldName === 'search'){
			this.setState({searchDevice:fieldValue});
			this.props.searchbook(fieldValue);
			
		}

	
         
	};




        
	render(){
		


		

		return(
			<>
			<div className="pageRow filters">
				<div className="thisBlock">
					<div className="blockTitle">
					<div className="row mt4">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-1">Books list</h1>
                          </div>
                        </div>
                      </div>
					
                       {/* <input aria-describedby="search-addon" type="text" className="searchInput form-control rounded input-group rounded" style={{width:'300px',cursor:'text', fontSize:'20px'}} placeholder="Search by Book Info Or Student Info" value={this.state.searchDevice} autoComplete="off" name="search" onChange={this.updateInfo}/>  <i className="fas fa-search" />*/}
						
						<div className="input-group rounded mt-4">
							<input value={this.state.searchDevice}  type="search" className="form-control rounded ml70" placeholder="Search by Book Info Or Student Info" autoComplete="off" name="search" onChange={this.updateInfo}  aria-label="Search"
								aria-describedby="search-addon" />
						
								<i style={{fontSize:'1.5em'}} className="fas fa-search"></i>
							
						</div>	
						
						

					</div>


					
					</div>

					
					
			</div>

			
			</>
		)
	}
}