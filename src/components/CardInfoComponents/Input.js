import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change(event) {
        this.props.inputTask(event.currentTarget.name, event.currentTarget.value);
    }    

    render() {
        return (
            <React.Fragment>
                <label className="inputLabel" htmlFor={this.props.name}>{this.props.label}</label>

                <input
                    className={`inputBox inputBox__${this.props.value !== "" ? 'right' : 'wrong'}`}
                    id={this.props.id || this.props.name} /*Nos interesará dar id especifico en radio inputs*/
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.change}
                    value={this.props.value}
                    checked={this.props.checked === true ? true : false}
                />
            </React.Fragment>
        );
    }
}

export default Input;