import React from 'react';

import CollapsableItem from '../collapsables/CollapsableItem';
import Design from '../collapsables/Design';
import Share from '../collapsables/Share.js';
import Fill from '../collapsables/Fill';

class FormList extends React.Component {

  constructor(props) {
    super(props);
    this.handleOpenForm = this.handleOpenForm.bind(this);
  }

  handleOpenForm() {

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
            <Design />
          </CollapsableItem>
        
          <CollapsableItem collapsableTitle='Rellena'
                            handleCollapse={this.props.handleCollapse}
                            id = 'collapse-2'
                            activePanel = {this.props.activePanel}
          >
            <Fill />
          </CollapsableItem>

        <CollapsableItem collapsableTitle='Comparte'
                          handleCollapse={this.props.handleCollapse}
                          id = 'collapse-3'
                          activePanel = {this.props.activePanel}
        >
            <Share/> 
        </CollapsableItem>

        </ul>
      </div>
    );
  }
}

export default FormList;