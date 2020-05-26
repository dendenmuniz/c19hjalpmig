import React from 'react';
import './viewpanel.css';
import Swal from 'sweetalert2';

function EditViewPanel({helpRequest, onSaveClick}){
    
    const [helpType, setHelpType] = React.useState(helpRequest.helpType);
    const [location, setLocation] = React.useState(helpRequest.location);
    const [description, setDescription] = React.useState(helpRequest.description);
    const [dueDate, setDueDate] = React.useState(helpRequest.dueDate);  
    const [locationError, setLocationError] = React.useState("");
    const [descriptionError,setDescriptionError] = React.useState("");
    const [duedateError,setDueDateError] = React.useState("");
 
    const handleClick =(e)=>{

        const updatedHelpRequest = {...helpRequest, helpType, location, description, dueDate} ;
        console.log(updatedHelpRequest);
        if ((helpType === "") || (location === "") || (description === null) || (dueDate === null)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fields should not be empty, please fill the request!',
            })
        }
        else if (locationError !== "" || duedateError !== "" ||  descriptionError !== ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Error',
            })
        }
        else{
            onSaveClick(updatedHelpRequest);
            Swal.fire(
                'success!',
                'Help request is updated'
            )
        }
        e.preventDefault();
    }

    const handleGoBackButton = (e) => {
        window.location.href="/helprequest";
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
        validateLocation();
    }
     
    const validateLocation = () => {
        let patt= /^(?:[a-zA-Z\dåäöÅÄÖ-]+)(?:[A-Za-z0-9  ,]*)$/;
        if(!patt.test(location)){
            setLocationError('Invalid location')
        }
        else
            setLocationError('');
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
        validateDescription();
    }

    const validateDescription = () =>{
        let patt = /^[a-zA-Z0-9!@#\$%\^\&*\",\s\n?)\(+=._-]+$/;
        if(!patt.test(description)){
            setDescriptionError('Invalid Description')
        }
        else    
            setDescriptionError('');
    }

    const handeleDueDate=(e)=>{
        setDueDate(e.target.value);
        validateDueDate();
    }
 
     const validateDueDate=()=>{
         let patt=/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
         if(!patt.test(dueDate)){
         setDueDateError('Invalid Due-date')
         }
         else
         setDueDateError('');
         
   }


    return(
        <div className="container">
            
            <div className = "viewForm" style={{padding: "10px"}}>
            <h5>Help Request Updation</h5>
            
            <p className = "viewMsg"></p>
            <form >
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label >Type of help</label>
                        <select id="inputHelpType" className="form-control" value={helpType} onChange={e => setHelpType(e.target.value)} >
                            <option value="">Select Categories</option>
                            <option value="Groceries">Groceries</option>
                            <option value="1Pharmacy">Pharmacy</option>
                            <option value="Take a pet out" >Take a pet out</option>
                            <option value="Take recicle trash out">Take recicle trash out</option>
                            <option value="Pick up a post/box">Pick up a post/box</option>
                            <option value="Other" >Other</option>
                        </select>
                     </div>
                </div>      
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label >Location (Refence)</label>
                        <input type="text" className={`form-control`} id="location"  
                            value={location} 
                            onChange={handleLocation} 
                            onBlur={validateLocation}/>
                        <div className="text-danger">{locationError}</div>
                    </div>        
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8" >
                        <label >Describe your need</label>
                        <textarea className={`form-control`} id="description"  rows="3"  
                            value={description} 
                            onChange={handleDescription}
                            onBlur={validateDescription} ></textarea>
                        <div className="text-danger">{descriptionError}</div>
                        <small id="HelpBlock" className="form-text text-muted">
                            Descripton must be 10-300 characters long.
                        </small>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label >Due Date(yyyy-mm-dd)</label>
                        <input type="text" className={`form-control`}  id="dueDate"  
                            value={dueDate} 
                            onChange={handeleDueDate}
                            onBlur={validateDueDate}/>
                        <div className="text-danger">{duedateError}</div>
                    </div>
                </div>
                    
 
                <button type="submit" value="Submit" className="btn btn-info" onClick = {handleClick}>Save</button>
                <input type="button" value="Go Back" className="btn btn-secondary" style = {{margin:"15px"}} onClick = {handleGoBackButton} />
                    
            </form>
            </div>
        </div>
    );
}

export default EditViewPanel;