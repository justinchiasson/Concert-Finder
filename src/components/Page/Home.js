import React from "react";

import Title from "../Title";
import Filter from "../Filter";
import Result from "../Result";
import TopArtists from "../TopArtists"

class Home extends React.Component {
    state = {
        name: undefined,
        artists: undefined,
        events: [],
        isSearchDisabled: false,
        isFinished: true
    }

    /*  Gets concerts from Ticketmaster API for each artist in state.artists based on city entered in Filter
    *   Sets events array in state to events retrieved from API
    *   210 ms delay between API requests to avoid exceeding rate limit (5 requests /sec)
    */
    getConcerts = async (e) => {
        e.preventDefault();
        // check if search bar is empty, prevents spam of ticketmaster api
        if (e.target.elements.location.value) {

            // disable search bar to prevent doubling api requests (rate limited to 5/sec)
            this.setState({ isSearchDisabled: true });

            // reset state of events
            this.setState({ events: [] });

            // wait for all searches to complete
            this.setState({ isFinished: false });

            var that = this;
            const url = 'https://app.ticketmaster.com/discovery/v2/events?apikey=pf7MhdBGU66LlGwzxw6cXnzqyz8MpWj7';
            const city = e.target.elements.location.value;
            const radius = '100';

            var iterator = 0;
            var limiter = setInterval(getter, 250);
            function getter() {
                if (iterator >= that.state.artists.length) {
                    clearInterval(limiter);
                    that.setState({ isSearchDisabled: false });
                    that.setState({ isFinished: true });
                } else {
                    var new_url = url + '&keyword=' + that.state.artists[iterator].name + '&radius=' + radius + '&city=' + city;
                    fetch(new_url)
                        .then(response => response.json())
                        .then(data => data._embedded && that.setState({ events: that.state.events.concat(data._embedded.events) }));
                    iterator++;
                }
            }
        }
    }

    isAuthenticated = (hash) => {
        if (!hash) {
            return false;
        }
        var spotifyToken = hash.split('=')[1].split('&')[0];
        fetch('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + spotifyToken }
        }).then(function (response) {
            if (response.status === 401);
            return false;
        });
        return true;
    }

    logout = () => {
        this.props.history.push('/login');
    }

    componentDidMount() {
        var hash = window.location.hash;

        if (this.isAuthenticated(hash)) {
            var spotifyToken = hash.split('=')[1].split('&')[0];

            // fetch user's display name from Spotify /me endpoint
            fetch('https://api.spotify.com/v1/me', {
                headers: { 'Authorization': 'Bearer ' + spotifyToken }
            }).then(response => response.json())
                .then(data => this.setState({ name: data.display_name }));

            // fetch user's top 20 artists from Spotify /top/artists endpoint
            fetch('https://api.spotify.com/v1/me/top/artists', {
                headers: { 'Authorization': 'Bearer ' + spotifyToken }
            }).then(response => response.json())
                .then(data => this.setState({ artists: data.items }));
        } else {
            this.props.history.push('/login');
        }

    }

    render() {
        return (
            <div>
                <div style={{ padding:'1%'}}>
                <button onClick={this.logout}>
                    Log out of Spotify
                </button>
                </div>
                <Title />
                <Filter
                    name={this.state.name}
                    isSearchDisabled={this.state.isSearchDisabled}
                    getConcerts={this.getConcerts}
                />
                <div style={{ display: 'flex', flexDirection: 'row', height: '70vh' }}>
                    <Result
                        events={this.state.events && this.state.events}
                        isFinished={this.state.isFinished}
                    />
                    <TopArtists
                        artists={this.state.artists && this.state.artists}
                    />
                </div>
            </div>
        );
    }
}

export default Home;