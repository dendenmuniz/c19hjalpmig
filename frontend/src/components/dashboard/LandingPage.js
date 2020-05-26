// COVIDIllustration

import React, { Component } from "react";
import { Link } from "react-router-dom";
import homePageCard1 from './../../images/homePageCard1.jpeg';
import homePageCard2 from './../../images/homePageCard2.jpeg';
import homePage from './../../images/COVIDIllustration.png';


import "./landingpage.css";


class LandingPage extends Component {
    render() {
        return (

            <div class="container m-10 p-0 ruby" style={{height: "620px"}} >
                <div id="carouselExampleCaptions" class="carousel slide h-100" data-ride="carousel" style={{height: "620px"}} >
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" style={{height: "620px"}}>
                        <div class="carousel-item active" style={{height: "620px"}}>
                        <div class="box" style={{width: "1140px"}}></div>
                            <img src={homePage} class="d-block w-100" alt="..." style={{height: "620px"}}/>
                            
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="planding text-white">Welcome!</h3>
                                <p class="planding text-white">"We cannot live only for ourselves. <br /> A thousand fibers connect us with our fellow men." – Herman Melville</p>
                            </div>
                        </div>
                        <div class="carousel-item" style={{height: "620px"}}>
                            <div class="box" style={{width: "1140px"}}></div>
                            <img src={homePageCard1} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <Link to="/help" class="text-white" >Request Help Here
                                </Link>
                               
                            </div>
                        </div>
                        <div class="carousel-item" style={{height: "620px"}}>
                        <div class="box" style={{width: "1140px"}}></div>
                            <img src={homePageCard2} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <Link to="/helprequest" class="text-white" >
                                    Click Here to Give Help
                                </Link>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>

        );

    }
}
export default LandingPage;