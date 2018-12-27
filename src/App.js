import React from "react";

import Title from "./components/Title";
import Filter from "./components/Filter";
import Result from "./components/Result";

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Filter />
        <Result />
      </div>
    );
  }
}

export default App;