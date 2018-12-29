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
    events: undefined
  }

  componentDidMount() {
    var spotifyToken = new URLSearchParams(window.location.search).get('access_token');
    console.log(spotifyToken);

    fetch('https://api.spotify.com/v1/me/top/artists', {
      headers: {'Authorization': 'Bearer ' + spotifyToken}
    }).then(response => response.json())
    .then(data => this.setState({artists: data.items}));

    this.setState({
      name: fakeServerData.user.name,
      events: fakeServerData.events
    });
  }

  render() {
    return (
      <div>
        <Title />
        <Filter />
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