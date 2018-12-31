import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./components/Page/Home";
import Auth from "./components/Page/Auth";
import Error from "./components/Page/Error";

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Auth} exact />
          <Route path='/access_token=' component={Home} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;