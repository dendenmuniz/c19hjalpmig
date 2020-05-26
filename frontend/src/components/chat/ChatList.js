import React from "react";
import "./chat.css";
import profil from "../../images/picon.png";

import { Link , Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

function ChatList({contactChat,currentUserId}) {
 
    const chat = contactChat.chat
    const name = (contactChat.sender.id === currentUserId)?contactChat.receiver.firstName:contactChat.sender.firstName;
    const date = contactChat.createDate;
    const senderImage =(contactChat.sender.id === currentUserId)?contactChat.receiver.image:contactChat.sender.image;
    const id = contactChat.sender.id;
    const idUser = (contactChat.sender.id === currentUserId)?contactChat.receiver.id:contactChat.sender.id;
      return (
          <a href={"/chat/"+idUser}>
          <div className="between">
              <div class="media text-muted pt-3">
                  <img class="bd-placeholder-img mr-2 rounded" width="40" height="40" src={(senderImage===null)?profil:senderImage} />
                  <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                      <div class="d-flex justify-content-between align-items-center w-100">
  
                      <strong class="text-gray-dark" >
                              {name}  
                      </strong>
                      </div>
                      <span class="d-block">{date}</span>
                  </div>
              </div>
          </div>
          </a>
    );
}

export default ChatList;



                                