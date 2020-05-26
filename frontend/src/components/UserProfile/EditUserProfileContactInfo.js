import React from 'react';
import './UserPage.css';
import Swal from 'sweetalert2';

function EditUserProfileContactInfo({user,onSaveClick}) {
    const [email, setEmail] = React.useState(user.email);
    const [phoneNo, setPhoneNo] = React.useState(user.phoneNo);
    const [address, setAddress] = React.useState(user.address);
    const [city, setCity] = React.useState(user.city);
    const [postCode, setPostCode] = React.useState(user.postCode);
    const [municipality, setMunicipality] = React.useState(user.municipality);
    const [edit, save] = React.useState("Edit");
    const [addressError, setAddressError] = React.useState("");
    const [cityError, setCityError] = React.useState("");
    const [postCodeError, setPostCodeError] = React.useState("");
    const [municipalityError, setMunicipalityError] = React.useState("");
    const [phoneNoError, setPhoneNoError] = React.useState("");

    const handeleAddressChange=(e)=>{

       setAddress(e.target.value);
            validateAddress();
        
    }


    const validateAddress=()=>{
        let patt= /^([a-zA-ZöäåÖÅÄ]+(([.] )|( )|([-])))+[1-9][0-9]{0,2}[a-z]?$/;
        if(!patt.test(address)){
        setAddressError('Invalid address')
        }
        else
        setAddressError('');
        
  }



    const handelePhoneNoChange=(e)=>{
        setPhoneNo(e.target.value);
            validatePhoneNo();

    }


    const validatePhoneNo=()=>{
        let patt= /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if(!patt.test(phoneNo)){
        setPhoneNoError('Invalid PHone No.')
        }
        else
        setPhoneNoError('');

        
  }

    const handeleCityChange=(e)=>{
        setCity(e.target.value);
        validateCity();

    }

    const validateCity=()=>{
        let patt= /^[a-zA-ZÅÖÄåöä\s-]{1,15}$/;
        if(!patt.test(city)){
        setCityError('Invalid city')
        }
        else
        setCityError('');
        
  }

    const handeleZipChange=(e)=>{
        setPostCode(e.target.value);
        validateZip();

    }

    const validateZip=()=>{
        let patt= /^(?!0{3})\d{5}(?:-?\d{4})?$/;
        if(!patt.test(postCode)){
        setPostCodeError('Invalid PostCode')
        }
        else
        setPostCodeError('');
        
  }

    const handeleMunicipalityChange=(e)=>{
        setMunicipality(e.target.value);
        validateMunicipality();

    }

    const validateMunicipality=()=>{
        let patt= /^[a-zA-ZÅÖÄåöä\s-]{1,15}$/;
        if(!patt.test(municipality)){
        setMunicipalityError('Invalid Municipality')
        }
        else
        setMunicipalityError('');
        
  }

    const handeleEmailChange=(e)=>{

    }







    const handleClick =(e)=>{
        if(addressError==='' && cityError===''
        && municipalityError==='' && phoneNoError===''
        && postCodeError===''){
        const newUser = {...user, email, phoneNo, address,postCode,municipality,city} ;
        onSaveClick(newUser);
        Swal.fire(
            'success!',
            'Save the changes',
            
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
        <div className="card shadow-lg text-white bg-info mb-3">

            <div className="card-body text-secondary bg-light hight" style={{height:"450px"}}>
                  <h4 className="card-title" >Contact Info</h4>
                  <div className="form-group">

                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="address">Address</label>
                            <input 
                            className={`form-control ${setAddressError ? 'is-invalid' : ''}`}
                            value={address}
                            
                            onChange={handeleAddressChange}
                            onBlur={validateAddress}
                            />
                            <div className='invalid-feedback'>{addressError}</div>
                        </div>
                        <div className="col">
                            <label htmlFor="City">City</label>
                            <input 
                            className={`form-control ${setCityError ? 'is-invalid' : ''}`}
                            value={city}
                            
                            onChange={handeleCityChange}
                            onBlur={validateCity}
                            />
                            <div className='invalid-feedback'>{cityError}</div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="Zip">Zip</label>
                            
                            <input 
                            className={`form-control ${setPostCodeError ? 'is-invalid' : ''}`}
                            value={postCode}
                            
                            onChange={handeleZipChange}
                            onBlur={validateZip}
                            />
                            <div className='invalid-feedback'>{postCodeError}</div>
                        </div>
                        <div className="col">
                            <label htmlFor="municipality">Neighborhood</label>
                            <input
                            className={`form-control ${setMunicipalityError ? 'is-invalid' : ''}`}
                            value={municipality}
                            
                            onChange={handeleMunicipalityChange}
                            onBlur={validateMunicipality}
                            />
                            <div className='invalid-feedback'>{municipalityError}</div>
                        </div>
                    </div>
                       <label htmlFor="phoneNo">PhoneNo:</label>
                           <input 
                           className={`form-control ${setPhoneNoError ? 'is-invalid' : ''}`}
                           value={phoneNo}
                           
                           onChange={handelePhoneNoChange}
                           onBlur={validatePhoneNo}
                           />
                           <div className='invalid-feedback'>{phoneNoError}</div>

                        <label htmlFor="email">Email</label>
                        <input 
                            className="form-control"
                            value={email}
                             />
                        
                            
                  </div>
                <button className="btn btn-outline-info" onClick={handleClick}>Save</button>   
            </div>

        </div>
        
        );
}

export default EditUserProfileContactInfo;