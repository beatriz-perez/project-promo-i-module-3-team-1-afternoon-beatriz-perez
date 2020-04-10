import React from 'react';

import CollapsableItem from '../collapsables/CollapsableItem';
import Design from '../collapsables/Design';
import Share from '../collapsables/Share.js';
import Fill from '../collapsables/Fill';

class FormList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="grid-1">
        <ul id="formList" className="formList">
          <CollapsableItem collapsableTitle='Diseña'
                            handleCollapse={this.props.handleCollapse}
                            id = 'collapse-1'
                            activePanel = {this.props.activePanel}
          >
            {/* <h2 className="form__title"><i className="form__icon far fa-object-ungroup"></i>Diseña</h2> */}
            <Design />
          </CollapsableItem>
        
          <CollapsableItem collapsableTitle='Rellena'
                            handleCollapse={this.props.handleCollapse}
                            id = 'collapse-2'
                            activePanel = {this.props.activePanel}
          >
            {/* <h2 className="form__title"><i className="form__icon far fa-keyboard"></i>Rellena</h2> <button className="form__arrow--fill" aria-label="Desplegar"><i className="fas fa-chevron-down"></i></button> */}
            <Fill />
          </CollapsableItem>

        <CollapsableItem collapsableTitle='Comparte'
                          handleCollapse={this.props.handleCollapse}
                          id = 'collapse-3'
                          activePanel = {this.props.activePanel}
        >
            {/* <h2 className="form__title"><i className="form__icon fas fa-share-alt"></i>Comparte</h2> <button className="form__arrow--fill" aria-label="Desplegar"><i className="fas fa-chevron-down"></i></button> */}
            <Share/> 
        </CollapsableItem>

        </ul>
      </div>
    );
  }
}

export default FormList;