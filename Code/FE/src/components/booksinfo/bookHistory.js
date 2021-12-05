import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import InfoIcon from '../common/images/info.png';
export default class BooksInfoPageIndex extends React.Component {

constructor(){
		super();
		this.state = {
            id:null,
        	book:null,
        	bookHistory:[],


		};
		
	}



/*<div>
{this.props.bookHistory.map((item)=>{return<div>{item.bookid+' '+(new Date(Date.parse(item.issue))).toDateString()}</div>})}
</div>
*/

render(){

		let studentid;	
		let student;
		let itemListr='';
		let itemListi='';
		if(this.props.bookHistory && this.props.bookHistory.length > 0){

			const none=<div style={{"marginLeft":'20px'}}>-</div>
			
			itemListr = this.props.bookHistory.map((item)=>{
				if(item.return){
				studentid=item.studentid
				student=this.props.students.find(std=>std.id==studentid);

				const none=<div style={{"marginLeft":'20px'}}>-</div>
				return(
					<tr key={item.id} className="tableRow"style={{fontSize:'1.0em'}}>
						<td className="">
						<Link to={"/student/"+student.id} draggable="false"  className="">{student.name}</Link>

						</td>
						<td className="">{student.roll ? (student.roll|| '-') : '-'}</td>
						<td className="" style={{whiteSpace: 'pre-wrap'}}>{item.issue ? ((new Date(Date.parse(item.issue))).toDateString()+'\n'+(new Date(Date.parse(item.issue))).toLocaleTimeString() || '-') : '-'}</td>
						<td className="" style={{whiteSpace: 'pre-wrap'}}>{item.return ? ((new Date(Date.parse(item.return))).toDateString()+'\n'+(new Date(Date.parse(item.return))).toLocaleTimeString() || '-') : '-'}</td>
						
						
						
					</tr>
				)
				}
			})



			itemListi = this.props.bookHistory.map((item)=>{
				if(!item.return){
				studentid=item.studentid
				student=this.props.students.find(std=>std.id==studentid);

				const none=<div style={{"marginLeft":'20px'}}>-</div>
				return(
					<tr key={item.id} className="tableRow"style={{fontSize:'1.0em'}}>
						<td className="">
						<Link to={"/student/"+student.id} draggable="false"  className="">{student.name}</Link>

						</td>
						<td className="">{student.roll ? (student.roll|| '-') : '-'}</td>
						
						
						
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

			<div className="row ml1">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-2">Currently Borrowed</h1>
                          </div>
                        </div>
            </div>

			<div className="pageRow" id="booksBlock" style={{marginLeft:"20px",  paddingRight:"20px"}}>
				<div className="thisBlock">
					<div className="blockBody" >
						<div className="thisTable" style={{height:'35vh'}}>
							<div className="tbl-header">
								<table >
									<thead>
									<tr>
										<th style ={{color:'white'}} className="heigh-th">Name</th>
										<th style ={{color:'white'}} className="heigh-th">ID</th>
										
										<th style ={{color:'white'}} className="heigh-th">Borrowed</th>
										
									</tr>
									</thead>
								</table>
							</div>
							<div className="tbl-content">
								<table>
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

				<div className="row ml1">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title-3">Transaction History</h1>
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
										<th style ={{color:'white'}} className="heigh-th">Name</th>
										<th style ={{color:'white'}} className="heigh-th">ID</th>
										<th style ={{color:'white'}} className="heigh-th">Borrowed</th>
										<th style ={{color:'white'}} className="heigh-th">Return</th>
										
									</tr>
									</thead>
								</table>
							</div>
							<div className="tbl-content">
								<table>
									<tbody>
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