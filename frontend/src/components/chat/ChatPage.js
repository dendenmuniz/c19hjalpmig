import React, { Component } from "react";
import "./chat.css";
import ChatForm from "./ChatForm";
import ChatCard from "./ChatCard";
import UserApi from "../../api/UserApi";
import ChatApi from "../../api/ChatApi";
import ChatList from "./ChatList";

class ChatPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chat : [] ,
            user : [],
            currentUser :[],
        };
    }

    async createChat(chats,email) {
        try {
            const response = await ChatApi.createChat(chats,email);
            const chatMessage = response.data;
            const newChat = this.state.chat.concat(chatMessage);

            this.setState({
                chat: newChat,
            });
            return true;
        } catch (e) {
            console.error(e);
            return e.response.data.errors;
        }
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
       
        setInterval(
            () => {
                UserApi.getUserById(id)
                .then(({data}) => this.setState({user: data}))
                    .catch(err => console.error(err))
            
                 ChatApi.getAllChat()
                    .then(({data}) => {this.setState({chat: data});
                })
                    .catch(err => console.error(err)) 
                 UserApi.getMe()
                    .then(({data}) => this.setState({currentUser: data}))
                    .catch(err => console.error(err)) 

            }, 100);
       
    }
    
    render() {
        const userEmail = this.state.user.email;
        const userId = this.state.user.id;
        const currentUserId = this.state.currentUser.id;
        //counting the number of chat
        let contact = [];
               
        return (
            <div id ="chat">
                <div className="chatList">
                {
                    this.state.chat.map(chat => { 
                        const s = chat.sender.id;
                        const r = chat.receiver.id;
                        console.log(s)
                        console.log(r)
                          if(currentUserId === s || currentUserId === r ){
                                if(currentUserId === s){
                                    if(!contact.includes(r)){
                                            contact.push(r);
                                        return (<ChatList key = {chat.id} contactChat={chat} currentUserId={currentUserId} />)
                                    }
                                }else{
                                    if(!contact.includes(s)){
                                        contact.push(s);
                                        return (<ChatList key = {chat.id} contactChat={chat} currentUserId={currentUserId} />)
                                    }
                                }
                            } return null;
                          }
                    )
                }
                </div>
            
                <div className="chats">
                        <div className="chatTittle">
                            <div className="between">
                           Contact : <u> {this.state.user.firstName} </u>  
                            </div>
                        </div>
                        <div className="chatMessage">
            {
            this.state.chat.map(chat => { 
                if((chat.sender.id === currentUserId && chat.receiver.id === userId) ||
                  (chat.receiver.id === currentUserId && chat.sender.id === userId)){
                    return (<ChatCard key = {chat.id} currentChat={chat} currentUserId={currentUserId} />)
                 } return null;
                 })
            }
                        </div>
                        <div className="chatSend">            
                           <ChatForm  onSubmit={(chat) => this.createChat(chat,userEmail)}/>
                        </div>
                </div>
          
           </div>
        );
    }
}

export default ChatPage;