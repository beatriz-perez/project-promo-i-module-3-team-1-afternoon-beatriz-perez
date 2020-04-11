import React from 'react';
import Avatar from '../../images/default-avatar.gif'

class InputFile extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.liftInfo = this.liftInfo.bind(this);
    }

    liftInfo(name, info) {
        this.props.inputTask(name, info);
    }

    change(event) {
        let myFile = event.currentTarget.files[0];
        const fr = new FileReader();
        fr.onloadend = () => {
            this.setState({
                pictureSrc: fr.result
            });
            this.liftInfo('image', fr.result);
        }
        fr.readAsDataURL(myFile);
    }

    render() {
        return (
            <React.Fragment>
                <label className="inputLabel" htmlFor={this.props.name}> {this.props.label} </label>
                <input
                    className="hidden"
                    id={this.props.name}
                    type='file'
                    name={this.props.name}
                    onChange={this.change}
                />
                <div className="fileControl">
                    <label className="fileButton" htmlFor={this.props.name}> {this.props.buttonText} </label>
                    <div 
                        style={this.props.fileInfo.length !== 0 ? { backgroundImage: `url(${this.props.fileInfo})` } : { backgroundImage: Avatar }} 
                        className="thumbnail"
                    ></div>
                </div>
            </React.Fragment>
        );
    }
}

export default InputFile;