import React , {Component} from 'react';
import SpotifyLogin from './SpotifyLogin';
import { Segment } from 'semantic-ui-react';


export default class Login extends Component {

     onSuccess = (response) => {
        const access_token = response.access_token;
        const refresh_token = response.refresh_token;
        localStorage.setItem('access_token',access_token);
        localStorage.setItem('refresh_token',refresh_token);
        this.props.history.push('/');
    };
     
    onFailure = err => console.log(err);
    
    render(){
        return (
                <SpotifyLogin 
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}/>
        )
    }
}
   

