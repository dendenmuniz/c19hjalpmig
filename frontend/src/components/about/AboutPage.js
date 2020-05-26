import React, { Component } from "react";

import "./about.css";


class AboutPage extends Component {
    render() {
        return (
            <div class="container aboutback">
                <div class="cardabout">
                    <div class="boxaubout"></div>
                    <div class="contentabout">
                        <h2 class="card-titel text-gray-dark text-capitalize text-info">About us</h2>
                        <p class="about">C19 Hjälp mig is an application to help us pass through this pandemic situation in a better way.
                                    During this time that we need social distancing and avoid go out, specially people more vulnerable - group risk. <br />
                            With this in mind, we create this website where people who need help can connect to people who can help. </p>
                        <p class="about">A person can help a neighbor or someone else doing groceries, going to the pharmacy, collect a pack in the post/box, or even take a pet to go for a walk. </p>
                        <p class="about">   Our intention is to connect people, further our values in society, and help go out this situation better then we got in.</p>

                        <br />
                        <h2 class="card-titel text-gray-dark text-capitalize text-info">Our Mission</h2>
                        <p class="about">Generate a greater sense of community, allowing people to be kind and support each other at a time when cooperation is so necessary, but also to allow those in need to remain in a shelter to be safe.</p>
                        <br />
                        <br />
                        <h2 class="card-titel text-gray-dark text-capitalize text-info">Our Values</h2>
                        <h5 class="text-light">Support</h5>
                        <p class="about">“Sometimes the only thing you could do for people was to be there.” – Terry Pratchett</p>
                        <h5 class="text-light">Community</h5>
                        <p class="about">"We cannot live only for ourselves. A thousand fibers connect us with our fellow men." – Herman Melville</p>
                        <h5 class="text-light">Cooperation</h5>
                        <p class="about">United we stand.</p>
                        <h5 class="text-light">Kindness</h5>
                        <p class="about"> “Sometimes it takes only one act of kindness and caring to change a person’s life.” – Jackie Chan</p>
                        <h5 class="text-light">Shelter</h5>
                        <p class="about">“Everyone is in need of shelter from the storm, be the shelter, be kind.” – Luffina Lourduraj</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;