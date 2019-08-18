import React from 'react';
import Button from '@material-ui/core/Button';

export default function ModalElements({ ...props }) {
  return (
    <>
      <div className="containerModal">
        <div className="containerMyModal" >
          <div className="cardImage">
            <div className="box">
              <img 
                style={props.makeGrey} 
                className="imgModal" 
                src={props.pic} 
              />
              <div className={props.isActive ? 'toggleMain--active' : 'toggleMain'} >
                <button 
                  className="placeToggle"
                  onClick={props.handleDetails}
                >
                   +
                </button>
              </div>
              <div className={props.isActive ? 'details--active' : 'details'} >{props.txtAbout}</div>
            </div>
          </div>
          <div className="littleContainerName">
            <div className="nameModalImage">
              {props.name}
            </div>
          </div>
        </div>
      </div>
      <div style={props.buttonStyle}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={props.setGrayscale} 
        >
          Grayscale
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={props.setNormal} 
        >
          Normal
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={props.closeModal} 
        >
          Close Modal
        </Button>
      </div>
    </>
  )
}