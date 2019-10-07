import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'semantic-ui-react';
import PopupWindow from './PopupWindow';


class SpotifyLogin extends Component {

    
    onBtnClick = () => {

        axios.get('http://localhost:8012/login')
        .then((data)=>{
            const url = data.data.url;
            const popup = this.popup = PopupWindow.open(
                'spotify-authorization',
                url,
                { height: 1000, width: 600 }
            );
            popup.then(
                data => this.onSuccess(data),
                error => this.onFailure(error)
            );
        })
        .catch(err=>console.log(err))
        
      }

      onSuccess = (data) => {
        
          if (!data.access_token||!data.refresh_token ) {
                return this.onFailure(new Error('\'Token\' not found'));
              }
        this.props.onSuccess(data);
      }
    
      onFailure = (error) => {
        this.props.onFailure(error);
      }

    render() {
        return (
            <Button inverted size="huge"  onClick={this.onBtnClick}> Login Using Spotify </Button>
        )
    }
}

export default SpotifyLogin;