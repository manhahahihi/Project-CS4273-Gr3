import React from 'react';

import BooksUpdateInfo from './infoUpdate';
import BookHistory from './bookHistory';
import './style.css'
import { css } from '@emotion/core';
import { ScaleLoader } from 'react-spinners';
import {ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const override = css`
    display:inline;
    margin-top: 0 auto;
    border-color: red;

`;


export default class BooksUpdatePageIndex extends React.Component {

constructor(){
		super();
		this.state = {
            id:null,
        	book:null,
        	bookHistory:[],
        	students:[],
        	loading:true,
            profileImg: "/assets/img/36.jpg"
		};
		
	}

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

fetchBookbyID=(id)=>{
if(id)

fetch(`https://stark-hamlet-65683.herokuapp.com/bookinfo/${id}`,{
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({book:data[0]})});
else
	window.location.href = window.location.origin+"/books";


}
fetchBookFromHistory=(id)=>{

if(id)

fetch(`https://stark-hamlet-65683.herokuapp.com/issuereturn/${id}`,{
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({bookHistory:data})});

}

fetchAllStudents=()=>{
fetch('https://stark-hamlet-65683.herokuapp.com/students', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({students:data})})

}


componentDidMount(){
let id=window.location.pathname;
id=id.substring(id.lastIndexOf('/')+1);
this.setState({id});
this.fetchBookbyID(id);
this.fetchBookFromHistory(id);
this.fetchAllStudents();
}


render(){
	const successToast=()=>{
		toast("Update book succcess", {
			/*className: "custom-toast",
			draggable: true,
			position: toast.POSITION.BOTTOM_RIGHT,
			*/
			className: "info-toast",
			position: toast.POSITION.BOTTOM_RIGHT,
                closeOnClick: true,
                pauseOnHover: true,
                autoClose:3000,
                draggable: true,
                
                hideProgressBar: false,


		});

		};

	const {book,bookHistory,students}=this.state;
	return(
				<div className="pageView">
							{book&&students.length>0?
						<div className="pageRow">
											
								<BooksUpdateInfo book={book}/>
                                <div style={{marginLeft:"30px"}} className="form-group col-5">
                                <input style={{marginBottom:"20px"}} type="file" onChange={this.imageHandler}  className="custom-file-input" id="validatedCustomFile" required />
                                <label className="custom-file-label ml5 mr3 mt-20" htmlFor="validatedCustomFile">Choose file...</label>
                                    <div className="img-holder ml">
						                <img style={{width:"350px"}} src={this.state.profileImg} alt="" id="img" className="img ml5 imgAddBook mt-40 " />
					                </div>

                                    <button style={{marginLeft:"170px", marginTop:"30px"}}  className="btn btndefaul" onClick={successToast} > <i class="far fa-edit"></i> Update </button>
											<button style={{marginLeft:"20px", marginTop:"30px"}} className="btn btn_normal" > <i class="far fa-window-close"></i> Cancel</button>
                            </div>

                            


								

						</div>
										 :


										 <div  className="pageRow">
										     <div style={{marginLeft:'50%',marginTop:'20%'}}>
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
						      				</div>
				      					</div>


							}




				</div>








		 )






}



}//class closed