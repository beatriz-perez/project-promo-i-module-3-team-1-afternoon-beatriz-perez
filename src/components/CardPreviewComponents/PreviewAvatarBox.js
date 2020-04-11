import React from 'react';

import Avatar from '../../images/default-avatar.gif'

class PreviewAvatarBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div 
        id="previewAvatarBox" 
        className="card__avatar--box" 
        style={this.props.fileInfo.length !== 0 ? { backgroundImage: `url(${this.props.fileInfo})` } : { backgroundImage: Avatar }} 
      >
      </div>
    );
  }
}


export default PreviewAvatarBox;