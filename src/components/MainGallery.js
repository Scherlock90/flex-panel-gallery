import React from 'react';
import Button from '@material-ui/core/Button';

export default function MainGallery({...props}) {
    return (
        <>
            <div className="containerMain">
                <button 
                    className="buttonSlider bt-left" 
                    onClick={props.leftClick}
                ></button>
                <div 
                    className="container" 
                    style={props.makeGrey}
                >
                    {props.photoList}
                </div>
                <button 
                    className="buttonSlider bt-right" 
                    onClick={props.rightClick}
                ></button>
            </div>
            <div className="buttons-gallery">
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={props.setGrayscale} 
                >
                    Grayscale
                </Button>
                <Button 
                    variant="contained"
                    color="secondary" 
                    onClick={props.setNormal} 
                >
                    Normal
                </Button>
            </div>
        </>
    )
}