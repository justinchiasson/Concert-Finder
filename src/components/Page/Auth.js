import React from "react";

import './Auth.css';

import Title from "../Title";

import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Backdrop from '@material-ui/core/Backdrop';

class Auth extends React.Component {

    redirect = (e) => {
        e.preventDefault();
        var client_id = '722a3a58876c439aa50b21d3f786221e'; // Your client id
        var redirect_uri = 'http://localhost:3000'; // Your redirect uri

        //var state = generateRandomString(16);

        //localStorage.setItem(stateKey, state);
        var scope = 'user-top-read';

        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        //url += '&state=' + encodeURIComponent(state);
        url += '&show_dialog=' + encodeURIComponent('true');
        console.log(url);
        window.location = url;
    }

    render() {
        return (
            <div>
                <img className="bg" src={require('../../assets/images/bg1.jpg')}></img>
                <Title />
                <div style={{ textAlign: 'center' }}>
                    <Fab size='large' variant='extended' onClick={this.redirect}>
                        Sign in with Spotify
                    </Fab>
                </div>
            </div>
        );
    }
}

export default Auth;