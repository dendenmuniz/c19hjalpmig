import React from "react";
import Swal from 'sweetalert2';

function HelpRequestForm({onSubmit}) {

    const [helpType, setHelpType] = React.useState("Select Categories" ? "" : helpType );
    const [location, setLocation]    = React.useState("");
    const [description, setDescription]   = React.useState("");
    const [dueDate, setDueDate] = React.useState("");  
    const [status, setStatus] = React.useState("Unassigned");
    const [locationError,setLocationError] = React.useState("");
    const [descriptionError,setDescriptionError] = React.useState("");
    const [duedateError,setDueDateError] = React.useState("");
    
    
    const handleSubmit = (event) => {
        
        if ((helpType === "") || (location === "") || (description === "") || (dueDate === "")){
            console.log(location);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fields should not be empty, please select categories or fill the details!',
            })
        }
        else if (locationError !== "" || duedateError!== "" ||  descriptionError !== ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Error',
            })
        }
        
        // Invoke the passed in event callback
        else{
            onSubmit ({helpType: helpType,
                location: location,
                description: description, 
                dueDate: dueDate, 
                status: status});
            Swal.fire(
                'success!',
                'Your request is created !!!'
            )
                // Clear the input field
                setHelpType("");
                setDescription ("");
                setDueDate ("");
                setLocation("");
                setStatus("");
        }  
        event.preventDefault();      
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
        validateLocation();
    }
         
    const validateLocation = () => {
        let patt = /^(?:[a-zA-Z\dåäöÅÄÖ-]+)(?:[A-Za-z0-9  ,]*)$/;
        if(!patt.test(location)){
            setLocationError('Invalid location')
            console.log(setLocationError);
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

    const handeleDueDateChange=(e)=>{
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

    return (
        <div className="container my-0 p-3 bg-white rounded " style={{padding: "10px"}}>
            <form >
                <div className="form-row">
                    <div className="form-group col-md-3">
                    <h5>Create Request for Help</h5>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label >Type of help</label>
                        <label className="text-danger">*</label>
                        <select id="inputHelpType" className="form-control" value = {helpType} onChange={e => setHelpType(e.target.value)} >
                            <option value="">Select Categories</option>
                            <option value="Groceries" >Groceries</option>
                            <option value="1Pharmacy" >Pharmacy</option>
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
                        <label className="text-danger">*</label>
                        <input type="text"  
                            className= {`form-control`}  
                            value={location} 
                            onChange={handleLocation} 
                            onBlur = {validateLocation} />
                        <div className="text-danger">{locationError}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-8" >
                        <label >Describe your need</label>
                        <label className="text-danger">*</label>
                        <textarea className={`form-control`}  id="description" rows="3"  
                            value={description} 
                            onChange={handleDescription}
                            onBlur={validateDescription}></textarea>
                        <div className="text-danger">{descriptionError}</div>
                        <small id="HelpBlock" className="form-text text-muted">
                            Descripton must be 10-300 characters long.
                        </small>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label >Due Date(yyyy-mm-dd)</label>
                        <label className="text-danger">*</label>
                        <input type="text" className={`form-control`}  id="dueDate"  
                            value={dueDate} 
                            onChange={handeleDueDateChange} 
                            onBlur={validateDueDate} />
                        <div className="text-danger">{duedateError}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <small id="fieldHelpBlock" className="form-text text-muted" style={{color: "white"}}>
                            Fields marked with <label className="text-danger">  *  </label> must be filled.
                        </small>
                    </div>
                </div>
                <button type="submit" value="Submit" className="btn btn-info" onClick={handleSubmit}>Post</button>
            </form>
        </div>

    );
}
                                
                                
export default HelpRequestForm;