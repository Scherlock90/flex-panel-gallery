import React, {useState} from 'react';
import './Flex-gallery.css';

const imgStyle = {
  width: '280px',
  height: '400px'
}

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
        <ImageThumb img={img.img} key={i} />
      ))}
    </div>
  )
}

const ImageThumb = (props) => (
  <div>
    <div className="box">
      <img src={require('./Images/' + props.img)} alt={props.name} />
    </div>
    <h3 className="thumbTitle">{props.name}</h3>
  </div>
);