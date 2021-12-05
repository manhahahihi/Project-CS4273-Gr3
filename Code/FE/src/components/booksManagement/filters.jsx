import React, {useState } from 'react';
import './style.css'
import { toast } from 'react-toastify';	
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import { Multiselect } from 'multiselect-react-dropdown';


export default class Filters extends React.Component {

/*eslint-disable no-unused-expressions */
	constructor(){
		super();
		this.state = {
			bookList:[],
			search:'',
			date: new Date(),
			options: [{name: 'Raoul-Gabriel Urma', id: 1},
			{name: 'SEDRA SMITH', id: 2},
			{name: 'Benjamin Evans', id: 3},
			{name: 'Arun Gupta', id: 4},
			{name: 'Christian Posta', id: 5}
		]

		};
		
		
	}


	
	
	handleChange(event) {
        this.setState({value: event.option});
      }


	updateInfo = (event) =>{
		let fieldName = event.target.name;
		let fieldValue = event.target.value;
		if(fieldName === 'bookname') {
			this.setState({bookname: fieldValue});
		}
		else if(fieldName === 'author'){
			this.setState({author:fieldValue});

		}
		else if(fieldName === 'isbn'){
			this.setState({isbn:fieldValue});
			
		}else if(fieldName === 'publisher'){
			this.setState({ publisher: event.target.value });
			
		}else if(fieldName === 'copyrightyear'){
			this.setState({copyrightyear:fieldValue});
			
		}else if(fieldName === 'edition'){
			this.setState({edition:fieldValue});
			
		}else if(fieldName === 'printyear'){
			this.setState({printyear:fieldValue});
			
		}else if(fieldName === 'stackno'){
			this.setState({stackno:fieldValue});
			
		}else if(fieldName === 'volume'){
			this.setState({volume:fieldValue});
			
		}else if(fieldName === 'accessionno'){
			this.setState({accessionno:fieldValue});
			
		}else if(fieldName === 'pages'){
			this.setState({pages:fieldValue});
			
		}else if(fieldName === 'totalcopies'){
			this.setState({totalcopies:fieldValue});
			
		}else if(fieldName === 'availablecopies'){
			this.setState({availablecopies:fieldValue});
			
		}else if(fieldName === 'type'){
			this.setState({ type: event.target.value });
			
		}else if(fieldName === 'price'){
			this.setState({price:fieldValue});
			
		}else if(fieldName === 'additionals'){
			this.setState({additionals:fieldValue});
			
		}
		else if(fieldName === 'search'){
			this.setState({searchDevice:fieldValue});
			this.props.searchbook(fieldValue);
			
		}

	
         
	};


	add=(e)=>{

		let {bookname,isbn,author,publisher,copyrightyear,edition,printyear,stackno,volume,accessionno,pages,totalcopies,type,price,additionals}=this.state;
		this.props.addBook(bookname,isbn,author,publisher,copyrightyear,edition,printyear,stackno,volume,accessionno,pages,totalcopies,totalcopies,type,price,additionals);
		Filters.hideModal();

		this.props.fetchBooks();
		this.setState({bookname:'',isbn:'',author:'',publisher:'',copyrightyear:'',edition:'',printyear:'',stackno:'',volume:'',accessionno:'',pages:'',totalcopies:'',availablecopies:'',type:'',price:'',additionals:''})
		

	}


	static showModal(){
		document.getElementById("addBook").showModal();
	}
	static hideModal(){
		document.getElementById("addBook").close();
		
	}
	
	static preventHide(e){
		e.stopPropagation();
	}


        
	render(){
		
let cList,uList,aList;
let wid='20vw';

		

		return(
			<div className="pageRow filters">
				<div className="thisBlock">
					<div className="blockTitle">
                        
                    <div className="row">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title_4">Book List</h1>
                          </div>
                        </div>
                      </div>

                    {/*this is button add books*/}
					  <div className="row">
						  <div className='col-6'>

					  <div className="text-center ml-288"><button onClick={Filters.showModal} style={{fontSize:'1.1em'}} className="btn  btn_normal mr5 mb3 mt3" >
                                                <i className="fas fa-plus-circle"></i>  &nbsp; &nbsp; Add books
                                </button></div>
								</div>

								{/*this is search*/}	
								<div className="input-group rounded col">
									<input value={this.state.searchDevice}  type="search" className="form-control rounded" placeholder="Search by Book Info" autoComplete="off" name="search" onChange={this.updateInfo}  aria-label="Search"
										aria-describedby="search-addon" />
								
										<i style={{fontSize:'1.5em'}} className="fas fa-search"></i>
							
								</div>	

					  </div>
					  <dialog id="addBook" className="dialogBox" onClick={Filters.hideModal} style={{width:'70vw'}}>
										<div style={{background:'#282829'}} className="dialogTitle" onClick={Filters.preventHide}>
										Add New Book
											<button onClick={Filters.hideModal}>X</button>
										</div>
										<div style={{background:'white'}} className="dialogBody" onClick={Filters.preventHide} >
											<div style={{width:wid}}>
												<label>Name &nbsp; <i style={{color:"#3AE7E1"}} class="fas fa-check-square"></i></label>
												<div className="form-outline">
													<input  placeholder="Name" onChange={this.updateInfo} name="bookname" className="form-control" value={this.state.bookname}/>
												</div>
											</div>
											
											<div style={{width:wid}}>
												<label >Image</label>
												<label htmlFor="file" className="shareOption">
													 <input  id="file" class="form-control" type="file" id="formFileMultiple"  accept=".png,.jpeg,.jpg" multiple />
													
												</label>
											</div>

											<div style={{width:wid}}>
												<label>Edition</label>
												<div className="form-outline">
													<input  placeholder="Edition" class="form-control" onChange={this.updateInfo} name="edition" value={this.state.edition}/>
												</div>
											</div>

											<div style={{width:wid}}>
												<label>Author &nbsp; <i style={{color:"#3AE7E1"}}  class="fas fa-check-square"></i></label>
											{/*	<input onChange={this.updateInfo} name="author" value={this.state.author}/> */}

											<div className="form-group">
												<select className="form-control"  onChange={this.updateInfo} name="author" value={this.state.author} >
													<option value={"Arun Gupta"}>Arun Gupta</option>
													<option value={"Raoul-Gabriel"}>Raoul-Gabriel</option>
													<option value={"Macmillan"}>Macmillan</option>
													<option value={"SEDRA SMITH"}>SEDRA SMITH</option>
													<option value={"UIT"}>UIT</option>
													<option value={"Wiley"}>Wiley</option>
													<option value={"Kodansha"}>Kodansha</option>
												</select>
									  		</div>
											</div>
											<div style={{width:wid}}>
												<label>Publisher &nbsp; <i style={{color:"#3AE7E1"}} class="fas fa-check-square"></i></label>
												{/*<input onChange={this.updateInfo} name="publisher" value={this.state.publisher}/> */}
												<div className="form-group">
												<select name='publisher' onChange={this.updateInfo}  onClick= {this.onClick} className="form-control"   placeholder="publisher" value={this.state.publisher} >
													<option value={"Hachette Livre"}>Hachette Livre</option>
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

											<div style={{width:wid}}>
												<label>Type</label>
											{/*	<input onChange={this.updateInfo} name="type" value={this.state.type}/> */}
											<div className="form-group">
												<select  onChange={this.updateInfo} name="type"  value={this.state.type} onClick= {this.onClick} className="form-control"   placeholder="type"  >
												
                                        <option value={"Mathematics"}>Mathematics</option>
										<option value={"Programming"}>Programming</option>
                                        <option value={"Supporting Fields"}>Supporting Fields</option>
										<option value={"Operating System"}>Operating System</option>
										<option value={"Computer Science"}>Computer Science</option>
										<option value={"Operating System"}>Operating System</option>
										<option value={"Miscellaneous"}>Miscellaneous</option>
												</select>
												</div>
											</div>


											<div style={{width:wid}}>
												<label>Print Year</label>
												<div className="form-group">
												    <input placeholder="Print Year"  className="form-control" onChange={this.updateInfo} name="printyear" value={this.state.printyear}/>
												</div>
											</div>
											
											<div style={{width:wid}}>
												<label>Quantily  <i style={{color:"#3AE7E1"}} class="fas fa-check-square"></i></label>
												<div className="form-group">
												    <input  placeholder="Quantily " className="form-control" onChange={this.updateInfo} name="totalcopies" value={this.state.totalcopies}/>
												</div>
											</div>
											
											
											<div style={{width:wid}}>
												<label>Price  <i style={{color:"#3AE7E1"}} class="fas fa-check-square"></i></label>
												<div className="form-group">
													<input placeholder="Price   " className="form-control" onChange={this.updateInfo} name="price" value={this.state.price}/>
													
												</div>
											</div>

											<div style={{width:wid}}>
												<label >ID</label>
												<div className="form-group">
													<input placeholder="ID Book"  className="form-control"  onChange={this.updateInfo} name="isbn" value={this.state.isbn}/>
												</div>
											</div>

											<div style={{width:wid}}>
												<label>Additionals</label>
												<div className="form-group">
													<input  placeholder="Additionals" className="form-control" onChange={this.updateInfo} name="additionals" value={this.state.additionals}/>
												</div>
											</div>

											<div style={{width:wid}}>
												<label style={{color:"#008080"}}> <i style={{color:"#008080"}} class="far fa-calendar-alt"></i> Added date </label>
												<DatePicker className="form-group form-control boder-color "
													selected={this.state.date}
													onChange={this.onChangeDate}
													/> 
											</div>
											
											
											
										</div>
										<div className="dialogFooter" onClick={Filters.preventHide}>
											<button  className="btn btndefaul" onClick={this.add} disabled={!this.state.bookname || !this.state.author  || !this.state.type }>Add</button>
											<button className="btn btn_normal" onClick={Filters.hideModal}>Cancel</button>
										
										</div>
									</dialog>

					</div>
					</div>
			</div>
		)
	}
}