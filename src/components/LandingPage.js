import React from 'react';
import '../stylesheets/LandingPage.scss';
import LandingPageBody from './LandingPageBody';
import AllPageFooter from './AllPageFooter';


class LandingPage extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
          return (
              <div id="landingPage" className="landingPage">
                  <LandingPageBody></LandingPageBody>
                  <AllPageFooter></AllPageFooter>
              </div>
          );
    }
  }


export default LandingPage;