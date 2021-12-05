import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class parameters extends Component {
    static propTypes = {

    }

    render() {
        const successToast=()=>{
            toast("Update succcessfully", {
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
        return (
            <div className="pageView">
                <div  style={{marginLeft:"30px"}} style={{marginTop:"20px"}} className="d-flex position-relative float-left">
                            <h1 className="section-title-info">Default parameters</h1>
            
										
                          </div>
                          <div className="row">
                              <div className="col-2">
                          <div  style={{marginTop:"80px"}}>
                          <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px"}}>Max borrow time</label>
										<div style={{ marginLeft:"-270px"}}>
											<input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="15" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                            </div>
                                            <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px", marginTop:"10px"}}>Fine for one date</label>
										
                                            <div style={{ marginLeft:"-270px"}}>
											<input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="1000 VND" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                            </div>

                                            <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px", marginTop:"10px"}}>Max borrow books</label>
										
                                        <div style={{ marginLeft:"-270px"}}>
                                        <input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="3" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                        </div>

                                        <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px", marginTop:"10px"}}>Max Reader Ages</label>
										
                                        <div style={{ marginLeft:"-270px"}}>
                                        <input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="18" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                        </div>

                                        <label style={{fontSize:'20px', color:'#1E90FF', marginLeft:"-270px", marginTop:"10px"}}>Min Reader Ages</label>
										
                                        <div style={{ marginLeft:"-270px"}}>
                                        <input style={{ marginLeft:"-370px"}} style={{width:"340px"}}  placeholder="55" type="text" className="form-control" name='publishingYear'  onChange={this.onChange}/>
                                        </div>
                                        <button onClick={successToast} style={{marginTop:"25px", marginLeft:"-30px"}} className="btn_normal btn" ><i class="far fa-edit"></i> Update</button>
                            </div>
                            </div>

                            <div className="col-4">
                             <img src="assets/img/imgbook.png"></img>
                            </div>
                           </div>
               
            </div>
        )
    }
}

export default parameters
