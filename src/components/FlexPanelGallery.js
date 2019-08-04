import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ModalElements from './ModalElements';
import MainGallery from './MainGallery';
import ImageThumb from './ImageThumb';
import dataImage from './data';
import '../styles/main.css';
ReactModal.setAppElement('#root2');

const buttonStyle = {
  padding: '3em 0 0 0',
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

export default function FlexPanelGallery() {
  const [imagesToGallery] = useState(dataImage);
  const [grayscale, setGrayscale] = useState(0);
  const [modalMainOpen, setModalMainOpen] = useState(false);
  const [pic, setPic] = useState('');
  const [name, setName] = useState('');
  const [txtAbout, setTxtAbout] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [finishIndex, setFinishIndex] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setActive] = useState(false);
  const makeGrey = {
    filter: `grayscale(${grayscale})`
  }

  function toggleModal(name, pic, txtAbout) {
    setModalMainOpen(true)
    setName(name);
    setTxtAbout(txtAbout);
    setPic(require('../assets/' + pic));
    return pic
  }

  function closeModal(modalMainOpen) {
    setModalMainOpen(false)
    setGrayscale(0);
    setActive(false);
    return modalMainOpen
  }

  function leftClick() {
    if (startIndex > 0 && finishIndex > 0) {
      setStartIndex(startIndex - 1);
      setFinishIndex(finishIndex - 1)
    } if (finishIndex === 0) {
      setFinishIndex(0);
      setStartIndex(0);
    }
    return currentIndex
  }

  function rightClick() {
    if (finishIndex <= photoList.length) {
      setStartIndex(startIndex + 1);
      setFinishIndex(finishIndex + 1);
    } if (finishIndex === photoList.length) {
      setStartIndex(0);
      setFinishIndex(4);
    }
    return currentIndex
  }
  
  function handleDetails() {
    if (isActive === false) {
      setActive(true);
    } else {
      setActive(false)
    }
  }

  let photoList;
  if (imagesToGallery.length > 0) {
    photoList = imagesToGallery
      .map((img, i) => (
        <ImageThumb
          img={img.img}
          key={i}
          name={img.name}
          txtAbout={img.txtAbout}
          onActivePhoto={e => toggleModal(img.name, img.img, img.txtAbout)}
        />
      ))
  } else {
    photoList = <div style={styleLoading}>Please add some cards</div>
  }

  return (
    <>
      <MainGallery 
        makeGrey={makeGrey}
        buttonStyle={buttonStyle}
        setGrayscale={() => setGrayscale(4)}
        setNormal={() => setGrayscale(0)}
        leftClick={e => leftClick(e, currentIndex)}
        rightClick={e => rightClick(e, currentIndex)}
        photoList={photoList.slice(startIndex, finishIndex)}
      />
      <ReactModal
        isOpen={modalMainOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay mainOverlay"
      >
        <ModalElements 
          makeGrey={makeGrey}
          isActive={isActive}
          pic={pic}
          handleDetails={handleDetails}
          txtAbout={txtAbout}
          name={name}
          buttonStyle={buttonStyle}
          closeModal={closeModal}
          setGrayscale={() => setGrayscale(4)}
          setNormal={() => setGrayscale(0)}
        />
      </ReactModal>
    </>
  )
}