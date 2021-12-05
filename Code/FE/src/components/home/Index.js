import React from 'react';
import List from "./List";
import './style.css'
import './style.scss'

export default class Home extends React.Component{

	
constructor(){
		super();
		this.state = {

			bookList:[],
			totalbookList:[],
			total:'',
			issued:'',
			students:'',
			avl:'',
			fetched:false,

		};
		
	}



fetchAllBooks=()=>{

}


fetchBooks=()=>{

fetch('https://stark-hamlet-65683.herokuapp.com/getissuereturn', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({fetched:true,bookList:data,issued:data.filter(function(x){return !x.return}).length})})



	}
countBooks=()=>{

fetch('https://stark-hamlet-65683.herokuapp.com/countbook', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({total:data[0].count})})




	}
	countavlBooks=()=>{

fetch('https://stark-hamlet-65683.herokuapp.com/countavlbook', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({avl:data[0].count})})




	}



	countStudents=()=>{

fetch('https://stark-hamlet-65683.herokuapp.com/countstudent', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
  }).then(response=>response.json()).then(data=>{if(data)this.setState({students:data[0].count})})




	}


	componentDidMount(){


	this.fetchBooks();
	this.countBooks();
	this.countavlBooks();
	this.countStudents();
}




	render(){



		return(
			<div className="pageView">

<div className="row mt5">
  {/* Earnings (Monthly) Card Example */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 getBook">
            Books</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.total-20 || 0}</div>
          </div>
          <div className="col-auto">
            <i style={{color:'#bad7df'}} className="fas fa-book-open fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Earnings (Monthly) Card Example */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-success shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
          <div className="text-xs font-weight-bold text-success text-uppercase mb-1 testcolor">
            BORROWED</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.issued || 0}</div>
          </div>
          <div className="col-auto">
            <i style={{color:'#99decc'}} className="far fa-id-card fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Earnings (Monthly) Card Example */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-info shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Available
            </div>
            <div className="row no-gutters align-items-center">
              <div className="col-auto">
                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{this.state.avl-24 || 0}</div>
              </div>
              <div className="col">
                <div className="progress progress-sm mr-2">
                  <div className="progress-bar bg-info" role="progressbar" style={{"width":"50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <i style={{color:'#36b9cc'}} className="fas fa-clipboard-list fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pending Requests Card Example */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-warning shadow h-100 py-2">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 setpink">
            Students</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">14</div>
          </div>
          <div className="col-auto">
            <i style={{color:'#B0FEFE'}} className="fas fa-user-graduate fa-2x text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Content Row */}

{/* Content Row */}
<div className="row">
 {/* Content Column */}
<div className="col-lg-5 mb-4">
  {/* Project Card Example */}
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 style={{color:"#3e8177"}}  className="m-0 font-weight-bold">Most popular</h6>
    </div>
    <div className="card-body  shadow1">


      <div className="border-top ml3 mr3">
  <div className="row mt1 mb1">
    <div className="col-sm-4">
      <div className="position-relative image-hover">
        <img style={{width:"110px"}} src="https://imgv2-1-f.scribdassets.com/img/word_document/382519309/original/216x287/9ddf2cfb9c/1617225378?v=1" alt="news" className="img-fluid" />
        <span className="thumb-title1">Programming</span>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="position-relative image-hover">
        <h6 className="font-weight-600">
          NODEJS By EMANUELE DELBOLO
        </h6>
        <p style={{fontSize:'17px', color:"#696969"}}className="fs-15">Publisher: 
          UIT</p>
          <p style={{color:"#008080"}}> Available Books:
          25</p>
          <spam style={{color:"#008080"}}>The number of Books
          40</spam>
      </div>
    </div>
  </div>
</div>

<div className="border-top ml3 mr3">
  <div className="row mt1 mb1">
    <div className="col-sm-4">
      <div className="position-relative image-hover">
        <img style={{width:"110px"}} src="https://cv02.twirpx.net/3050/3050509.jpg?t=20200224072732" alt="news" className="img-fluid" />
        <span className="thumb-title1">Programming</span>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="position-relative image-hover">
        <h6 className="font-weight-600">
          FULLSTACKS NODEJS 
        </h6>
        <p style={{fontSize:'17px', color:"#696969"}}className="fs-15">Publisher: 
          DHANPAT RAI</p>
          <p style={{color:"#008080"}}> Available Books:
          25</p>
          <spam style={{color:"#008080"}}>The number of Books
          38</spam>
      </div>
    </div>
  </div>
</div>

<div className="border-top ml3 mr3">
  <div className="row mt1 mb1">
    <div className="col-sm-4">
      <div className="position-relative image-hover">
        <img style={{width:"110px"}} src="https://images-na.ssl-images-amazon.com/images/I/51GSWrIyQtL._SX258_BO1,204,203,200_.jpg" alt="news" className="img-fluid" />
        <span className="thumb-title1">Programming</span>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="position-relative image-hover">
        <h6 className="font-weight-600">
          MONGGODB
        </h6>
        <p style={{fontSize:'17px', color:"#696969"}}className="fs-15">Publisher: 
          UIT</p>
          <p style={{color:"#008080"}}> Available Books:
          25</p>
          <spam style={{color:"#008080"}}>The number of Books
          30</spam>
      </div>
    </div>
  </div>
</div>

<div className="border-top ml3 mr3">
  <div className="row mt1 mb1">
    <div className="col-sm-4">
      <div className="position-relative image-hover">
        <img style={{width:"110px"}} src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1348/9780134843551.jpg" alt="news" className="img-fluid" />
        <span className="thumb-title1">Programming</span>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="position-relative image-hover">
        <h6 className="font-weight-600">
          LEARNING REACT
        </h6>
        <p style={{fontSize:'17px', color:"#696969"}}className="fs-15">Publisher: 
          DHANPAT RAI</p>
          <p style={{color:"#008080"}}> Available Books:
          10</p>
          <spam style={{color:"#008080"}}>The number of Books
          20</spam>
      </div>
    </div>
  </div>
</div>


<div className="border-top ml3 mr3">
  <div className="row mt1 mb1">
    <div className="col-sm-4">
      <div className="position-relative image-hover">
        <img style={{width:"110px"}} src="https://m.media-amazon.com/images/I/418PwFaON0L.jpg" alt="news" className="img-fluid" />
        <span className="thumb-title1">Programming</span>
      </div>
    </div>
    <div className="col-sm-8">
      <div className="position-relative image-hover">
        <h6 className="font-weight-600">
          REACT HOOKS
        </h6>
        <p style={{fontSize:'17px', color:"#696969"}}className="fs-15">Publisher: 
          UIT</p>
          <p style={{color:"#008080"}}> Available Books:
          5</p>
          <spam style={{color:"#008080"}}>The number of Books
          14</spam>
      </div>
    </div>
  </div>
</div>


    </div>
  </div>
</div>

<div className="col-lg-7 mb-4">
  {/* Illustrations */}
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 style={{color:"#3e8177"}} className="m-0 font-weight-bold">Library introduction</h6>
    </div>
    <div className="card-body">
      <div className="text-center">
       {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{"width":"25rem", height:'185px'}} src="assets/img/1.png" alt="..." /> */}

       <div className="mid">
              <video style={{"width":"150px", height:'45px'}} autoPlay muted loop>
                <source className="embed-responsive" src="assets/img/book_video.mp4" type="video/mp4" />
              </video>
              <div class="color-overlay"></div>
            </div>
           <div className="carousel-caption">
             <h5 className="display-2">Library</h5>
             <h6>Welcome to online Library</h6>
             <button type="button" className="btn btn-outline-light btn-sm">
               SEE SERVICES
             </button>
             <button type="button" className="btn btn-primary btn-sm btnStarted">Learn more</button>
           </div>


      </div>
      
    </div>
  </div>
</div>

</div>

      <div className="row">
                        <div className="col-lg-3 ml130 mt70">
                          <div className="d-flex position-relative float-left">
                            <h1 className="section-title">Currently Borrowed Books</h1>
                          </div>
                        </div>
                      </div>
			

      
			<List className="mb5" fetchBooks={this.fetchBooks} books={this.state.bookList} fetched={this.state.fetched} />
			
      {/*test*/ }
      <div className="row mt5">

      </div>
      <div className='row'>
       
       
       
      
      <div style={{marginLeft:"180px"}} className="col ">
      
    </div>
    </div>
      
			</div>)
	}
}