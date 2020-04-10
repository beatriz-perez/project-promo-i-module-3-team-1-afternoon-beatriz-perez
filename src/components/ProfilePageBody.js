import React from 'react';

import FormList from './CardInfoComponents/FormList';
import CardPreview from './CardPreviewComponents/CardPreview';

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="profilePageBody" className="profilePageBody">
        <CardPreview />
        <FormList />
      </div>
    );
  }
}

export default ProfilePageBody;