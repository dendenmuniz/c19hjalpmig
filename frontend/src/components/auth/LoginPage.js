import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn : false,
            isRegister :false,
        };
    }

    async login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
        else{
            window.location.href= "/LandingPage"; 
        }
    }

    async register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
        else{
            window.location.href= "/users/me";
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 " >
                            <h1>C-19 Hjalp Mig</h1>
                            <p>Starter template</p>
                            
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12  strong-shadow">
                                    <LoginForm onSubmit={this.login} />
                                </div>

                                <div className="col-12 mt-4">
                                    <RegisterForm onSubmit={this.register}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;