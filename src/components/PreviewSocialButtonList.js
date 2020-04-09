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
          name="email address"
          destination={`mailto:${this.props.email}`}
          iconType="far fa-envelope"
        />
        <SocialButton
          name="phone number"
          destination={`tel:${this.props.phone}`}
          iconType="fas fa-mobile-alt"
        />
        <SocialButton
          name="linkedin profile"
          destination={`https://www.linkedin.com/in/${this.props.linkedinuser}`}
          iconType="fab fa-linkedin-in"
        />
        <SocialButton 
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