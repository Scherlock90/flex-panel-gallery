import React from 'react';

const ImageThumb = props => (
    <div className="cardImage">
        <div className="box">
            <img
                src={require('../assets/' + props.img)}
                alt={props.name}
                onClick={props.onActivePhoto}
            />
        </div>
        <div className="thumbTitle">
            {props.name}
        </div>
    </div>
);
export default ImageThumb;