import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


import pageLogo from '../images/awesome_logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="header" className="header">
        <Link to="/">
          <img class="header-awesome-image" src={pageLogo} alt="Awesome profile-cards" title="Awesome profile-cards" />
        </Link>
      </div>
    );
  }
}

export default Header;