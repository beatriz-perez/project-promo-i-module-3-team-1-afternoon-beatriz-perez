import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';

import ProfilePage from './ProfilePage';
import LandingPage from './LandingPage';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
