import React from 'react';
import './style.css'

export default class BooksUpdateInfo extends React.Component {


	constructor(){
		super();
		this.state = {
            id:null,
        	book:null,
			isDisplayForm : false
		};
		
	}

	handleClick=()=>{
		this.setState({isDisplayForm: !this.state.isDisplayForm})

	}

render(){

let {book}=this.props;
var elmDispayform= this.state.isDisplayForm ? <img style={{marginLeft:"35px", marginTop:"-20px", marginBottom:"20px", width:"400px"}} src={"/assets/img/"+`${book.id}`+".jpg"} />: '';


return(
	
	

<div className="thisBlock halfBlock">


						<div className="row ml1">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-5">Update book</h1>  
                          </div>
                        </div>
						<div className="col">
						
						</div>
						</div>
						

					<div className="col-md-4 col-lg-4">
                           

						
                        </div>
						
						
							  <div className="blockBody custom">
									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Name</label>
										</div>
										
                                            <div className="form-group">
                                    <input style={{marginBottom:"-15px", width:"203px", marginLeft:"3px"}} placeholder={book.name || '-'} type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>   
                                </div>
										
										
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>ID Book</label>
										</div>
										<div className='row ml1'>
										
                                            <div className="">
                                    <label style={{marginBottom:"-15px"}} placeholder={book.isbn || 'IDBOOK397'} type="text" className="" name='publishingYear'  onChange={this.onChange}/> 
									<label>{book.isbn || 'IDBOOK397'}</label>  
                                </div>
										</div>
									</div>

									<div className="infoDisplay">
										<div  className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Author</label>
											</div>
											<div  className='row ml1'>
                                            <select style={{marginLeft:"-5px", width:"203px" }}  className="form-control"  onChange={this.updateInfo} name="author" value={this.state.author} placeholder={book.author || '-'} >
													<option value={book.author || '-'}>{book.author || '-'}</option>
													<option value={"Raoul-Gabriel"}>Raoul-Gabriel</option>
													<option value={"Macmillan"}>Macmillan</option>
													<option value={"SEDRA SMITH"}>SEDRA SMITH</option>
													<option value={"Christian Posta"}>Christian Posta</option>
													<option value={"Wiley"}>Wiley</option>
													<option value={"Kodansha"}>Kodansha</option>
												</select>
										</div>
										
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Publisher</label>
										</div>
										<div className='row ml1'>
										<div className="form-group">
												<select  style={{marginLeft:"-6px", width:"203px", marginBottom:"-16px" }} name='publisher' onChange={this.updateInfo}  onClick= {this.onClick} className="form-control"   placeholder="publisher" value={this.state.publisher} >
													<option value={"Hachette Livre"}>{book.publisher}</option>
													<option value={"UIT"}>UIT</option>
													<option value={"HarperCollins"}>HarperCollins</option>
													<option value={"Macmillan"}>Macmillan</option>
													<option value={"Pearson"}>Pearson</option>
													<option value={"Scholastic"}>Scholastic</option>
													<option value={"Wiley"}>Wiley</option>
													<option value={"Kodansha"}>Kodansha</option>
												</select>
											</div>
											
										</div>
									</div>
								

									<div className="infoDisplay">
										
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Print Year</label>
										</div>
										<div className='row ml1'>
										<div className="form-group">
										<input style={{marginBottom:"-15px", width:"203px", marginLeft:"-5px"}} placeholder={book.printyear || '-'} type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
											</div>
										</div>
									</div>
										

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Type</label>
										</div>
										<div className='row ml1'>
											<select style={{marginLeft:"-6px", width:"203px"}}  onChange={this.updateInfo} name="type"  value={this.state.type} onClick= {this.onClick} className="form-control"   placeholder="type"  >
												
                                        <option value={"Mathematics"}> Programming</option>
										<option value={"Programming"}>Mathematics</option>
                                        <option value={"Supporting Fields"}>Supporting Fields</option>
										<option value={"Operating System"}>Operating System</option>
										<option value={"Computer Science"}>Computer Science</option>
										<option value={"Operating System"}>Operating System</option>
										<option value={"Miscellaneous"}>Miscellaneous</option>
												</select>
										</div>
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Price</label>
										</div>
										<div className='row ml1'>
										<input  style={{ width:"203px", marginLeft:"-4px"}} placeholder={book.price +"0000 VND"|| '-'} type="text" className="form-control" name='publishingYear' value={book.price +"0000 VND"|| '-'} onChange={this.onChange}/>
										
											
										</div>
									</div>

                                    <div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Edition</label>
										</div>
										<div className='row ml1'>
											
											<input style={{width:"203px", marginLeft:"-6px"}}  placeholder={book.edition || '-'} type="text" className="form-control" name='publishingYear' value={book.edition || '-'} onChange={this.onChange}/>

										</div>
									</div>

                                    <div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Quantily</label>
										</div>
										<div className='row ml1'>
											
											<input style={{ width:"203px", marginLeft:"-6px"}}  placeholder={book.totalcopies || '0'} type="text" className="form-control" name='publishingYear' value={book.totalcopies || '0'} onChange={this.onChange}/>
										</div>
									</div>

									<div className="infoDisplay">
										<div className='row ml1'>
											<label style={{fontSize:'20px', color:'#1E90FF'}}>Additionals</label>
										</div>
										<div className='row ml1'>
										
											<input style={{ width:"203px", marginLeft:"-6px"}}  placeholder={book.additionals || '-'} type="text" className="form-control" name='publishingYear' value={book.additionals || '-'} onChange={this.onChange}/>
										</div>
									</div>
									
                                   
									
				</div>
																	
														    
												
												
 </div>




	)




}










}//class closed 