import React from 'react';
import Footer from './components/GalleryElements/Footer';
import FlexPanelGallery from './components/FlexPanelGallery';

const title = {
  fontSize: '40px',
  textAlign: 'center',
  padding: '2em',
  color: '#039be5'
}
export default function App () {
  return (
    <>
      <div  style={title}>
        Flex Panel Gallery
      </div>
      <FlexPanelGallery />
      <Footer />
    </>
  );
}
