import React, { Component } from 'react';
import UserApi from './../../api/UserApi';
import ShowMyCard from './ShowMyCard';


class ShowUserPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            editContact:false,
            editAbout:false
        };

    }

    

    componentDidMount() {

        console.log(this.props);
        const one=this.props.match.params.id;
        
        UserApi.getUserById(one)
        .then((response)=> this.setState({user:response.data}))
        .catch(err => console.error(err));
        UserApi.getUserById(one)
        .then((response)=> console.log(response));

    }

    

    

    render() {

        if(this.state.user==null)
        return <div>
            <h1>Loading...</h1>
        </div>

        const user=this.state.user
        
        return (
            <div>
                
                <ShowMyCard user={user}/>

            </div>
        );
    }

}


export default ShowUserPage;