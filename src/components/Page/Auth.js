import React from "react";

import Title from "../Title";

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
                <Title />
                <button onClick={this.redirect}>
                    Sign in with Spotify
                </button>
            </div>
        );
    }
}

export default Auth;