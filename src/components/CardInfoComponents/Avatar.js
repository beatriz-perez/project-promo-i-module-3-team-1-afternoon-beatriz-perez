import React from 'react';

class Avatar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={this.props.className}>
                <button className="photo__upload--btn js__photo--btn" id="submit">Añadir imagen</button>
                <div className="thumbnail js__photo--thumbnail"></div>
            </div>
        );
    }
}

export default Avatar;