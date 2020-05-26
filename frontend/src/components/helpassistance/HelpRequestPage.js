import React from "react";
import HelpRequestApi from "../../api/HelpRequestApi";
import HelpRequestForm from "./HelpRequestForm";

class HelpRequestPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            helpRequests : [] ,
            user : [],
        };
    }

    async createHelpRequest(helpRequestData) {
        try {
            const response = await HelpRequestApi.createRequest(helpRequestData);
            const helpRequest = response.data;
            console.log(helpRequest);
            const newHelpRequest = this.state.helpRequests.concat(helpRequest);

            this.setState({
                helpRequests: newHelpRequest,
            });
            return true;
        } catch (e) {
            console.error(e);
            return e.response.data.errors;
        }
    }

    render() {
    
        return (
            <div>
                <HelpRequestForm onSubmit={(helpRequests) => this.createHelpRequest(helpRequests)} />
            </div>
        )
    }
}

export default HelpRequestPage;
