import React from 'react';

class PreviewResetButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="previewResetButton" href="#">
                <i className="far fa-trash-alt"></i> reset
            </button>
        );
    }
}



export default PreviewResetButton;