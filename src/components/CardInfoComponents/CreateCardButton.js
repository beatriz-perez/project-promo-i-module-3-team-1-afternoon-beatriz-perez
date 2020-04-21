import React from 'react';

class CreateCardButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.requiredArray = [];
    }

    handleClick() {
        this.props.task();
    }
    showAlert() {
        alert('Todos los campos de información deben estar completados antes de crear una tarjeta');
    }

    render() {
        this.requiredArray = [
            this.props.info.name,
            this.props.info.job,
            this.props.info.image,
            this.props.info.email,
            this.props.info.phone,
            this.props.info.linkedin,
            this.props.info.github,
        ]
        return (
            <button 
            id="createCardButton" 
            type="button" 
            className={`createCardButton createCardButton__${this.requiredArray.indexOf('') === -1 ? 'on' : 'off'}`}
            onClick={this.requiredArray.indexOf('') === -1 ? this.handleClick : this.showAlert}
          >
            <i className="icon far fa-address-card"></i>
            Crear tarjeta
          </button>
        );
    }
}

export default CreateCardButton;