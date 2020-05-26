import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserApi from './../../api/UserApi';


class DropdownInNavBar extends Component{
    constructor(props) {
        super(props);

        this.state = {
            loading : true,
            user : null
        };
    }

    async componentDidMount() {

        const data =  UserApi.getMe()
        .then((response)=> this.setState({user:response.data}));
        this.setState({user: data, loading: false});
    }
    
    render(){
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        return (
           
            <div class="dropdown">
                <button type="button" class="btn btn-info btn-md " > Welcome, {this.state.user.firstName}!</button>
                <button type="button" class="btn btn-info btn-md dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <Link to="/users/me" className="dropdown-item" >
                             My Profile
                    </Link>
                    <div class="dropdown-divider"></div>
                   
                    <Link to="/help" className="dropdown-item" >
                         Request Help
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link to="/helprequest" className="dropdown-item" >
                         All Requests
                    </Link>
                    <div class="dropdown-divider"></div>

                    <Link to="/notification" className="dropdown-item" >
                         Notification
                    </Link>
                    <div class="dropdown-divider"></div>
                    

                    <Link to="/myrequest" className="dropdown-item" >
                         My Request
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link to="/mytask" className="dropdown-item" >
                         My Tasks
                    </Link>
                </div>
            </div>
            
        );
    }       
}

export default DropdownInNavBar;