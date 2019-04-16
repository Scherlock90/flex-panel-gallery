import React, {useState} from 'react';
import ReactModal from 'react-modal';
import Button from '@material-ui/core/Button';
import './main.css';
ReactModal.setAppElement('#root2');
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
    const [grayscale, setGrayscale] = useState(0);
    const [zoom, setZoom] = useState('');
    const [modal, setModal] = useState(false)
    const makeGrey = {
      filter: `grayscale(${grayscale})`
    }

    function isActive (id) {
      return zoom === id;
    }    
    function notActive (id) {
      return zoom !== id;
    }
    function  setActiveTab(zoom) {
      setZoom(zoom);
      return zoom
    }
    function  notActiveTab(zoom) {
      setZoom(!zoom);
      return zoom
    }
    function handleOpenModal (e, modal) {
      setModal(true);
      return modal
    }
    
    function handleCloseModal (modal) {
      setModal(false);
      return modal
    }
  return (
    <div>
      <div id="root2"> </div>

      <div className="container" style={makeGrey}>        
        {imagesToGallery.map((img, i)=> (
          <ImageThumb 
            img={img.img} 
            key={i} 
            name={img.name} 
            isActive={isActive(img.img)} 
            notActive={notActive(img.img)} 
            onActiveTab={setActiveTab.bind(this, img.img)} 
            notActiveTab={notActiveTab.bind(this, img.img)}
            />
        ))}        
      </div>
      <div style={buttonStyle}>
        <Button variant="contained" color="primary" onClick={() => setGrayscale(4)} >Grayscale</Button>
        <Button variant="contained" color="secondary" onClick={() => setGrayscale(0)} >Normal</Button>
      </div>
      <button onClick={e => handleOpenModal(e)}>Trigger Modal</button>
        <ReactModal 
           isOpen={modal}
           contentLabel="onRequestClose Example"
           onRequestClose={e => handleCloseModal(e)}
           className="Modal"
           overlayClassName="Overlay"
        >
        <div className="containerModal">
          <div className="container" style={makeGrey}>
              {imagesToGallery.map((img, i)=> (
                <ImageThumb 
                  img={img.img} 
                  key={i} 
                  name={img.name} 
                  isActive={isActive(img.img)} 
                  notActive={notActive(img.img)} 
                  onActiveTab={setActiveTab.bind(this, img.img)} 
                  notActiveTab={notActiveTab.bind(this, img.img)}
                  />
              ))}   
          </div>  
        </div>   
          <button onClick={ e => handleCloseModal(e)}>Close Modal</button>
        </ReactModal>
    </div>
  )
}

const ImageThumb = (props) => (
    <div className="cardImage">
      <div className="box">
        <img src={require('./Images/' + props.img)} alt={props.name} onClick={props.onActiveTab} />
      </div>
      <div className="thumbTitle">{props.name}</div> 
      {/* <div id="myModal" className={props.isActive ? 'modal-content': 'modal'}>
        <img onClick={props.notActiveTab} src={require('./Images/' + props.img)} />
      </div>   */}
    </div> 
);