import React from 'react';
import './UserPage.css';

function UserProfileAbout({user,onEditClick}) {

    const [firstName, setFirstName] = React.useState(user.firstName==null ? "":user.firstName);
    const [dateOfBirth, setDateOfBirth] = React.useState(user.dateOfBirth==null ? "":user.dateOfBirth);
    const [about, setAbout] = React.useState(user.about==null ? "":user.about);
    const [edit, save] = React.useState("Edit");


    

    return (
        <div className="card  shadow-lg text-white  mb-3 " >
            <div className="card-body text-secondary bg-light " style={{height:"450px"}}>
                <h4 className="card-title" >User Profile</h4>
                <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input 
                            className="form-control"
                            value={firstName}
                             />

                        <label htmlFor="dateOfBirth">Date Of Birth:</label>
                        <input 
                            className="form-control"
                            value={dateOfBirth}
                             />

                        <label htmlFor="about">Who am I:</label>
                        <textarea 
                            className="form-control"
                            value={about}
                             />
                    </div>
                

                    <button className="btn btn-outline-info" onClick={onEditClick}>Edit</button>
            </div>
        </div>
    );
}

export default UserProfileAbout;