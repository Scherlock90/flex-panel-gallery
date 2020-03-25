import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { MainGallery } from '../main-gallery/MainGallery';
import { ImageThumb, ModalContainer, dataImage } from '../gallery-elements/index';
import useCarouselDirection from '../custom-hooks/useCarouselDirection';
import useModalEvents from '../custom-hooks/useModalEvents';
import '../../assets/styles/main.scss';

export const FlexPanelGallery = () => {
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
      .map(({ img, name, txtAbout}) => (
      <ImageThumb
          img={img}
          key={name}
          name={name}
          txtAbout={txtAbout}
          onActivePhoto={() => toggleModal(name, img, txtAbout)}
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
        rightClick={() => rightClick(photoList, currentIndex)}
        photoList={photoList.slice(startIndex, finishIndex)}
      />
      <ReactModal
        isOpen={modalMainOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay main-overlay"
      >
        <ModalContainer
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