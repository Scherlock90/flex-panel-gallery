import React, {useState} from 'react';
import './main.css';

const dataImage = [
  {
    name: 'Branicki Letniskowy Pałac',
    img: 'branicki.jpg'
  },
  { 
    name: 'W drodze do Torunia',
    img: 'roadTorun.jpg'
  },
  {
    name: 'Kładki w Śliwnie',
    img: 'sliwnoKladki.jpg'
  },
  {
    name: 'Sopockie Molo',
    img: 'sopotMolo.jpg'
  }
]

export default function FlexPanelGallery () {
    const [imagesToGallery, setImagesToGallery] = useState(dataImage);

  return (
    <div className="container">
      {imagesToGallery.map((img, i)=> (
        <ImageThumb img={img.img} key={i} name={img.name} />
      ))}
    </div>
  )
}

const ImageThumb = (props) => (
  <div className="cardImage">
    <div className="box">
      <img src={require('./Images/' + props.img)} alt={props.name} />
    </div>
    <div className="thumbTitle">{props.name}</div>
  </div>
);