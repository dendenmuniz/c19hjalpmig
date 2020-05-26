import React from "react";
import contactImg from "../../images/contact_us.jpg";

import "./contactus.css";

function ContactUsForm({ onSubmit }) {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = (event) => {
        // Invoke the passed in event callback
        onSubmit({
            firstName: firstName,
            lastName: lastName,
            email: email,
            subject: subject,
            message: message
        })

        alert("Your request is created !!!")
        // Clear the input field
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
        event.preventDefault();
    };

    return (
        <div className="container">
            <div className="contactback">
                <div className="cardcontact">
                    <div className="boxcontact"></div>
                    <div className="contentcontact">
                        <h2 class="card-titel text-gray-dark text-capitalize text-info">Get in touch with Us</h2>
                        <h4 className="text-white">We'd love to hear from you, Please drop us a line if you have any query!</h4>
                        <br />
                        <form className="form-group">
                            <div className="form-row">
                                <div className="form-group col">
                                    <label className="text-white">First Name</label>
                                    <input className="form-control" type="text" id="firstName" name="firstname" value={firstName}
                                        onChange={e => setFirstName(e.target.value)} placeholder="Your name" />
                                </div>
                                <div className="form-group col">
                                    <label className="text-white">Last Name</label>
                                    <input className="form-control" type="text" id="lastName" name="lastname" value={lastName}
                                        onChange={e => setLastName(e.target.value)} placeholder="Your last name" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col">
                                    <label className="text-white">Email</label>
                                    <input className="form-control" type="email" id="email" name="email" value={email}
                                        onChange={e => setEmail(e.target.value)} placeholder="Your email" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col">
                                    <label className="text-white">Subject</label>
                                    <input className="form-control" type="text" id="subject" className="subject" name="subject" value={subject}
                                        onChange={e => setSubject(e.target.value)} placeholder="Write Subject.."></input>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col">
                                    <label className="text-white">Message</label>
                                    <textarea className="form-control" id="message" className="msg" name="message" value={message}
                                        onChange={e => setMessage(e.target.value)} placeholder="Write something.."></textarea>
                                </div>
                            </div>

                            <button type="submit" value="Submit" className="btn btn-info btn-sm" onClick={handleSubmit}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsForm;