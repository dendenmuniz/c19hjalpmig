import React, { Component } from 'react';
import UserApi from './../../api/UserApi';
import UserProfileAbout from './UserProfileAbout';
import UserProfileContactInfo from './UserProfileContactInfo';
import UserProfilePicture from './UserProfilePicture';
import EditUserProfileContactInfo from './EditUserProfileContactInfo';
import EditUserProfileAbout from './EditUserProfileAbout';

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            editContact:false,
            editAbout:false
        };
    }

    updateUser(user) {

        
        UserApi.updateUser(user)
                        .then((response)=> this.setState({user:response.data, editAbout:false,editContact:false}))
                        .catch(err => console.error(err));

    }
  

    componentDidMount() {

        UserApi.getMe()
        .then((response)=> this.setState({user:response.data}));
        
        

    }

    
    

    render() {
        //const user=this.props.user;
        if(this.state.user==null)
        return <div>
            <h1>Loading...</h1>
        </div>
       
        return (
           

            <div className="container m-0 p-0 " style={{ maxWidth:"none"}}>
                <div className="row p-1 m-0">
                    <div className="col my-1">

                    <UserProfilePicture user={this.state.user} onSaveClick={(user)=>this.updateUser(user)}/>
                    </div>
                 </div>  


                 <div className="row p-1 m-0 ">

                    <div className="col-md-6 my-1 ">
                    {(!this.state.editAbout) ? <UserProfileAbout user={this.state.user} onEditClick={()=>this.setState({editAbout:true})}/>
                        : <EditUserProfileAbout user={this.state.user} onSaveClick={(user)=>this.updateUser(user)}/>}
                    

                    
                    </div>
                    <div className="col my-1 ">
                        {(!this.state.editContact) ? <UserProfileContactInfo user={this.state.user} onEditClick={()=>this.setState({editContact:true})}/>
                        : <EditUserProfileContactInfo user={this.state.user} onSaveClick={(user)=>this.updateUser(user)}/>}
                    
                    
                        
                       
                   
                    </div>
                 </div>    
            </div>
            
            
        );
    }
}



export default UserPage;


