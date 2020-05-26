import React from 'react';
import Swal from "sweetalert2";
import profil from "../../images/picon.png";
import { Link , Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";


function MyTaskCard({Request,User,onUnAssignClick,onAssignClick}) {
    const image =Request.requester.image;
    const id = Request.requester.id;
    const name = Request.requester.firstName;
    const handelClick=(e)=>{
        if(Request.status==="Assigned"){
    
        const newRequest={...Request,status:"Unassigned",helper:null};
        onUnAssignClick(newRequest);
        Swal.fire(
            'success!',
            'Save the changes'
            )
        }
        else{
           
            const newRequest={...Request,status:"Assigned"};
            onAssignClick(newRequest);
            Swal.fire(
                'success!',
                'Save the changes'
                )
        }
      }

    return (
        <div>
            { (User!==null && Request.helper!==null && Request.helper.id===User.id) ?
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
             <div className=" text-danger">
                                {
                                    Request.status==="Assigned" ?
                                    <a href="#" className=" text-reset"  onClick={handelClick} style={{padding: "10px",textDecoration:"none"}}>Cancel</a>
                                    :<a href="#" onClick={handelClick} style={{padding: "10px",textDecoration:"none"}}>Assign</a>
                                }   
                            </div>
            
            </div>
            
            <span class="d-block">{Request.description}</span>
            
           <div className="info">
            <div>Date : {Request.createDate} | Duedate : {Request.dueDate} | Location : {Request.location}  </div>
            </div>
        </div>
        </div>: null}
        </div>
        
    );
}

export default MyTaskCard;