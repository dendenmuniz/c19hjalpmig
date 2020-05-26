import React, { Component } from "react";
import HelpRequestApi from "../../api/HelpRequestApi";
import EditViewPanel from "../../components/viewpanel/EditViewPanel"

class ViewPanelPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            helpRequest : null,
            editPanel : false,
        };
    }

    updateRequest(helpRequest) {
        
        HelpRequestApi.updateRequest(helpRequest)
            .then((response)=> this.setState({helpRequest:response.data, editPanel: false}))
                .catch(err => console.error(err));

    }
 
    componentDidMount() {
        const id = Number(this.props.match.params.id);
            
        HelpRequestApi.getRequestById(id)
            .then(({data}) => this.setState({helpRequest: data}))
                .catch(err => console.error(err))
    
    }

    render() {
        const request = this.state.helpRequest;
    
        if(request==null)
        return <div>
            <h1>Loading...</h1>
        </div>
     
        return (
            <div className="container m-1 p-3 bg-white rounded " style={{ maxWidth:"none"}}>
                <EditViewPanel helpRequest={request} onSaveClick={(selectedRequest)=>this.updateRequest(selectedRequest) }/>
            </div>
        )
    }
}

export default ViewPanelPage;