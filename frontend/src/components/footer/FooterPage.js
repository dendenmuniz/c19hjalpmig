import React, { Component } from "react";
import logo from "../../images/logo123.png";
import './footer.css';

class Footer extends Component {
    
    render() {
        return (

            <div className="navbar navbar-expand-lg navbar-light bg-light">

			<div className="footer-left">
          		<img src={logo} alt="..." style={{width: "30px", height: "30px"}}/>

				<p className="footer-company-name">© 2020 Hjälp Mig - All Rights Reserved.</p>
			</div>

			<div className="footer-center">
				<div style={{marginTop: "25px"}}>
					<center>
					<i className="fa fa-envelope"></i>
					<p className="footer-company-about"><a href="mailto:contact@hjalpmig.com?subject=Contact%20about%20Hjälp%20Mig">contact@hjalpmig.com</a></p>
					</center>
				</div>
			</div>
			<div className="footer-right">
				
				<div className="footer-icons">
					<a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
					<a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>
					<a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a>
					<a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube"></i></a>
				</div>
			</div>
		</div>
        );
    }
}

export default Footer;