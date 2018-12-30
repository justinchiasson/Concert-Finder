import React from "react";

import Title from "./components/Title";
import Filter from "./components/Filter";
import Result from "./components/Result";
import TopArtists from "./components/TopArtists"

let fakeServerData = {
  user: {
    name: 'Justin'
  },
  artists: [
    {
      name: 'artist 1',
      artist: 'me',
      date: 'tomorrow'
    },
    {
      name: 'artist 2',
      artist: 'someone',
      date: 'in three days'
    },
    {
      name: 'artist 3',
      artist: 'someone',
      date: 'in three days'
    }
  ],
  events: [
    {
      name: 'event one',
      artist: 'me',
      date: 'tomorrow'
    },
    {
      name: 'event two',
      artist: 'someone',
      date: 'in three days'
    },
    {
      name: 'event three',
      artist: 'someone',
      date: 'in three days'
    }
  ]
};

class App extends React.Component {
  state = {
    name: undefined,
    artists: undefined,
    events: [],
    isSearchDisabled: false
  }

  /*  Gets concerts from Ticketmaster API for each artist in state.artists based on city entered in Filter
  *   Sets events array in state to events retrieved from API
  *   210 ms delay between API requests to avoid exceeding rate limit (5 requests /sec)
  */
  getConcerts = async (e) => {
    e.preventDefault();

    // disable search bar to prevent doubling api requests (rate limited to 5/sec)
    this.setState({isSearchDisabled: true});

    // reset state of events
    this.setState({events: []});

    var that = this;
    const url = 'https://app.ticketmaster.com/discovery/v2/events?apikey=pf7MhdBGU66LlGwzxw6cXnzqyz8MpWj7';
    const city = e.target.elements.location.value;
    const radius = '100';

    var iterator = 0;
    var limiter = setInterval(getter, 210);
    function getter() {
      if (iterator >= that.state.artists.length) {
        clearInterval(limiter);
        that.setState({isSearchDisabled: false});
      } else {
        var new_url = url + '&keyword=' + that.state.artists[iterator].name + '&radius=' + radius + '&city=' + city;
        fetch(new_url)
        .then(response => response.json())
        .then(data => data._embedded && that.setState({events: that.state.events.concat(data._embedded.events)}));
        iterator++;
      }
    }
  }

  componentDidMount() {
    var spotifyToken = new URLSearchParams(window.location.search).get('access_token');
    console.log(spotifyToken);

    // fetch user's display name from Spotify /me endpoint
    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + spotifyToken}
    }).then(response => response.json())
    .then(data => this.setState({name: data.display_name}));

    // fetch user's top 20 artists from Spotify /top/artists endpoint
    fetch('https://api.spotify.com/v1/me/top/artists', {
      headers: {'Authorization': 'Bearer ' + spotifyToken}
    }).then(response => response.json())
    .then(data => this.setState({artists: data.items}));
    
  }

  render() {
    return (
      <div>
        <Title />
        <Filter 
          name={this.state.name}
          isSearchDisabled={this.state.isSearchDisabled}
          getConcerts={this.getConcerts}
        />
        <div style={{display:'flex', flexDirection:'row'}}>
        <Result 
          events={this.state.events && this.state.events}
        />
        <TopArtists 
          artists={this.state.artists && this.state.artists}
        />
        </div>
      </div>
    );
  }
}

export default App;