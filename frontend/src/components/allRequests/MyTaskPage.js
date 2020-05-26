import React, { Component } from 'react';
import MyTaskCard from './MyTaskCard';
import RequestApi from "../../api/HelpRequestApi";
import UserApi from "../../api/UserApi";
import AllRequestCard from "./AllRequestCard";
import MyRequestCard from "./MyrequestCard";
import   "./Request.css";

class MyTaskPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allRequests : [] ,
            user : null,
            email : '',
        };
    }


    assignHelper(helprequest) {

        RequestApi.assignHelper(helprequest)
                        .then((response)=> {
                            RequestApi.getAllRequests()
                            .then((response)=> this.setState({allRequests:response.data}))
                            .catch(err => console.error(err));
                            
                    })
                        .catch(err => console.error(err));

                        UserApi.getMe()
                        .then((response)=> console.log(response));
    }

   unAssignHelper(helprequest) {

        RequestApi.unAssignHelper(helprequest)
                        .then((response)=> {
                            RequestApi.getAllRequests()
                            .then((response)=> this.setState({allRequests:response.data}))
                            .catch(err => console.error(err));
                            
                    })
                        .catch(err => console.error(err));

                        UserApi.getMe()
                        .then((response)=> console.log(response));
    }

    


    componentDidMount() {
            RequestApi.getAllRequests()
                .then(({data}) => this.setState({allRequests: data}))
                .catch(err => console.error(err));
            
            UserApi.getMe()
                    .then((response)=> this.setState({user:response.data}))
        }

    render() {
        
        if(this.state.user==null)
        return <div>
            <h1>Loading...</h1>
        </div>

    const allRequests = this.state.allRequests;
    const user=this.state.user;

        return (
            <div>
                <main role="main" class="container hight">

<div class="my-3 p-3 bg-white rounded shadow-sm  ">
    <h6 class="border-bottom border-gray pb-2 mb-0">My Task</h6>
    
    {
    allRequests.map(Request =>
    <MyTaskCard key={Request.id} Request={Request} User={user} 
    onUnAssignClick={() => this.unAssignHelper(Request)}
    onAssignClick={(helprequest)=>this.assignHelper(helprequest)}/>
    )}

</div>


</main> 

                
           </div>
        )
        
    }
}

export default MyTaskPage;