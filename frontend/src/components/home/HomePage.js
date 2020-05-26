import React, { Component } from "react";
import { Link } from "react-router-dom";
import homePageCard1 from './../../images/homePageCard1.jpeg';
import homePageCard2 from './../../images/homePageCard2.jpeg';
import homePageCard3 from './../../images/homePageCard3.jpeg';



import './home.css';

class HomePage extends Component {
    render() {
        return (
            
            <div className="container m-0 p-0 ruby" style={{ maxWidth:"none"}}>
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <div className="home-text">
                                <h1>Simple.Easy</h1>
                                <h1>For EveryOne</h1>
                                <p>Our website, C-19 Hjälp mig, exists to generate a 
                                    greater sense of community, allowing people to be kind and 
                                    support each other at a time when cooperation
                                    is so necessary, but also to allow those 
                                    in need to remain in a shelter to be safe. </p>
                                <p> We can't help everyone but everyone can help someone.</p>
                                {/* <button className="btn btn-outline-info text-uppercase" onClick={this.login}>signup here</button> */}
                                <Link to="/signup" className="btn btn-outline-info text-uppercase" >
                                    Signup here
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row p-1 m-3 ">
                    <div className="col-md-6 col-lg-4 my-1">
                        <div className="card mt-5">
                        <Link to="/signup">
                            <img src={homePageCard1} alt="aaa" className="card-img-top" />
                            </Link>
                            <div className="card-body">
                            <Link to="/signup"><h5 className="card-titel text-capitalize text-info">get help</h5></Link>
                                <p className= "card-text"> Feel free to get help from people welling to help you.</p>
                               {/* <a href="/help"><button className="btn btn-outline-info text-uppercase">Click here to request</button></a> */}
                               <Link to="/signup" className="btn btn-outline-info text-uppercase" >
                                    Click here to request
                                </Link>
                            </div>    
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 my-1">
                        <div className="card mt-5">
                        <Link to="/signup">
                            <img src={homePageCard2} alt="aaa" className="card-img-top" />
                            </Link>
                            <div className="card-body" style={{height: "175px"}}>
                            <Link to="/signup"><h5 className="card-titel text-capitalize text-info">help others</h5></Link>
                                <p className= "card-text">Be a volunteer to Help people who are in need of help. </p>
                                {/* <button className="btn btn-outline-info text-uppercase">Click Here to help</button> */}
                                <Link to="/signup" className="btn btn-outline-info text-uppercase" >
                                Click here to help
                                </Link>
                            </div>     
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 my-1">
                        <div className="card mt-5">
                            <Link onClick = {event =>  window.location.href="https://sharingsweden.se/toolkits/communication-and-content-during-the-covid-19-pandemic/"}>
                                <img src={homePageCard3} alt="aaa" className="card-img-top" />
                            </Link>
                            <div className="card-body">
                            <Link onClick = {event =>  window.location.href="https://sharingsweden.se/toolkits/communication-and-content-during-the-covid-19-pandemic/"}><h5 className="card-titel text-capitalize text-info">Covid 19</h5></Link>
                                <p className= "card-text">C-19 Hjälp mig will help during this pendemic in all possible way</p>
                                <button className="btn btn-outline-info text-uppercase" onClick = {event =>  window.location.href="https://sharingsweden.se/toolkits/communication-and-content-during-the-covid-19-pandemic/"}>view more</button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
           
        );
        
    }
}
export default HomePage;