import React from "react";
import RequestApi from "../../api/HelpRequestApi";
import UserApi from "../../api/UserApi";
import AllRequestCard from "./AllRequestCard";
import MyRequestCard from "./MyrequestCard";

class AllRequestPage extends React.Component {
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


    async deleteRequest(request) {
        try {
            await RequestApi.deleteRequest(request.id);
            const newRequests = this.state.allRequests.filter(r => r.id !== request.id);
            this.setState({
                allRequests: newRequests,
            });
        } catch (e) {
            console.error(e);
        }
    }


    componentDidMount() {

        setInterval(
            () => {
            RequestApi.getAllRequests()
                .then(({data}) => this.setState({allRequests: data}))
                .catch(err => console.error(err));
            
            UserApi.getMe()
                    .then((response)=> this.setState({user:response.data}))
                }, 100);
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

<div class="my-3 p-3 bg-white rounded shadow-sm">
    <h6 class="border-bottom border-gray pb-2 mb-0">My Request</h6>
    
    {
    allRequests.map(Request =>
    <MyRequestCard key={Request.id} Request={Request} User={user} onDeleteClick={() => this.deleteRequest(Request)}/>
    )}

</div>

<div class="my-3 p-3 bg-white rounded shadow-sm">
    <h6 class="border-bottom border-gray pb-2 mb-0">All Requests</h6>
    
    {
    allRequests.map(Request =>
    <AllRequestCard key={Request.id} Request={Request}  User={user} onDeleteClick={() => this.deleteRequest(Request)} 
    onAssignClick={(helprequest)=>this.assignHelper(helprequest)} onUnAssignClick={() => this.unAssignHelper(Request)}/>
    )}

</div>
</main> 

                
           </div>
        )
        
    }
}

export default AllRequestPage;