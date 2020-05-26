import React, { Component } from 'react';
import UserApi from "./../../api/UserApi";
import ChatApi from "./../../api/ChatApi";
import NotificationCard from "./NotificationCard";
import   "./../allRequests/Request.css";
import "./../chat/chat.css";
import HelpRequestApi from '../../api/HelpRequestApi';
import MyRequestCard from '../allRequests/MyrequestCard';
import MyRequestForNotificationCard from "./MyRequestForNotificationCard";

class NotificationPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chat : [] ,
            allRequest : [],
            currentUser :null
        };
    }


    componentDidMount() {
       
       setInterval(
            () => {
            
                 ChatApi.getAllChat()
                    .then(({data}) => this.setState({chat: data}))
                    .catch(err => console.error(err));

                 UserApi.getMe()
                    .then((response) => this.setState({currentUser:response.data}))
                    .catch(err => console.error(err)); 
                
                    HelpRequestApi.getAllRequests()
                    .then(({data}) => this.setState({allRequest: data}))
                    .catch(err => console.error(err)); 

            }, 250);
       
    }


    render() {


        if(this.state.chat==null && this.state.currentUser==null )
        return <div>
            <h1>Loading...</h1>
        </div>
       const allChats =this.state.chat
       let chatList = [];
       chatList.slice(0, chatList.length);
       console.log(allChats);
       console.log(this.state.currentUser);
       console.log(this.state.allRequest);

      
        return (
            <div className="container m-0 p-0 ruby hight" style={{ color:"black",maxWidth:"none"}}>

                        <h1 className="pt-4" style={{textAlign:"center"}}>My notification</h1>
                <div className="row p-4">
                           
                    <div className="col-md-6 my-1 p-4">
                        <div className="card shadow-lg ">
                            <div className="card-titel pl-4 pt-2">My Messages</div>
                            <hr></hr>
                                <div className="card-body messageCard ">

                                    {
                                    this.state.chat.map(chat => { 
                                        if(this.state.currentUser.id === chat.receiver.id && !chatList.includes(chat.sender.id)) {
                                            chatList.push(chat.sender.id);
    
                                            return (<NotificationCard key = {chat.id} currentChat={chat} />)
                                        }
                                
                                        })
                                    
                                    }
                            
                                </div>
                        </div>
                </div>

                <div className="col-md-6 my-1 p-4">
                <div className="card shadow-lg">
                            <div className="card-titel pl-4 pt-2">My Assined Request </div>
                            <hr></hr>
                                <div className="card-body">
                            
                                        {
                                        this.state.allRequest.map(req => { 
                                            if(this.state.currentUser.id === req.requester.id && req.status==="Assigned"){
                                    
                                    
                                                return (<MyRequestForNotificationCard key = {req.id} Request={req} />)
                                            }
                                
                                            })
            
                                        }
                                    </div>
                                </div>
                            </div>

                </div>
                
            </div>
        );
    }
}

export default NotificationPage;