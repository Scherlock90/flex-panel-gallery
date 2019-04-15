import React from 'react';
import './Flex-gallery.css';
import sen from './Images/sen.jpg';
import puma from './Images/puma.jpg';

const imgStyle = {
  width: '280px',
  height: '400px'
}


export default function FlexPanelGallery () {
  return (
    <div className="container">
      <div className="box">
          <img style={imgStyle} src={sen} />
      </div>
      <div className="box">
          <img  style={imgStyle}src={puma} />
      </div>
      <div className="box">
          <img  style={imgStyle}src={sen} />
      </div>
      <div className="box">
          <img style={imgStyle} src={puma} />
      </div>
    </div>
  )
}