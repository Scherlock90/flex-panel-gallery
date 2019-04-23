import React, {useState} from 'react';
import ReactModal from 'react-modal';
import Button from '@material-ui/core/Button';
import './main.css';
ReactModal.setAppElement('#root2');
const dataImage = [
  {
    id: 1,
    name: 'Branickich Pałac',
    img: 'branicki.jpg'
  },
  { 
    id: 2,
    name: 'Kujawsko-Pomorskie',
    img: 'roadTorun.jpg'
  },
  {
    id: 3,
    name: 'Narwiański Narodowy Park',
    img: 'sliwnoKladki.jpg'
  },
  {
    id: 4,
    name: 'Sopockie Molo',
    img: 'sopotMolo.jpg'
  },
  
  {
    id: 3,
    name: 'Narwiański Narodowy Park',
    img: 'sliwnoKladki.jpg'
  },
  {
    id: 4,
    name: 'Sopockie Molo',
    img: 'sopotMolo.jpg'
  }
  ,{
    id: 3,
    name: 'Narwiański Narodowy Park',
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

    function leftClick (e) {
      if(currentIndex <= photoList.length){
      setCurrentIndex(currentIndex - 1);
      console.log('Left ' + currentIndex);
      } if (currentIndex === 0) {
        setCurrentIndex(0);
        console.log('ustawia koniec')
      }
      return currentIndex
    }
    function rightClick (e) {
      if(currentIndex < photoList.length * 6){
      setCurrentIndex(currentIndex + 1);
      console.log('right ' + currentIndex)
      } if (currentIndex === photoList.length) {
        setCurrentIndex(0);
        console.log('do zera ' + currentIndex)
      }
      return currentIndex
    }
  return (
    <div>
      <div className="container" style={makeGrey}>
         {photoList[currentIndex]}   
      </div>
      <div style={buttonStyle}>
        <Button variant="contained" color="primary" onClick={() => setGrayscale(4)} >Grayscale</Button>
        <Button variant="contained" color="secondary" onClick={() => setGrayscale(0)} >Normal</Button>
        <button onClick={e => leftClick(e, currentIndex)}>Prev</button>
        <button onClick={e => rightClick(e, currentIndex)}>Next</button>
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
                <img  style={makeGrey} className="imgModal" src={pic} />                
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
