import React from "react";

import Title from "./components/Title";
import Filter from "./components/Filter";
import Result from "./components/Result";

let fakeServerData = {
  user: {
    name: 'Justin'
  },
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
    events: undefined
  }

  componentDidMount() {
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
        <Result 
          events={this.state.events && this.state.events}
        />
      </div>
    );
  }
}

export default App;