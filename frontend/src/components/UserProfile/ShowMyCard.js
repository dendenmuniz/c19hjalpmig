import React from 'react';
import './UserPage.css';
import profilePicture from '../../images/picon.png';
import { Link , Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

function ShowMyCard({user}) {

    const id = user.id;
    return (
        <div className="container m-0 p-0 ruby" style={{ color:"black",maxWidth:"none"}}>

	           
            	<div className="row">
           
                    <div className="col">
                    		<div className="card shadow-lg bg-mute hight" style={{margin:"15px",textAlign:"center", color:"black"}}>
                                    <div className="card-body">
                                       
                                        <img className="rounded-circle mx-auto my-auto border border-info " alt="..." style={{height:"180px",width:"250px" }} src={user.image==null ? profilePicture:user.image} />
                                        
                                        <h2 className="text-info text-capitalize">{user.firstName}</h2>
                                        
                                        <div className="text-info pl-5" style={{textAlign:"left", width:"90%"}}>
                                        <hr/>
                                        <h6>About</h6>
                                        <p><small className="text-muted">{user.about}</small></p>
                                        <h6>Email</h6>
                                        <p><small className="text-muted">{user.email}</small></p>
                                        <h6>Address</h6>
                                        <p><small className="text-muted">{user.address}+","+{user.postCode}+","{user.city}</small></p>
                                        <h6>Message</h6>
                                        <Link to ={"/chat/"+id}>
                                          Chat with {user.firstName}
                                         </Link>   
                                        </div>
                                        
                                    </div>    
                            </div>
                    </div>
                </div>


                
                
        </div>                          
    );
}

export default ShowMyCard;