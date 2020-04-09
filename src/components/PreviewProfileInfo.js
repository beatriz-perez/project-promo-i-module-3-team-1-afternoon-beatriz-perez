import React from 'react';

class PreviewProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div id="PreviewProfileInfo" className="card__profileInfo--box">
          <p id="PreviewProfileInfoName" className="card__profileInfo--name">{this.props.name}</p>
          <p id="PreviewProfileInfoJob" className="card__profileInfo--job">{this.props.name}</p>
      </div>
    );
  }
}

PreviewProfileInfo.defaultProps = {
  name: 'Nombre Apellido',
  job: 'Front-End Developer'
}

export default PreviewProfileInfo;