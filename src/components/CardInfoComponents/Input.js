import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.stClassName = this.setClassName.bind(this);
    }

    setClassName(fieldName) {
        console.log(fieldName);
        if (fieldName === 'name'){
            return(this.props.value !== "" && this.props.value.length < 20 ? 'right' : 'wrong')
        } else if (fieldName === 'job'){
            return(this.props.value !== "" && this.props.value.length < 24 ? 'right' : 'wrong')
        } else if (fieldName === 'phone'){
            return(this.props.value !== "" && this.props.value.length < 10 ? 'right' : 'wrong')
        } else {
            return(this.props.value !== "" && this.props.value.length < 40 ? 'right' : 'wrong')
        }
    }

    change(event) {
        this.props.inputTask(event.currentTarget.name, event.currentTarget.value);
    }    

    render() {
        return (
            <React.Fragment>
                <label className="inputLabel" htmlFor={this.props.name}>{this.props.label}</label>

                <input
                    className={`inputBox inputBox__${this.setClassName(this.props.name)}`}
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