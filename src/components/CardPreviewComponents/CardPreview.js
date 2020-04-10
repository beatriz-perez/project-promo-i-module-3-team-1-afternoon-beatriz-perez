import React from 'react';

import PreviewResetButton from './PreviewResetButton.js';
import PreviewProfileInfo from './PreviewProfileInfo.js';
import PreviewAvatarBox from './PreviewAvatarBox.js';
import PreviewSocialButtonList from './PreviewSocialButtonList.js';

class CardPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="cardPreview" className="cardPreview grid-2">
        <div id="cardPreview__centeredBox" className="cardPreview__centeredBox" >
          <PreviewResetButton />
          <div id="card" className="card" >
            <PreviewProfileInfo/>
            <PreviewAvatarBox/>
            <PreviewSocialButtonList/>
          </div>
        </div>
      </div>
    );
  }
}

export default CardPreview;