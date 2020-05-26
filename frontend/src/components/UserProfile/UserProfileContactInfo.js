import React from 'react';
import './UserPage.css';

function UserProfileContactInfo({user,onEditClick}) {
    const [email, setEmail] = React.useState(user.email);
    const [phoneNo, setPhoneNo] = React.useState(user.phoneNo==null ? "":user.phoneNo);
    const [address, setAddress] = React.useState(user.address== null ? "": user.address);
    const [city, setCity] = React.useState(user.city==null ? "":user.city);
    const [postCode, setPostCode] = React.useState(user.postCode==null ? "":user.postCode);
    const [municipality, setMunicipality] = React.useState(user.municipality==null ? "":user.municipality);
    
    return (
        <div className="card shadow-lg text-white mb-3">

        <div className="card-body text-secondary bg-light " style={{height:"450px"}}>
              <h4 className="card-title" >Contact Info</h4>
              <div className="form-group">

                <div className="form-row">
                    <div className="col">
                        <label htmlFor="address">Address</label>
                        <input 
                        className="form-control"
                        value={address}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="City">City</label>
                        <input 
                        className="form-control"
                        value={city}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="col">
                        <label htmlFor="Zip">Zip</label>
                        
                        <input 
                        className="form-control"
                        
                        value={postCode}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="municipality">Neighborhood</label>
                        <input
                        className="form-control"
                        value={municipality}
                        />
                    </div>
                </div>
                   <label htmlFor="phoneNo">PhoneNo:</label>
                       <input 
                        className="form-control"
                        value={phoneNo}
                         />

                    <label htmlFor="email">Email</label>
                    <input 
                        className="form-control"
                        value={email}
                         />    
              </div>
            <button className="btn btn-outline-info" onClick={onEditClick}>Edit</button>   
        </div>

    </div>
    
    );
}

export default UserProfileContactInfo;