import React from 'react';

function LiveUpdateCard({Data}) {
    let temp= localStorage.setItem("COVID_DATA", JSON.stringify(Data));
    let data= JSON.parse(localStorage.getItem("COVID_DATA"));
    /*let totalConfirm= localStorage.setItem(Data.Global.TotalConfirmed,"");
    let TotalDeaths=Data.Global.TotalDeaths;
    let totalRecovery=Data.Global.TotalRecovered;
    let a=localStorage.getItem(totalConfirm);
    let b=localStorage.getItem(TotalDeaths);
    let c=localStorage.getItem(totalRecovery);*/


    return (
        <div className="container m-0 p-0 ruby" style={{ color:"black",maxWidth:"none"}}>

<h1 className="card-titel text-gray-dark text-capitalize text-info"style={{textAlign:"center"}}>Latest Update</h1>
            <div className="row p-4">
           
                <div className="col-md-6 col-lg-4 my-1">
                    <div className="card shadow-lg bg-mute" style={{margin:"30px",height:"400px",textAlign:"center",paddingTop:"100px", color:"blue"}}>
                            <div className="card-body">
                                <h1 className="card-titel text-capitalize text-info">Total Confirmed</h1>
                                <h5 className="card-titel text-capitalize text-info">case</h5>

                                { Data!==null ?
                                <h1 className= "card-text">{data.Global.TotalConfirmed}</h1>
                               :null}
                            </div>    
                    </div>
                </div>

                    <div className="col-md-6 col-lg-4 my-1">
                    <div className="card shadow-lg bg-mute" style={{margin:"30px",height:"400px",textAlign:"center",paddingTop:"100px",color:"red"}}>
                            <div className="card-body">
                                <h1 className="card-titel text-capitalize text-info"> Total</h1>
                                <h1 className="card-titel text-capitalize text-info">  Deaths</h1>
                                <h5 className="card-titel text-capitalize text-info">case</h5>
                                { Data!==null ?
                                <h1 className= "card-text">{data.Global.TotalDeaths}</h1>
                               :null}
                            </div>    
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4 my-1">
                    <div className="card shadow-lg bg-mute" style={{margin:"30px",height:"400px",textAlign:"center",paddingTop:"100px",color:"green"}}>
                            <div className="card-body">
                                <h1 className="card-titel text-capitalize text-info">Total Recovered</h1>
                                <h5 className="card-titel text-capitalize text-info">case</h5>
                                { Data!==null ?
                                <h1 className= "card-text">{data.Global.TotalRecovered}</h1>
                               :null}
                            </div>    
                        </div>
                    </div>
                
                
                
            </div>
        </div>
    );
}

export default LiveUpdateCard;