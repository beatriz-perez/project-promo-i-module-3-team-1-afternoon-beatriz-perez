import React from 'react';

import Header from './Header';
import ProfilePageBody from './ProfilePageBody';
import Footer from './Footer';


class ProfilePage extends React.Component {

  render() {
          return (
              <div id="profilePage" className="profilePage">
                  <Header/>
                  <ProfilePageBody/>
                  <Footer/>
              </div>
          );
    }
}


export default ProfilePage;