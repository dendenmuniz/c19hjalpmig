import React, { Component } from "react";
import corona2 from '../../images/corona2.png';
import helping from '../../images/helping.jpg';
import getinspired from '../../images/gethelp1.jpg';
import spread from '../../images/spread.jpg';
import stayhome from '../../images/kampanj-covid-19-eng-liggande.png';
import books from '../../images/christin-hume-k2Kcwkandwg-unsplash.jpg';
import publichealth from '../../images/folkhalsomyndigheten-share.png';
import food from '../../images/groceries2.jpeg';


import "./news.css";



class NewsPage extends Component {
    render() {
        return (
            <div class="ourteam" id="news">
                <center><h1 class=" text-gray-dark text-capitalize text-info" >Informations &amp; News</h1></center>
                <div class="ourteam_wrapper">
                    <div className="row p-1 m-3 ">
                        <div className="col-md-6 col-lg-3 my-1">
                            <div className="card" >
                                <img src={corona2} alt="aaa" className="card-img-top"  ></img>
                                <div className="card-body" >
                                    <p className="card-titel text-capitalize text-info">WHO - World Health Organization</p>
                                    <p className="card-text">Official informations and orientations.
                                </p>
                                    <p><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" class="text-muted alink">View more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 my-1">
                            <div className="card">
                                <img src={spread} alt="aaa" className="card-img-top" ></img>
                                <div className="card-body" style={{ height: "203px" }}>
                                    <p className="card-titel text-capitalize text-info">Johns HopKins Institute - Coronavirus Resource Center</p>
                                    <p className="card-text">Latest mapping of the pandemic.
                                </p>
                                    <p><a href="https://coronavirus.jhu.edu/map.html" class="text-muted alink">View more</a></p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 my-1">
                            <div className="card" >
                                <img src={publichealth} alt="aaa" className="card-img-top" style={{ height: "145px" }}></img>
                                <div className="card-body" >
                                    <p className="card-titel text-capitalize text-info">Covid-19 in Sweden - Statistics & reporting</p>
                                    <p className="card-text">The Public Health Authority is closely following the events.</p>
                                    <p><a href="https://www.1177.se/sjukdomar--besvar/lungor-och-luftvagar/inflammation-och-infektion-ilungor-och-luftror/covid-19-coronavirus/" class="text-muted alink">
                                        View more</a></p>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 my-1">
                            <div className="card" >
                                <img src={stayhome} alt="aaa" className="card-img-top" style={{ height: "145px" }}></img>
                                <div className="card-body" >
                                    <p className="card-titel text-capitalize text-info">Covid-19 - How we can help protect each other</p>
                                    <p className="card-text">The oficial advices from 1177 Vårdguiden.</p>
                                    <p><a href="https://www.1177.se/sjukdomar--besvar/lungor-och-luftvagar/inflammation-och-infektion-ilungor-och-luftror/covid-19-coronavirus/" class="text-muted alink">
                                        View more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-1 m-3 ">
                        <div className="col-md-6 col-lg-3 my-1">
                            <div className="card">
                                <img src={getinspired} alt="aaa" className="card-img-top" ></img>
                                <div className="card-body">
                                    <p className="card-titel text-capitalize text-info">How are people helping each other?</p>
                                    <p className="card-text">How are people dealing with the outbreak.</p>
                                    <p><a href="https://www.bbc.com/news/uk-england-51995089" class="text-muted alink">
                                        View more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 my-1">
                            <div className="card">
                                <img src={helping} alt="aaa" className="card-img-top" ></img>
                                <div className="card-body" >
                                    <p className="card-titel text-capitalize text-info">5 Reasons helping other people will help you</p>
                                    <p className="card-text">Help other will help you go through these time.</p>
                                    <p><a href="https://www.neighbourly.com/blog/5-reasons-helping-other-people-will-help-you/" class="text-muted alink">
                                        View more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 my-1">
                            <div className="card">
                                <img src={books} alt="aaa" className="card-img-top" style={{ height: "150px" }}></img>
                                <div className="card-body" >
                                    <p className="card-titel text-capitalize text-info">What to do during the social distancing?</p>
                                    <p className="card-text">Here 5 websites to read free ebooks and fill your day. </p>
                                    <p><a href="https://www.thehighereducationreview.com/news/5-websites-to-read-free-books-amid-quarantine-nid-1313.html" class="text-muted alink">
                                        View more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 my-1">
                            <div className="card">
                                <center><img src={food} alt="aaa" className="card-img-top" style={{ height: "145px" }} ></img></center>
                                <div className="card-body">
                                    <p className="card-titel text-capitalize text-info">Food and nutrition tips during self-quarantine</p>
                                    <p className="card-text">WHO/Europe has prepared a set of general tips.</p>
                                    <p><a href="http://www.euro.who.int/en/health-topics/health-emergencies/coronavirus-covid-19/technical-guidance/food-and-nutrition-tips-during-self-quarantine" class="text-muted alink">
                                        View more</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsPage;