import React, {useState} from 'react';
import dataImage from './data';
import ReactModal from 'react-modal';
import Button from '@material-ui/core/Button';
import './main.css';
ReactModal.setAppElement('#root2');

const buttonStyle ={
  padding : '3em 0 0 0',
  display: 'flex',
  justifyContent: 'center'
}
const styleLoading = {
  textAlign: 'center',
  fontSize: '40px',
  color: 'rgb(3, 155, 229)',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  alignItems: 'center'
}

export default function FlexPanelGallery () {
    const [imagesToGallery] = useState(dataImage);
    const [grayscale, setGrayscale] = useState(0);
    const [modalMainOpen, setModalMainOpen] = useState(false);
    const [pic, setPic] = useState('');
    const [name, setName] = useState('');
    const [startIndex, setStartIndex] = useState(0);
    const [finishIndex, setFinishIndex] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0);
    const makeGrey = {
      filter: `grayscale(${grayscale})`
    }
    function toggleModal (name, pic) {
      setModalMainOpen(true)
      setName(name);
      setPic(require('./Images/'+ pic));      
      console.log('That is pass! ' + pic)
      return pic
    } 
    function closeModal(modalMainOpen) {
      setModalMainOpen(false)
      setGrayscale(0);
      return modalMainOpen
    }  
    function leftClick (e) {
      if(startIndex > 0 && finishIndex > 0){
        setStartIndex(startIndex - 1);
        setFinishIndex(finishIndex - 1)
      } if (finishIndex === 0) {
        setFinishIndex(0);
        setStartIndex(0);
      }
      return currentIndex
    }
    function rightClick (e) {
      if(finishIndex <= photoList.length){
      setStartIndex(startIndex + 1);
      setFinishIndex(finishIndex + 1);
      } if (finishIndex === photoList.length) {
        setStartIndex(0);
        setFinishIndex(4);
      }
      return currentIndex
    }

    let photoList;
    if (imagesToGallery.length > 0) {
      photoList = imagesToGallery.map((img, i)=> (
      <ImageThumb 
        img={img.img} 
        key={i} 
        name={img.name} 
        onActivePhoto={e => toggleModal(img.name, img.img)}
      />
    ))} else {
      photoList = <div style={styleLoading}>Please add some cards</div>
    }
    
  return (
    <div>
      <div className="containerMain">
        <button className="buttonSlider bt-left" onClick={e => leftClick(e, currentIndex)}></button>
        <div className="container" style={makeGrey}>
          {photoList.slice(startIndex, finishIndex)} 
        </div>           
        <button className="buttonSlider bt-right" onClick={e => rightClick(e, currentIndex)}></button> 
      </div>
      <div style={buttonStyle}>
        <Button variant="contained" color="primary" onClick={() => setGrayscale(4)} >Grayscale</Button>
        <Button variant="contained" color="secondary" onClick={() => setGrayscale(0)} >Normal</Button>
      </div>
      <ReactModal 
        isOpen={modalMainOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={closeModal}          
        className="Modal"
        overlayClassName="Overlay"
      >      
        <div className="containerModal">
          <div className="containerMyModal" >
            <div className="cardImage">
              <div className="box">                
                <img style={makeGrey} className="imgModal" src={pic} />  
                 <div className="toggleMain"><div className="placeToggle">+</div></div>
                              
              </div>              
            </div> 
            <div className="littleContainerName">
              <div className="nameModalImage">
                {name} 
              </div>                   
            </div>             
          </div>  
        </div>   
        <div style={buttonStyle}>
          <Button variant="contained" color="primary" onClick={() => setGrayscale(4)} >Grayscale</Button>
          <Button variant="contained" color="primary" onClick={() => setGrayscale(0)} >Normal</Button>
          <Button variant="contained" color="secondary" onClick={closeModal} >Close Modal</Button>
        </div>                  
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
    </div> 
);
