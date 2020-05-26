import React from 'react';
import profil from "../../images/picon.png";
import { Link } from "react-router-dom";

function MyRequestForNotificationCard({Request}) {
    return (
        <div>


<div class="media text-muted pt-3">
           

           <img class="bd-placeholder-img mr-2 rounded" width="40" height="40" src={(Request.requester.image===null)?profil:Request.requester.image} />
           <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
               <div class="d-flex justify-content-between align-items-center w-100">
                   
               <strong class="text-gray-dark" >
                   <u><Link to={"/users/"+Request.requester.id}>
                                    {Request.requester.firstName}  
                           </Link> </u>  
                   <strong className="helpType" >{Request.helpType}</strong>
                </strong>
                <div className=" text-info">
                {Request.status}  to ... <Link to={"/users/"+Request.helper.id}>
                  
                                    {Request.helper.firstName}  
                           </Link> 
                                   
                                      
                                     
                               </div>
               
               </div>
               
               <span class="d-block">{Request.description}</span>
               
              <div className="info">
               <div>Date : {Request.createDate} | Duedate : {Request.dueDate} | Location : {Request.location}  </div>
               </div>
               
           </div>
           </div>

        

            
        </div>
    );
}

export default MyRequestForNotificationCard;