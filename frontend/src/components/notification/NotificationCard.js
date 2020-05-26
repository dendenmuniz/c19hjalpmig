import React from 'react';
import profil from "../../images/picon.png";
import { Link , Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";


function NotificationCard({currentChat}) {


    const chat = currentChat.chat
  const name = currentChat.sender.firstName;
  const date = currentChat.createDate;
  const senderImage = currentChat.sender.image;
  const id = currentChat.sender.id;
    return (
        <div className="between">
        <div class="media text-muted pt-3">
        <img class="bd-placeholder-img mr-2 rounded" width="40" height="40" src={(senderImage===null)? profil:senderImage} />
        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">

            <strong class="text-gray-dark" >
                <u><Link to={"/chat/"+id}>
                        {name}  
                    </Link> </u>  
                <strong className="helpType" >{date}</strong>
             </strong>
            </div>
            <span class="d-block">{chat}</span>
        </div>
        </div>
        </div>
    );
}

export default NotificationCard;