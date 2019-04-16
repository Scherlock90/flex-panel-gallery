import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import './main.css';
const dataImage = [
  {
    name: 'Letniskowy Pałac Branickich',
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
const buttonStyle ={
  padding : '3em 0 0 0'
}

export default function FlexPanelGallery () {
    const [imagesToGallery] = useState(dataImage);
    const [grayscale, setGrayscale] = useState('sample-image');
    const [zoom, setZoom] = useState(0);
    const makeGrey = {
      filter: `grayscale(${grayscale})`
    }
    function isActive (id) {
      return zoom === id;
    }    
    function  setActiveTab(zoom) {
      setZoom(zoom);
      return zoom
    }
  return (
    <div>
      <div className="container" style={makeGrey}>        
        {imagesToGallery.map((img, i)=> (
          <ImageThumb img={img.img} key={i} name={img.name} isActive={isActive(img.img)} onActiveTab={setActiveTab.bind(this, img.img)}
            />
        ))}        
      </div>
      <div style={buttonStyle}>
        <Button variant="contained" color="primary" onClick={() => setGrayscale(4)} >Grayscale</Button>
        <Button variant="contained" color="secondary" onClick={() => setGrayscale(0)} >Normal</Button>
      </div>
    </div>
  )
}

const ImageThumb = (props) => (
  <div className="cardImage">
    <div className="box">
      <img className={props.isActive ? 'sample-image--active': ''} src={require('./Images/' + props.img)} alt={props.name} onClick={props.onActiveTab}/>
    </div>
    <div className="thumbTitle">{props.name}</div>
  </div>
);