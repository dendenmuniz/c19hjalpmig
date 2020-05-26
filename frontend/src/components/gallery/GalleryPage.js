import React, { Component } from "react";
import "./gallery.css";


class GalleryPage extends Component {
    render() {
        return (

            <div className="container m-10 p-0 ruby" style={{ maxWidth:"none", height:"590px"}}>
                <div className="row">
                    <div className="col">
                        <div className="bannergallery">
                            
                                <div className="boxgallery"></div>
                                <div className="contentgallery">
                                <h1 className=" text-white">Soon we will share with you how requesters and helpers felt with this initiative.</h1>
                               
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default GalleryPage;