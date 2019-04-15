import React from 'react';
import './Flex-gallery.css';
import branicki from './Images/branicki.jpg';
import roadTorun from './Images/roadTorun.jpg';
import sliwnoKladki from './Images/sliwnoKladki.jpg';
import sopotMolo from './Images/sopotMolo.jpg';

const imgStyle = {
  width: '280px',
  height: '400px'
}

const dataImage = [
  {
    img: 'branicki.jpg'
  },
  {
    img: 'roadTorun.jpg'
  },
  {
    img: 'sliwnoKladki.jpg'
  },
  {
    img: 'sopotMolo.jpg'
  }
]

export default function FlexPanelGallery () {
  return (
    <div className="container">
      <div className="box">
          <img style={imgStyle} src={sliwnoKladki} />
      </div>
      <div className="box">
          <img  style={imgStyle}src={branicki} />
      </div>
      <div className="box">
          <img  style={imgStyle}src={roadTorun} />
      </div>
      <div className="box">
          <img style={imgStyle} src={sopotMolo} />
      </div>
    </div>
  )
}