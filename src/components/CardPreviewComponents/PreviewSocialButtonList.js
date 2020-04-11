import React from 'react';

import SocialButton from './SocialButton.js';

class PreviewSocialButtonList extends React.Component {

  render() {
    return (
      <ul id="PreviewSocialButtonList" className="card__socialbuttons--list">
        <SocialButton
          visible={this.props.email.length !== 0 ? "" : "hidden"}
          name="email address"
          destination={`mailto:${this.props.email}`}
          iconType="far fa-envelope"
          style={this.props.style}
        />
        <SocialButton
          visible={this.props.phone.length !== 0 ? "" : "hidden"}
          name="phone number"
          destination={`tel:${this.props.phone}`}
          iconType="fas fa-mobile-alt"
          style={this.props.style}
        />
        <SocialButton
          visible={this.props.linkedinuser.length !== 0 ? "" : "hidden"}
          name="linkedin profile"
          destination={`https://www.linkedin.com/in/${this.props.linkedinuser}`}
          iconType="fab fa-linkedin-in"
          style={this.props.style}
        />
        <SocialButton 
          visible={this.props.githubuser.length !== 0 ? "" : "hidden"}
          name="github profile" 
          destination={`https://www.github.com/${this.props.githubuser}`} 
          iconType="fab fa-github-alt" 
          style={this.props.style}
        />
      </ul>
    );
  }
}

PreviewSocialButtonList.defaultProps = {
  email: '',
  phone: '',
  linkedinuser: '',
  githubuser: ''
}


export default PreviewSocialButtonList;