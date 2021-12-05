import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from '@emotion/core';
import { ScaleLoader } from 'react-spinners';
import BackspaceIcon from '@material-ui/icons/Backspace';

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
            name:'',
            roll:'',
            branch: '',
            year:'',
            phone:'',
            issued:'',
            id:'',
            found:false,
            bookid:'',
            loading:true
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
		document.getElementById("issueBook").showModal();
	}
	static hideModal(){
		document.getElementById("issueBook").close();
	}
	
	static preventHide(e){
		e.stopPropagation();
	}


  issue=()=>{
  	let {bookid,id,roll,bookname,name,author,publisher,edition,isbn}=this.state;

fetch('https://stark-hamlet-65683.herokuapp.com/bookissue', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        bookid:bookid,
        studentid:id,
        roll:roll,
        bookname:bookname,
        studentname:name,
        author:author,
        publisher:publisher,
        edition:edition,
        isbn:isbn
      })
    }).then(response=>response.json()).then(data=>{List.hideModal();
	this.props.fetchBooks();
	toast.info(data, {
                 position: toast.POSITION.BOTTOM_RIGHT,
                closeOnClick: true,
                pauseOnHover: true,
                autoClose:3000,
                draggable: true,
                
                hideProgressBar: false,
               
            });
});
	
  	
  }


    /* eslint-disable no-unused-vars */

	render(){
		const successToast=()=>{
		toast("Books are being borrowed, can't deleted", {
			className: "info-toast",
			draggable: true,
			position: toast.POSITION.BOTTOM_RIGHT,


		});

		};
		let wid='20vw'
		let itemList;
		if(this.props.books && this.props.books.length > 0){

			const none=<div style={{"marginLeft":'20px'}}>-</div>
			
			itemList = this.props.books.map((item)=>{

				const none=<div style={{"marginLeft":'20px'}}>-</div>
				return(
					<tr key={item.id} className="tableRow"style={{fontSize:'0.9em'}}>
						<td className=""><img style={{width:"65px"}} src={"/assets/book/"+`${item.id}`+".jpg"}></img></td>
						<td className="" title="Click to know more about this book" style={{width:'200px'}}>
						
						<Link to={"/book/"+item.id} draggable="false"  className="">{item.name=="HHHH"? ("Game"): item.name }</Link></td>
					
						<td className="">{item.isbn ? (item.isbn|| '-') : 'IDBOOK397'}</td>
						<td style={{width:'140px'}} className="">{item.author ? (item.author || '-') : 'UIT'}</td>
						
						
						
						<td className="">{item.publisher ? (item.publisher || '-') : 'UIT'}</td>
						<td className="copies">{item.availablecopies ? (item.availablecopies || '-') : '0'}</td>
						
						<td className="">
						

						{item.availablecopies? 

<Link style={{textDecoration:"none", marginLeft:"-22px"}} to={"/bookUpdate/"+item.id} draggable="false"  className="">&nbsp; &nbsp;&nbsp; &nbsp;<i style={{color:"#87CEFA", fontSize:'1.4em'}} class="fas fa-edit"></i></Link>
					     :
					     <Link style={{textDecoration:"none"}} to={"/bookUpdate/"+item.id} draggable="false"  className="">&nbsp; &nbsp;&nbsp; &nbsp;<i style={{color:"#87CEFA", fontSize:'1.4em'}} class="fas fa-edit"></i></Link>
					     }

						<i onClick={successToast} style={{color:"#87CEFA", fontSize:'1.3em'}} className="fas fa-backspace ml1"></i>
						
					</td>
					</tr>
				)
			})
		}
		
		else{
			itemList =  <tr key="nodata">
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

		}

		return(
			<div className="pageRow" id="booksBlock">
				<div className="thisBlock">
					<div className="blockBody">
						<div className="thisTable mt10 table-height-book1">
							<div className="tbl-header">
								<table  >
									<thead >
									<tr style={{fontSize:'19px'}}>
									
									<th style ={{color:'white'}} className="">Image</th>
										<th style ={{color:'white', width:'200px', height:'50px'}} className="">Name</th>
										
										<th style ={{color:'white'}} className="">ID</th>
										
										<th style ={{color:'white'}} className="">Author</th>
									
										<th style ={{color:'white'}} className="">Publisher</th>
										<th style ={{color:'white'}} className="">Available</th>
										
										<th style ={{color:'white'}} className=" "> Action</th>
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
										<dialog id="issueBook" className="dialogBox" onClick={List.hideModal} style={{width:'50vw'}}>
										<div className="dialogTitle" onClick={List.preventHide}>
											Issue Book
											<button onClick={List.hideModal}>X</button>
										</div>
										{!this.state.found||!this.state.search?
										<div className="dialogBody" onClick={List.preventHide} >

											<div style={{width:wid}}>
												<label>Search Student</label>
												<input onChange={this.searchstudent} name="search" placeholder="Search by Roll or Name" value={this.state.search}/>
											</div>
										</div>
												:

												<div className="dialogBody" onClick={List.preventHide} >

														<div style={{width:wid}}>
															<label>Search Student</label>
															<input onChange={this.searchstudent} name="search" placeholder="Search by Roll or Name" value={this.state.search}/>
														</div>
														<div style={{width:wid}}>
															<label>Name</label>
															<input  name="search" placeholder="Name" value={this.state.name}/>
														</div>
														<div style={{width:wid}}>
															<label>ID</label>
															<input name="Roll" placeholder="Roll" value={this.state.roll}/>
														</div>
														<div style={{width:wid}}>
															<label>Year</label>
															<input  name="Year" placeholder="Year" value={this.state.year}/>
														</div>
														<div style={{width:wid}}>
															<label>Phone</label>
															<input  name="Phone" placeholder="Phone" value={this.state.phone}/>
														</div>
														<div style={{width:wid}}>
															<label>Issued Books</label>
															<input  name="issued" placeholder="None" value={this.state.issued}/>
														</div>

														<div style={{width:wid}}>
															<label>Recommended To Return By :</label>
															<input  name="recommend" placeholder="None" value={new Date((new Date()).getTime() + 14*24*60*60*1000).toDateString()}/>
														</div>

											  </div>
											}

											
										
										
										<div className="dialogFooter" onClick={List.preventHide}>
											<button onClick={this.issue} disabled={!this.state.found||!this.state.search||(this.state.issued>=3)}>Borrow</button>
											<button onClick={List.hideModal}>Cancel</button>
										</div>
									</dialog>
               
			</div>
		)
	}
}