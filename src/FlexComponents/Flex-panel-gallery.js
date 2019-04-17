import React, {useState} from 'react';
import ReactModal from 'react-modal';
import Button from '@material-ui/core/Button';
import Albums from './Albums';
import './main.css';
ReactModal.setAppElement('#root2');
const dataImage = [
  {
    id: 1,
    name: 'Letniskowy Pałac Branickich',
    img: 'branicki.jpg'
  },
  { 
    id: 2,
    name: 'W drodze do Torunia',
    img: 'roadTorun.jpg'
  },
  {
    id: 3,
    name: 'Kładki w Śliwnie',
    img: 'sliwnoKladki.jpg'
  },
  {
    id: 4,
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
    const [modalMainOpen, setModalMainOpen] = useState(false);
    const [pic, setPic] = useState('');
    const makeGrey = {
      filter: `grayscale(${grayscale})`
    }
    function toggleModal (pic) {
      setModalMainOpen(true)
      setPic('/Images/'+pic);
      console.log('What is pass! ' + pic)
      return pic
    }    
 
  return (
    <div>
      <div className="container" style={makeGrey}>        
        {imagesToGallery.map((img, i)=> (
          <ImageThumb 
            img={img.img} 
            key={i} 
            name={img.name} 
            onActivePhoto={toggleModal.bind(this, img.img)}
          />
        ))}    
      </div>
      <div style={buttonStyle}>
        <Button variant="contained" color="primary" onClick={() => setGrayscale(4)} >Grayscale</Button>
        <Button variant="contained" color="secondary" onClick={() => setGrayscale(0)} >Normal</Button>
      </div>
      <Modal bg="#222" show={ modalMainOpen } onClose={toggleModal.bind(this) }>
        <img src={pic} />
      </Modal>      
    </div>
  )
}

class Modal extends React.Component {
  render() {
    const { show, bg, closeModal } = this.props;
    // Custom styles: set visibility and backbround color
    const styles = {
      modal: {
        display: (show) ? null : 'none', 
        backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',       
      }
    };
    
    return (
      <div className="modal-wrapper" style={styles.modal}>
        <span className="glyphicon glyphicon-remove-sign modal-item"
            onClick={this.props.onClose}></span>
        <div className="modal-item">
        	{ this.props.children}
				</div>
      </div>
    )
  }
}


const ImageThumb = (props) => (
    <div className="cardImage">
      <div className="box">
        <img src={('/Images/' + props.img)} alt={props.name} onClick={props.onActivePhoto} />
      </div>
      <div className="thumbTitle">{props.name}</div> 
    </div> 
);
