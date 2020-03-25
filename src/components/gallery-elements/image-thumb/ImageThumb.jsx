import React from 'react';

export const ImageThumb = ({ img, name, onActivePhoto }) => (
    <div className="cardImage">
        <div className="box">
            <img
                src={require('../../../assets/images/' + img)}
                alt={name}
                onClick={onActivePhoto}
            />
        </div>
        <div className="thumbTitle">
            {name}
        </div>
    </div>
);
