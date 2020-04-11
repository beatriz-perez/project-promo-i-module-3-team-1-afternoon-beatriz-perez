import React from 'react';

class PreviewResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.props.action();
    }

    render() {
        return (
            <button className="previewResetButton" href="#" onClick={this.reset}>
                <i className="far fa-trash-alt"></i> reset
            </button>
        );
    }
}



export default PreviewResetButton;