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
    const [selectedPhoto, setSelectedPhoto] = useState();
    const [modal, setModal] = useState(false);
    const [subtitle, setSubTitle] = useState('');
    const [modalMainOpen, setModalMainOpen] = useState(false);
    const [pic, setPic] = useState();
    const makeGrey = {
      filter: `grayscale(${grayscale})`
    }

    function toggleModal (pic) {
      setModalMainOpen(true)
      setPic(pic);
      console.log('Co przechodzi! ' + pic)
      return pic
    }
    
    function albumClicked  (selectedPhoto)   {
      setSelectedPhoto(dataImage);
      console.log(selectedPhoto);
      return selectedPhoto      
    }
    function handleOpenModal (modal) {
      setModal(true);
      return modal
    }
    
    function handleCloseModal (modal) {
      setModal(false);
      return modal
    }
  
    function afterOpenModal (subtitle) {
      // references are now sync'd and can be accessed.
       setSubTitle(photoList.filter(img  => img.id === selectedPhoto.id).map(img => img.img === selectedPhoto.img));
       console.log(photoList.filter(img  => img.img === selectedPhoto.img).map(img => img.img === selectedPhoto.img));
       return subtitle
    }
   let photoList = imagesToGallery.filter( item => (
      <ImageThumb 
        key={item.id}
        img={item.img} 
        name={item.name}  
        onActivePhoto={toggleModal.bind(this, item.img)}      
      />
   ));
   console.log(photoList);
 
  return (
    <div>
      <div className="container" style={makeGrey}>        
        {photoList.map((img, i)=> (
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
      <button onClick={toggleModal.bind(this, 'http://lorempixel.com/200/200/business/1')} >Click</button>
      <button onClick={e => toggleModal(e)}>Trigger Modal</button>
                  <Modal bg="#222" show={ modalMainOpen } 
                      onClose={toggleModal.bind(this) }>
                     <img src={pic} />
                     {pic}
                      
                   
        
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
        	{ this.props.children }
				</div>
      </div>
    )
  }
}

const ImageThumb = (props) => (
    <div className="cardImage">
      <div className="box">
        <img src={require('./Images/' + props.img)} alt={props.name} onClick={props.onActivePhoto} />
      </div>
      <div className="thumbTitle">{props.name}</div> 
      {/* <div id="myModal" className={props.isActive ? 'modal-content': 'modal'}>
        <img onClick={props.notActivePhoto} src={require('./Images/' + props.img)} />
      </div>   */}
    </div> 
);
