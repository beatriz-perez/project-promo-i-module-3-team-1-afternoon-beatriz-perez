import React from 'react';

class PreviewProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="PreviewProfileInfo" className="card__profileInfo--box">
          <p id="PreviewProfileInfoName" className="card__profileInfo--name">
            {this.props.name.length > 0 ? this.props.name : "Nombre Apellido"}
          </p>
          <p id="PreviewProfileInfoJob" className="card__profileInfo--job">
            {this.props.job.length > 0 ? this.props.job : "Front-End developer"}
          </p>
      </div>
    );
  }
}

export default PreviewProfileInfo;