import React from 'react';
import Swal from 'sweetalert2';

function EditUserProfileAbout({user,onSaveClick}) {

    const [firstName, setFirstName] = React.useState(user.firstName);
    const [dateOfBirth, setDateOfBirth] = React.useState(user.dateOfBirth);
    const [about, setAbout] = React.useState(user.about);
    const [dateOfBirthError, setDateOfBirthError] = React.useState("");

    const handeleDateOfBirthChange=(e)=>{

       setDateOfBirth(e.target.value);
            validateDateOfBirth();
        
    }

    const validateDateOfBirth=()=>{
        let patt=/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
        if(!patt.test(dateOfBirth)){
        setDateOfBirthError('Invalid DOB')
        }
        else
        setDateOfBirthError('');
        
  }

    const handleClick =(e)=>{
      
        if (dateOfBirthError===''){
        const newUser = {...user, firstName,dateOfBirth,about} ;
        onSaveClick(newUser);
        Swal.fire(
            'success!',
            'Save the changes'
            )
        }

        else{

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Formate!',
                
              })
         
        
        }
    }


    

    return (
        <div className="card shadow-lg text-white bg- mb-3">
            <div className="card-body text-secondary bg-light " style={{height:"450px"}}>
               
                <h4 className="card-title" >User Profile</h4>
                <div className="form-group" >
                        <label htmlFor="name">Name:</label>
                        <input 
                            className="form-control"
                            value={firstName}
                             />

                        <label htmlFor="dateOfBirth">Date Of Birth(yyyy-mm-dd):</label>
                        <input 
                            className={`form-control ${setDateOfBirthError ? 'is-invalid' : ''}`}
                            value={dateOfBirth}
                            
                            onChange={handeleDateOfBirthChange}
                            onBlur={validateDateOfBirth}
                            />
                            <div className='invalid-feedback'>{dateOfBirthError}</div> />

                        <label htmlFor="about">Who am I:</label>
                        <textarea 
                            className="form-control"
                            value={about}
                            onChange={e => setAbout(e.target.value)} />
                            
                    
                    
                    </div>

                    <button type="submit" className="btn btn-outline-info" onClick={handleClick} >Save</button>
                
            </div>
            
        </div>
    );
}

export default EditUserProfileAbout;