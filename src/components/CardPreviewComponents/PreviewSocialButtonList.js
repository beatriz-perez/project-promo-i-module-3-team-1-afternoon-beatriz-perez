import React from 'react';

import SocialButton from './SocialButton.js';

class PreviewSocialButtonList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul id="PreviewSocialButtonList" className="card__socialbuttons--list">
        <SocialButton
          style={this.props.email.length !== 0 ? "" : "hidden"}
          name="email address"
          destination={`mailto:${this.props.email}`}
          iconType="far fa-envelope"
        />
        <SocialButton
          style={this.props.phone.length !== 0 ? "" : "hidden"}
          name="phone number"
          destination={`tel:${this.props.phone}`}
          iconType="fas fa-mobile-alt"
        />
        <SocialButton
          style={this.props.linkedinuser.length !== 0 ? "" : "hidden"}
          name="linkedin profile"
          destination={`https://www.linkedin.com/in/${this.props.linkedinuser}`}
          iconType="fab fa-linkedin-in"
        />
        <SocialButton 
          style={this.props.githubuser.length !== 0 ? "" : "hidden"}
          name="github profile" 
          destination={`https://www.github.com/${this.props.githubuser}`} 
          iconType="fab fa-github-alt" 
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