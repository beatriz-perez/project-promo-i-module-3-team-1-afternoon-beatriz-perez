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
                    className={this.props.inputStyle}
                    id={this.props.name}
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.change}
                    value={this.props.value}
                />
                <div class={`thumbnail ${this.props.inputStyle === 'fileButton' ? "" : "hidden"}`}></div>
            </React.Fragment>
        );
    }
}

Input.defaultProps = {
    inputStyle: 'inputBox'
}

export default Input;