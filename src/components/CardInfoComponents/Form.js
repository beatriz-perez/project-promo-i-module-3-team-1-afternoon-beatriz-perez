import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.openForm = this.openForm.bind(this);
    }

    openForm(event) {
        this.props.buttonTask(event.currentTarget.id);
    }

    render() {
        return (
            <li id={this.props.name} className={`form form__${this.props.name}`}>

                <div className="formHeader">
                    <p className="formHeader__title">
                        <i className={`formHeader__icon ${this.props.icon}`}></i>
                        {this.props.name}
                    </p>
                    <button 
                        id={this.props.formNumber} 
                        className={`arrowButton ${this.props.open === this.props.formNumber ? "arrowButton__open" : ""}`} 
                        onClick={this.openForm} 
                        aria-label="Desplegar"
                    >
                        <i className="fas fa-chevron-down"></i>
                    </button>
                </div>

                <div className={`formContent ${this.props.open === this.props.formNumber ? "" : "hidden"}`}>
                
                    {this.props.children}
                </div> 

            </li>
        );
    }
}

export default Form;