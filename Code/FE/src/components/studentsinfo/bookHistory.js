import React from 'react';
import './style.css'
export default class BooksInfoPageIndex extends React.Component {

constructor(){
		super();
		this.state = {
            id:null,
        	studentt:null,
        	studentHistory:[],


		};
		
	}



/*<div>
{this.props.bookHistory.map((item)=>{return<div>{item.bookid+' '+(new Date(Date.parse(item.issue))).toDateString()}</div>})}
</div>
*/

render(){

		let bookid;	
		let book={};
		let itemListr='';
		let itemListi='';
		if(this.props.studentHistory && this.props.studentHistory.length > 0){

			const none=<div style={{"marginLeft":'20px'}}>-</div>
			
			itemListr = this.props.studentHistory.map((item)=>{
				if(item.return){
				bookid=item.bookid
				book=this.props.books.find(bk=>bk.id==bookid);

				const none=<div style={{"marginLeft":'20px'}}>-</div>
				if(book)
				return(
					<tr key={item.id} className="tableRow"style={{fontSize:'0.9em'}}>
						<td className="">{book.name ? (book.name|| '-') : '-'}</td>
					
						<td className="">{book.author ? (book.author || '-') : '-'}</td>
						
						<td className="" style={{whiteSpace: 'pre-wrap'}}>{item.issue ? ((new Date(Date.parse(item.issue))).toDateString()+'\n'+(new Date(Date.parse(item.issue))).toLocaleTimeString() || '-') : '-'}</td>
						<td className="" style={{whiteSpace: 'pre-wrap'}}>{item.return ? ((new Date(Date.parse(item.return))).toDateString()+'\n'+(new Date(Date.parse(item.return))).toLocaleTimeString() || '-') : '-'}</td>
						
						
					</tr>
				)
				}
			})



			itemListi = this.props.studentHistory.map((item)=>{
				if(!item.return){
				bookid=item.bookid
				book=this.props.books.find(std=>std.id==bookid);

				const none=<div style={{"marginLeft":'20px'}}>-</div>
				if(book)
				return(
					<tr key={item.id} className="tableRow"style={{fontSize:'0.8em'}}>
						<td className="">{book.name ? (book.name|| '-') : '-'}</td>
						<td className="">{book.isbn ? (book.publisher|| 'o') : 'UIT'}</td>
						<td className="">{book.author ? "UIT" : book.author}</td>
						
						
						<td className="" style={{whiteSpace: 'pre-wrap'}}>{item.issue ? ((new Date(Date.parse(item.issue))).toDateString()+'\n'+(new Date(Date.parse(item.issue))).toLocaleTimeString() || '-') : '-'}</td>
						
						
						
					</tr>
				)
				}
			})

		}
		
		else{
			itemListr =  <tr key="nodata">
							<td className="noData" colSpan="6">No Transaction here!!</td>
						</tr>
			itemListi =  <tr key="nodata">
							<td className="noData" colSpan="6">No Transaction here!!</td>
						</tr>

		}

		return(
		<div className="thisBlock halfBlock">
			<div className="row">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-transaction-history">Currently Borrowed</h1>
                          </div>
                        </div>
            </div>

			<div style={{marginLeft:"20px", paddingRight:"20px"}}  className="pageRow" id="booksBlock" style={{}}>
				<div style={{marginLeft:"20px", paddingRight:"20px"}} className="thisBlock">
					<div className="blockBody">
						<div className="thisTable" style={{height:'35vh'}}>
							<div className="tbl-header">
								<table>
									<thead>
									<tr>
										<th style={{color:"white", height:"50px", fontSize:"18px"}} className="">Name</th>
										<th style={{color:"white", height:"50px", fontSize:"18px"}} className="">Publisher</th>
										<th style={{color:"white", height:"50px", fontSize:"18px"}} className="">Author</th>
									
										<th style={{color:"white", height:"50px", fontSize:"18px"}} className="">Borrowed</th>
										
									</tr>
									</thead>
								</table>
							</div>
							<div className="tbl-content">
								<table style={{fontSize:"17px"}}>
									<tbody>
										{itemListi}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
               
			</div>
			<div style={{height:'2px',background:'#d4d4d5'}}></div>

				<div className="row">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-transaction-history">Transaction History</h1>
                          </div>
                        </div>
                      </div>

				<div style={{marginLeft:"20px", paddingRight:"20px"}} className="pageRow" id="booksBlock" >
				<div className="thisBlock">
					<div className="blockBody" >
						<div className="thisTable" style={{height:'35vh'}}>
							<div className="tbl-header">
								<table>
									<thead>
									<tr>
										<th style={{color:"white", height:"50px", fontSize:"18px"}} className="">Name</th>
										
										<th style={{color:"white", height:"50px", fontSize:"18px"}} className="">Author</th>
									
										<th style={{color:"white", height:"50px", fontSize:"18px"}} className="">Borrowed</th>
										<th style={{color:"white", height:"50px", fontSize:"18px"}} className="">Return</th>
										
									</tr>
									</thead>
								</table>
							</div>
							<div className="tbl-content">
								<table>
									<tbody style={{fontSize:"15px"}}>
										{itemListr}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
               
			</div>



	</div>
		)	










} //render Ends here


}//class closed