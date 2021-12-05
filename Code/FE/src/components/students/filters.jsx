import React from 'react';

import { toast } from 'react-toastify';	
export default class Filters extends React.Component {

/*eslint-disable no-unused-expressions */
	constructor(){
		super();
		this.state = {
			bookList:[],
			searchStudent:'',
			name:'',
			phone:'',
			year:'',
			branch:'',
			roll:''
			

		};
		
	}


	
	add=()=>{
		let {name,roll,phone,year,branch}=this.state;

		this.props.addStudent(name,roll,phone,year,branch);
		
		Filters.hideModal();
		this.setState({name:'',phone:'',roll:'',year:'',branch:''},function(){this.props.fetchStudents();})


	}



	updateInfo = (event) =>{
		let fieldName = event.target.name;
		let fieldValue = event.target.value;
		if(fieldName === 'name') {
			this.setState({name: fieldValue});
		}
		else if(fieldName === 'roll'){
			this.setState({roll:fieldValue});
		}
		else if(fieldName === 'year'){
			this.setState({year:fieldValue});
			
		}
		else if(fieldName === 'phone'){
			this.setState({phone:fieldValue});
			
		}
		else if(fieldName === 'branch'){
			this.setState({branch:fieldValue});
			
		}
		else if(fieldName === 'search'){
			this.setState({searchStudent:fieldValue});
			this.props.searchbook(fieldValue);
			
		}

	
         
	};

	static showModal(){
		document.getElementById("addStudent").showModal();
	}
	static hideModal(){
		document.getElementById("addStudent").close();
	}
	
	static preventHide(e){
		e.stopPropagation();
	}


        
	render(){
		
let cList,uList,aList;
let wid='15vw';
		

		return(
			<div className="pageRow filters">
				<div className="thisBlock">
					<div className="blockTitle">
					<div className="row">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-list-student">Student List</h1>
                          </div>
                        </div>
                      </div>

						{/*this is button add books*/}
						<div className="row">
						  <div className='col-6 ml0'>

					  <div className="text-center"><button onClick={Filters.showModal} style={{fontSize:'1.1em'}} className="btn  btn_normal mb3 mt3" >
                                                <i className="fas fa-plus-circle"></i>  &nbsp; &nbsp; Add Student
                                </button></div>
								</div>

								{/*this is search*/}	
								<div className="input-group rounded col ml6">
									<input value={this.state.searchStudent} type="search" className="form-control rounded" placeholder="Search by Name,ID,class,year" autoComplete="off" name="search" onChange={this.updateInfo}  aria-label="Search"
										aria-describedby="search-addon" />
								
										<i style={{fontSize:'1.5em'}} className="fas fa-search"></i>
							
								</div>	

					  </div>

						

									<dialog id="addStudent" className="dialogBox" onClick={Filters.hideModal} >
										<div style={{background:'#282829'}} className="dialogTitle" onClick={Filters.preventHide}>
											Add New Student
											<button onClick={Filters.hideModal}>X</button>
										</div>
										<div style={{background:'white'}} className="dialogBody" onClick={Filters.preventHide} >
											<div style={{width:wid}}>
												<label>Name  <i style={{color:"#3AE7E1"}} class="fas fa-check-square"></i></label>
												<div className="form-outline">
													<input placeholder="name" className="form-control" onChange={this.updateInfo} name="name" value={this.state.name}/>
												</div>
											</div>

											<div style={{width:wid}}>
												<label >Image</label>
												<label htmlFor="file" className="shareOption">
													 <input  id="file" class="form-control" type="file" id="formFileMultiple"  accept=".png,.jpeg,.jpg" multiple />
													
												</label>
											</div>

											<div style={{width:wid}}>
												<label>ID  <i style={{color:"#3AE7E1"}} class="fas fa-check-square"></i></label>
												<div className="form-outline">
													<input placeholder="id" className="form-control" onChange={this.updateInfo} name="roll" value={this.state.roll}/>
												</div>
											</div>
											<div style={{width:wid}}>
												<label>Phone  <i style={{color:"#3AE7E1"}} class="fas fa-check-square"></i></label>
												<div className="form-outline">
													<input placeholder="phone" className="form-control" onChange={this.updateInfo} name="phone" value={this.state.phone}/>
												</div>
											</div>
											<div style={{width:wid}}>
												<label>Year</label>
												<div className="form-outline">
													<input placeholder="year" className="form-control" onChange={this.updateInfo} name="year" value={this.state.year}/>
												</div>
											</div>
											<div style={{width:wid}}>
												<label>Class</label>
												<div className="form-outline">
													<input placeholder="class" className="form-control" onChange={this.updateInfo} name="branch" value={this.state.branch}/>
												</div>
											</div>
											
											
											
										</div>
										<div className="dialogFooter" onClick={Filters.preventHide}>
											<button  className="btn btndefaul" onClick={this.add} disabled={!this.state.name||!this.state.roll}>Save</button>
											<button  className="btn  btn_normal" onClick={Filters.hideModal}> Cancel</button>
										</div>
									</dialog>

					</div>
					</div>
			</div>
		)
	}
}