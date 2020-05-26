import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo123.png";

class HomePageNavBar extends Component {
    render(){
        return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div >
                <a href="#"><img src={logo} style={{width: "70px", height: "70px", padding: "20px;"}} /></a>

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
                        
                    </ul>
        
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <Link to="/signup" className="nav-link" >
                                <input type="button" value='Login/Sign up' class="btn btn-info btn-sm" />
                            </Link> 
                        </li>
                        
                        
                    </ul> 
                    
                </div>
        </nav>
      
    ); 
    
    } 
    
}
   
export default HomePageNavBar;