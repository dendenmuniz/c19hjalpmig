import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo123.png";

import DropDownList from "../../components/layout/DropdownInNavBar";


function Navbar ({onLogout}){
    
    return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div >
            <a href="#"><img src={logo} style={{width: "70px", height: "70px"}} /></a>
            <a className="navbar-brand" href="#" style={{fontSize: "14px"}}>mig</a>
            </div>

                <div className="collapse navbar-collapse" id="navbarColor01"  >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link" >
                               Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/news" className="nav-link">
                                News
                            </Link>
                        </li>  
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">
                                Gallery
                            </Link>
                        </li> 
                        <li className="nav-item">
                            <Link to="/liveupdate" className="nav-link">
                                Live Update
                            </Link>
                        </li> 
                        <li className="nav-item">
                            <Link to="/faq" className="nav-link">
                                FAQ
                            </Link>
                        </li>   
                    </ul>
        
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                            <Link to="/loggedin" className="nav-link" >
                                <DropDownList />
                            </Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link" >
                                <input type="button" value='Logout'  class="btn btn-info btn-sm" onClick={onLogout}/>    
                            </Link> 
                        </li>
                        
                    </ul> 
                    
                </div>
        </nav>
    
    ); 

}
   
export default Navbar;