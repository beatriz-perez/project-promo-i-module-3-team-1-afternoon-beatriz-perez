import React from 'react';
import { Link } from 'react-router-dom';


import pageLogo from '../images/awesome_logo.svg';

class LandingPageBody extends React.Component {

  render() {
    return (
      <div id="landingPageBody" className="landingPageBody">

        <div className="landingContent">
          <img
            className="awesome-image"
            src={pageLogo}
            alt="Awesome profile-cards"
            title="Awesome profile-cards"
          />
          <h1 className="title">Crea tu tarjeta de visita</h1>
          <p className="text">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <div className="icon-container">

            <div className="design-icon">
              <i className="far fa-object-ungroup"></i>
              <p className="icon1text">Diseña</p>
            </div>

            <div className="fill-icon">
              <i className="far fa-keyboard"></i>
              <p className="icon2text">Rellena</p>
            </div>

            <div className="share-icon">
              <i className="fas fa-share-alt"></i>
              <p className="icon3text">Comparte</p>
            </div>

          </div>
        </div>

        <Link className="button" to="/profile">Comenzar</Link>

      </div>
    );
  }
}

export default LandingPageBody;