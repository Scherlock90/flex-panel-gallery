import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ModalElements from './GalleryElements/ModalElements';
import MainGallery from './MainGallery';
import ImageThumb from './GalleryElements/ImageThumb';
import dataImage from './GalleryElements/Data';
import useCarouselDirection from './CustomHooks/useCarouselDirection';
import useModalEvents from './CustomHooks/useModalEvents';
import '../styles/main.scss';

export default function FlexPanelGallery() {
  const [imagesToGallery] = useState(dataImage);
  const {rightClick, 
    leftClick, 
    currentIndex, 
    startIndex, 
    finishIndex
  } = useCarouselDirection();
  const { 
    closeModal, 
    toggleModal, 
    detailsModal,
    grayscale, 
    setGrayscale, 
    modalMainOpen, 
    isActive,
    pic,
    txtAbout,
    name
  } = useModalEvents();
    
  const makeGrey = {
    filter: `grayscale(${grayscale})`
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
      <div className="title-app">
        Flex Panel Gallery
      </div>
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
          handleDetails={detailsModal}
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