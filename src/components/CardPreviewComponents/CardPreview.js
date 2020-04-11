import React from 'react';

import PreviewResetButton from './PreviewResetButton.js';
import PreviewProfileInfo from './PreviewProfileInfo.js';
import PreviewAvatarBox from './PreviewAvatarBox.js';
import PreviewSocialButtonList from './PreviewSocialButtonList.js';

class CardPreview extends React.Component {

  render() {
    return (
      <div id="cardPreview" className="cardPreview grid-2">
        <div id="cardPreview__centeredBox" className="cardPreview__centeredBox" >
          <PreviewResetButton action={this.props.resetFunction}/>
          <div id="card" className="card" >
            <PreviewProfileInfo 
              name={this.props.info.name} 
              job={this.props.info.job} 
              style={this.props.info.palette}/>
            <PreviewAvatarBox fileInfo={this.props.info.image}/>
            <PreviewSocialButtonList 
              email={this.props.info.email} 
              phone={this.props.info.phone}
              linkedinuser={this.props.info.linkedin}
              githubuser={this.props.info.github}
              style={this.props.info.palette}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardPreview;