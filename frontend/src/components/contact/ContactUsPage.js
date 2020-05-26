import React from "react";
import ContactUsApi from "../../api/ContactUsApi";
import ContactUsForm from "./ContactUsForm";
import contactImg from "../../images/contact_us.jpg";

class ContactUsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactus : [] ,
            user : [],
        };
    }

    async createRequest(contactUsData) {
        try {
            const response = await ContactUsApi.createRequest(contactUsData)
            const contactus = response.data;
            const newContactUs = this.state.contactus.concat(contactus);

            this.setState({
                contactus: newContactUs,
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
                <ContactUsForm onSubmit={(contactus) => this.createRequest(contactus)} />
            </div>
        )
    }
}

export default ContactUsPage;
