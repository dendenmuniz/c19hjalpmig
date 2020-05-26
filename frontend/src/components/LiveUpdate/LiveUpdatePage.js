import React, { Component } from 'react';
import axios from 'axios';
import LiveUpdateCard from './LiveUpdateCard';

class LiveUpdatePage extends Component {
    constructor(props){
        super(props)

        this.state={
            item:null,
            isLoaded:false

        }
    }

componentDidMount(){
    axios.get("https://api.covid19api.com/summary")
        .then((response) => this.setState({item: response.data}))
        .catch(err => console.error(err));

        /*axios.get("https://api.covid19api.com/summary")
        .then((response) => console.log(response.data.Global.TotalConfirmed))
        .catch(err => console.error(err));*/



        

}

    render() {
       if(this.state.item==null)
        return <div>
            <h1>Loading...</h1>
        </div>
        const data=this.state.item;
        return (
            <div>
                <LiveUpdateCard Data={data}/>
            </div>
        );
    }
}

export default LiveUpdatePage;