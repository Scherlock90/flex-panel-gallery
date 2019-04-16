import React, {useState} from 'react';
import ReactModal from 'react-modal';
import Button from '@material-ui/core/Button';
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
    const [name, setName] = useState('');
    const [itemId, setItemId] = useState(null)
    const [grayscale, setGrayscale] = useState(0);
    const [zoom, setZoom] = useState('');
    const [selectedPhoto, setSelectedPhoto] = useState({selectedAlbum: null})
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
    function  setActivePhoto(zoom) {
      setZoom(zoom);
      return zoom
    }
    function  notActivePhoto(zoom) {
      setZoom(!zoom);
      return zoom
    }
    const albumClicked = selectedAlbum => e => {
      setSelectedPhoto({selectedAlbum});
      console.log(selectedAlbum);
      return selectedAlbum      
    }
    function handleOpenModal (modal) {
      setModal(true);
      return modal
    }
    
    function handleCloseModal (modal) {
      setModal(false);
      return modal
    }
    function openModalWithItem(dataImage) {
      setName(dataImage.name);
      setItemId(dataImage.id);
      return 
   }
   let photoList = dataImage.map( item => {
    return (
      <ImageThumb 
        key={item.id}
        img={item.img} 
        name={item.name}
        onActivePhoto={() => openModalWithItem(item)}
      />
   )});
   console.log(photoList[1]);
    const selectedAlbum = selectedAlbum;
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
            onActivePhoto={handleOpenModal} 
            notActivePhoto={notActivePhoto.bind(this, img.img)}
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
           itemId={itemId}
            itemName={name}
        >
        
        <div className="containerModal">
          <div className="container" style={makeGrey}>
          {photoList.filter((img,i ) => (
                <ImageThumb 
                key={i}
                  img={img.img} 
                  name={img.name}
                  onActivePhoto={albumClicked}
                  />
              ))}
              {selectedAlbum && imagesToGallery.map((img,i ) => (
                <ImageThumb 
                  img={img.img} 
                  name={img.name}
                  onActivePhoto={albumClicked}
                  />
              )).filter(img  => img.img === selectedAlbum.img (
                <ImageThumb 
                  img={img.img} 
                  name={img.name}
                  onActivePhoto={albumClicked}
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
        <img src={require('./Images/' + props.img)} alt={props.name} onClick={props.onActivePhoto} />
      </div>
      <div className="thumbTitle">{props.name}</div> 
      {/* <div id="myModal" className={props.isActive ? 'modal-content': 'modal'}>
        <img onClick={props.notActivePhoto} src={require('./Images/' + props.img)} />
      </div>   */}
    </div> 
);