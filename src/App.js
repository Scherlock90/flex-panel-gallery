import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import FlexPanelGallery from './FlexComponents/Flex-panel-gallery';

export default function App () {
  return (
    <div>
      <div className="App">Flex Panel Gallery</div>
      <FlexPanelGallery />
      <Footer />
    </div>
  );
}
