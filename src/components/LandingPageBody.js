import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


import pageLogo from '../images/awesome_logo.svg';

class LandingPageBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="landingPageBody" className="landingPageBody">

        <div class="landingContent">
          <img
            class="awesome-image"
            src={pageLogo}
            alt="Awesome profile-cards"
            title="Awesome profile-cards"
          />
          <h1 class="title">Crea tu tarjeta de visita</h1>
          <p class="text">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <div class="icon-container">

            <div class="design-icon">
              <i class="far fa-object-ungroup"></i>
              <p class="icon1text">Diseña</p>
            </div>

            <div class="fill-icon">
              <i class="far fa-keyboard"></i>
              <p class="icon2text">Rellena</p>
            </div>

            <div class="share-icon">
              <i class="fas fa-share-alt"></i>
              <p class="icon3text">Comparte</p>
            </div>

          </div>
        </div>

        <Link className="button" to="/profile">Comenzar</Link>

      </div>
    );
  }
}

export default LandingPageBody;