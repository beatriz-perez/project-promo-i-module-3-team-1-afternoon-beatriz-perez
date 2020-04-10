import React from 'react';

import Header from './Header';
import ProfilePageBody from './profilePageComponents/ProfilePageBody';
import Footer from './Footer';


class ProfilePage extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
          return (
              <div id="profilePage" className="profilePage">
                  <Header/>
                  <ProfilePageBody></ProfilePageBody>
                  <Footer/>
              </div>
          );
    }
  }


export default ProfilePage;