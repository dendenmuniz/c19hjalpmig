import React from "react";
import "./Request.css";
import profil from "../../images/picon.png";
import Swal from "sweetalert2";

import { Link , Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

function AllRequestCard({Request, User, onAssignClick , onUnAssignClick,onDeleteClick}) {
  const name = Request.requester.firstName;
  const image =Request.requester.image;
  const requestId = Request.id;
  const id = Request.requester.id;

  const handelClick=(e)=>{
    if(Request.status==="Unassigned"){

    const newRequest={...Request,status:"Assigned"};
    onAssignClick(newRequest);
    Swal.fire(
        'success!',
        'Save the changes'
        )
    }
    else {
        const newRequest={...Request,status:"Unassigned",helper:null};
        onUnAssignClick(newRequest);
        Swal.fire(
            'success!',
            'Save the changes'
        )
    }
  }

    return (
  
        <div class="media text-muted pt-3">
        <img class="bd-placeholder-img mr-2 rounded" width="40" height="40" src={(image===null)?profil:image} />
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">

            <strong class="text-gray-dark" >
                <u><Link to={"/users/"+id}>
                        {name}  
                    </Link> </u>  
                <strong className="helpType" >{Request.helpType}</strong>
             </strong>
            <div >

                {
                  User!==null  && Request.requester.id===User.id ?
                    <div>
                        <Link to={"/view/"+requestId} >
                            Edit
                        </Link>
                        <a href="#" style={{paddingLeft: "10px",color:"red"}} onClick={onDeleteClick}>Delete</a>
                    </div>:
                            
                            <div>
                                 {  
                                   Request.status==="Assigned" ?
                                    <a href="#" className=" text-muted disabled "  onClick={handelClick} style={{padding: "10px",textDecoration:"none"}}>Taken</a>
                                    :<a href="#"  className="text-success" onClick={handelClick} style={{padding: "10px",textDecoration:"none"}}>Give help</a>
                                 }
                              </div>      
                                 
                            
                }
              
             </div>
            </div>
            <span class="d-block">{Request.description}</span>
            
            <div className="info">
               <div>Date : {Request.createDate} | Duedate : {Request.dueDate} | Location : {Request.location}</div>
            </div>
        </div>
        </div>
    );
}

export default AllRequestCard;



                                