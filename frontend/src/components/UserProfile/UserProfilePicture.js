import React from 'react';
import "./UserPage.css";
import Swal from 'sweetalert2';
import profilePicture from "../../images/picon.png";

function UserProfilePicture({user,onSaveClick}) {
    const [firstName, setFirstName] = React.useState(user.firstName==null ? "":user.firstName);
    const [image, setImage] = React.useState(user.image==null ? profilePicture:user.image)
  const [loading, setLoading] = React.useState(false)
  const Swal = require('sweetalert2');
  const handleClick =(e)=>{
    const newUser = {...user, image} ;
    onSaveClick(newUser);
    Swal.fire(
        'success!',
        'Save the changes',
        
      )
  }
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'myProfilePic')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/datjh04zw/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }
    return (
        <div className="card shadow-lg text-white  mb-3">
        <div className="card-body text-secondary bg-light ">
        <div className="row m-1">
                    <div className="col-md-6">
                            <div className="mh-10 mw-20">
                            {loading ? (
                                <h5>Loading...</h5>
                                    ) : (
                            <img src={image} style={{height:"200px",width:"150px" }}
                            className="rounded-circle mx-auto my-auto border border-info "/>
                                        )} 

                            </div>
                    
                    </div>

                    <div className="col-md-6">
                        <h1>WelCome</h1>
                        <h1>{user.firstName}</h1>
                    
                    </div>
                 </div>  
            
                 <p>Change Profile Picture</p>
      <input
        
        type="file"
        name="file"
        
        onChange={uploadImage}
      />

    <button className="btn btn-outline-info" onClick={handleClick}>Save</button>  
            
        </div>
    </div>
    );
}

export default UserProfilePicture;