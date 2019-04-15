import React from 'react';
import './Flex-panel-gallery.css';

const dataImages = [
  {
    Title: "first",
    SubTitle: 'next'
  },
  {
    Title: "first1",
    SubTitle: 'next1'
  }
]

export default function FlexPanelGallery () {
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }
    
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
    return(
        <div>
            {panels} + ss
        </div>
    )
}