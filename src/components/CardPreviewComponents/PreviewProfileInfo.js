import React from 'react';

class PreviewProfileInfo extends React.Component {

  render() {
    return (
      <div id="previewProfileInfo" className={`previewProfileInfo previewProfileInfo__${this.props.style}`}>
          <p id="PreviewProfileInfoName" className={`infoName infoName__${this.props.style}`}>
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