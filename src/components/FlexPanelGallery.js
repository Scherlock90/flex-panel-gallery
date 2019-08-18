import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ModalElements from './GalleryElements/ModalElements';
import MainGallery from './MainGallery';
import ImageThumb from './GalleryElements/ImageThumb';
import dataImage from './GalleryElements/data';
import useCarouselDirection from './CustomHooks/useCarouselDirection';
import '../styles/main.scss';

export default function FlexPanelGallery() {
  const {rightClick, leftClick, currentIndex, startIndex, finishIndex} = useCarouselDirection();
  const [imagesToGallery] = useState(dataImage);
  const [grayscale, setGrayscale] = useState(0);
  const [modalMainOpen, setModalMainOpen] = useState(false);
  const [pic, setPic] = useState('');
  const [name, setName] = useState('');
  const [txtAbout, setTxtAbout] = useState('');
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
      photoList = <div className="loader">Please add some cards</div>
    }
    
  return (
    <>
      <MainGallery 
        makeGrey={makeGrey}
        setGrayscale={() => setGrayscale(4)}
        setNormal={() => setGrayscale(0)}
        leftClick={e => leftClick(e, currentIndex)}
        rightClick={e => rightClick(photoList, currentIndex)}
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
          closeModal={closeModal}
          setGrayscale={() => setGrayscale(4)}
          setNormal={() => setGrayscale(0)}
        />
      </ReactModal>
    </>
  )
}