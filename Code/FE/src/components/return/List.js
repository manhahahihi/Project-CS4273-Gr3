import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';	
import { css } from '@emotion/core';
import { ScaleLoader } from 'react-spinners';

const override = css`
    display:inline;
    margin-top: 0 auto;
    border-color: red;

`;
export default class List extends React.Component {

	constructor(){
		super();
		this.state = {
			search:'',
            studentname:'',
            roll:'',
            branch: '',
            year:'',
            phone:'',
            issued:'',
            studentid:'',
            found:false,
            bookid:'',
            issue:'',
            fine:''
		};
		
	}






  searchstudent=(event)=>{
  	let s=event.target.value
  	this.setState({search:s},()=>{ fetch(`https://stark-hamlet-65683.herokuapp.com/students/${s}`,{
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data&&data.length>0)this.setState({found:true,name:data[0].name,roll:data[0].roll,branch:data[0].branch,year:data[0].year,phone:data[0].phone,id:data[0].id,issued:data[0].issued})});
})
    


  }



	static showModal(){
		document.getElementById("returnBook").showModal();
	}
	static hideModal(){
		document.getElementById("returnBook").close();
	}
	
	static preventHide(e){
		e.stopPropagation();
	}


  returnBook=()=>{
  	let {bookid,studentid}=this.state;
  	let fine=this.state.fine>0?this.state.fine:'0';
fetch('https://stark-hamlet-65683.herokuapp.com/bookreturn', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        bookid:bookid,
        studentid:studentid,
        fine:fine
      })
    }).then(response=>response.json()).then(data=>{
    		toast.info(data, {
                 position: toast.POSITION.BOTTOM_RIGHT,
                closeOnClick: true,
                pauseOnHover: true,
                autoClose:3000,
                draggable: true,
                hideProgressBar: false,
                
            });
	    List.hideModal();
		this.props.fetchBooks();});
	
  	
  }


    /* eslint-disable no-unused-vars */

	render(){
		let wid='20vw'
		let itemList;
		let tempfine;
		let x;
		if(this.props.books && this.props.books.length > 0){

			const none=<div style={{"marginLeft":'20px'}}>-</div>
			
			itemList = this.props.books.map((item)=>{
				
					
				
				if(!item.return)
				return(
					<tr key={item.id} className="tableRow"style={{fontSize:'0.9em'}}>
						
						<td className="" >{item.bookname}</td>
					
						<td className="">{item.author=="1" ? "UIT" : item.author}</td>
						
						
						<td className="">{item.publisher=="3" ? "UIT" : item.publisher}</td>
						
						<td className="">{item.studentname ? (item.studentname || '-') : '-'}</td>
						<td className="">{item.roll ? (item.roll || '-') : '-'}</td>
						
						<td className="">
						<div  className="row rowstyle">
								<Link style={{textDecoration:"none", marginLeft:"-18px"}} to={"/book/"+item.bookid} draggable="false"  className="">&nbsp; &nbsp;&nbsp; &nbsp;<i style={{color:"#87CEFA", fontSize:'1.4em'}} class="fas fa-book"></i></Link>
								<br/>
								<Link style={{textDecoration:"none"}} to={"/student/"+item.studentid} draggable="false"  className="">&nbsp; &nbsp; &nbsp;<i style={{color:"#87CEFA", fontSize:'1.4em'}} class="fas fa-user-graduate"></i></Link>
							</div>
						</td>
						<td>
						<a style={{marginLeft:"-15px"}} onClick={()=>{this.setState({bookid:item.bookid,studentid:item.studentid,studentname:item.studentname,roll:item.roll,bookname:item.bookname,author:item.author,publisher:item.publisher,edition:item.edition,isbn:item.isbn,fine:+(Math.floor((Date.parse(new Date())-Date.parse(item.issue))/(60*60*24*1000))-14)*1000},List.showModal())}}><button className="btn  btn_normal mr5 mb3 mt3" >
						<i class="fas fa-undo-alt"></i> Return
                                </button></a>
						</td>
					</tr>
				)
			})
		}
		
		else{
			
			itemList = (!this.props.fetched)? <tr key="nodata">
							<td className="noData" colSpan="6">
							 <div className='sweet-loading'>
					        <ScaleLoader
					          css={override}
					          sizeUnit={"px"}
					          color={'#0099cc'}
					          size={60}
					          height={35}
					          width={8}
					          radius={2}
					          loading={this.state.loading}
					        />
      						</div> 
							</td>
						</tr>
						:
						 <tr key="nodata">
							<td className="noData" colSpan="6">Currently, none of the Books are Issued!!</td>
						</tr>

		}

		return(
			<div className="pageRow" id="booksBlock">
				<div className="thisBlock table-height">
					<div className="blockBody">
						<div className="thisTable">
							<div className="tbl-header">
								<table >
								<thead className="thead-dark">
									<tr>
									
										<th style ={{color:'white', height:"60px"}}className="mt1">  Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
										
										<th style ={{color:'white'}} className="">Author</th>
									
										<th style ={{color:'white'}} className="">Publisher</th>
										<th style ={{color:'white'}} className="">Student</th>
										<th style ={{color:'white'}} className="">ID student</th>
										
										<th style ={{color:'white'}} className=" ">Info</th>
										<th style ={{color:'white'}} className=" ">Action</th>
									</tr>
									</thead>
								</table>
							</div>
							<div className="tbl-content">
								<table>
									<tbody>
										{itemList}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
										<dialog   id="returnBook" className="dialogBox" onClick={List.hideModal} style={{width:'50vw'}}>
										<div style={{background:'#282829'}} className="dialogTitle" onClick={List.preventHide}>
											Return Book
											<button onClick={List.hideModal}>X</button>
										</div>
										

												<div  style={{background:'white'}} className="dialogBody" onClick={List.preventHide} >

														
														<div style={{width:wid}}>
															<label>Book Name</label>
															<div className="form-outline">
															<input className="form-control" name="search" placeholder="Name" value={this.state.bookname}/>
															</div>
														</div>

														

														<div style={{width:wid}}>
															<label>Author</label>
															<div className="form-outline">
															<input className="form-control"  name="search" placeholder="Name" value={this.state.author}/>
															</div>
														</div>
														<div style={{width:wid}}>
															<label>Publisher</label>
															<div className="form-outline">
																<input className="form-control" name="search" placeholder="Name" value={this.state.publisher}/>
															</div>
														</div>
														
														<div style={{width:wid}}>
															<label>Student Name</label>
															<div className="form-outline">
																<input className="form-control" name="Year" placeholder="Year" value={this.state.studentname}/>
															</div>
														</div>
														<div style={{width:wid}}>
															<label> ID Student</label>
															<div className="form-outline">
															   <input className="form-control" name="Roll" placeholder="Roll" value={this.state.roll}/>
															</div>
														</div>

														<div style={{width:wid}}>
															<label className={this.state.fine>0?"redtxt":""}>Fine Amount</label>
															<div className="form-outline">
																<input className="form-control bold" name="Fine" placeholder="Fine" value={this.state.fine>0?' '+this.state.fine+'.00':'0'}/>
															</div>
														</div>
														
														
														
											  </div>
											

											
											
											
											
										
										<div className="dialogFooter" onClick={List.preventHide}>
											<button className="btn btndefaul" onClick={this.returnBook} >Return</button>
											<button className="btn  btn_normal" onClick={List.hideModal}>Cancel</button>
										</div>
									</dialog>
               
			</div>
		)
	}
}