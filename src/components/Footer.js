import React from 'react';

import UnicornsLogo from '../images/logo-localUnicorns.png';
import AdalabLogo from '../images/logo-adalab.png';

class Footer extends React.Component {

  render() {
    return (
      <div id="footer" className="footer">

        <div className="footer-copyright">
          <img className="logo-unicorn" src={UnicornsLogo} alt="logo-reactUnicorns" />
          <p>reactUnicorns &copy; 2020</p>
        </div>

        <div className="footer-logo-container">
          <a 
            className="link" 
            href="https://adalab.es/" 
            target="_blank" 
            rel="noopener noreferrer"
            alt="go to adalab" 
            aria-label="go to adalab"
          >
            <img src={AdalabLogo} alt="logo-adalab" />
          </a>
        </div>

      </div>
    );
  }
}

export default Footer;