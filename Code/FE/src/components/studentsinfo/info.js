import React from 'react';


export default class BooksInfo extends React.Component {


	constructor(){
		super();
		this.state = {
            id:null,
        	student:null
		};
		
	}



render(){

let {student}=this.props;


return(

<div className="thisBlock halfBlock">


						<div className="row">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-info">Student Info</h1>
                          </div>
                        </div>
                      </div>

							<img style={{marginLeft:"95px"}} className='topbarImg'  src={"/assets/img/"+`${student.id}`+".jpeg"}></img>
								 
							  <div className="blockBody custom">

							  <div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Name</label>
										</div>
										<div className='row ml1'>
											<label > {student.name || '-'}</label>
										</div>
								</div>

								<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>ID Student</label>
										</div>
										<div className='row ml1'>
											<label >{student.roll || '-'}</label>
										</div>
								</div>

								<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Phone</label>
										</div>
										<div className='row ml1'>
											<label >{student.phone || '-'}</label>
										</div>
								</div>

								<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Year</label>
										</div>
										<div className='row ml1'>
											<label >{student.year || '-'}</label>
										</div>
								</div>

								<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Class</label>
										</div>
										<div className='row ml1'>
											<label >KTPM2018</label>
										</div>
								</div>

								<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>No. Of Borrowed</label>
										</div>
										<div className='row ml1'>
											<label >{student.issued || '0'}</label>
										</div>
								</div>



									
								
								

							  </div>
																	
														    
												
												
 </div>




	)




}










}//class closed 