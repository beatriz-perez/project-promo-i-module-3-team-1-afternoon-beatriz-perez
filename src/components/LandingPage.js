import React from 'react';

import LandingPageBody from './LandingPageBody';
import Footer from './Footer';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="landingPage" className="landingPage">
        <LandingPageBody/>
        <Footer/>
      </div>
    );
  }
}


export default LandingPage;