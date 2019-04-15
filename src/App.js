import React, { Component } from 'react';
import Footer from './Footer';
import FlexPanelGallery from './FlexComponents/Flex-panel-gallery';

const title = {
  fontSize: '40px',
  textAlign: 'center',
  padding: '2em',
  color: '#039be5'
}
export default function App () {
  return (
    <div>
      <div  style={title}>Flex Panel Gallery</div>
      <FlexPanelGallery />
      <Footer />
    </div>
  );
}
