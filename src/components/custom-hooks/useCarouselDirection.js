import React, {useState} from 'react';

const useCarouselDirection = () => { 
  const [startIndex, setStartIndex] = useState(0);
  const [finishIndex, setFinishIndex] = useState(4);
  const [currentIndex] = useState(0);

  function leftClick() {
    if (startIndex > 0 && finishIndex > 0) {
      setStartIndex(startIndex - 1);
      setFinishIndex(finishIndex - 1)
    } 

    if (finishIndex === 0) {
      setFinishIndex(0);
      setStartIndex(0);
    }

    return currentIndex
  }

  function rightClick(photoList) {
    if (finishIndex <= photoList.length) {
      setStartIndex(startIndex + 1);
      setFinishIndex(finishIndex + 1);
    } 

    if (finishIndex === photoList.length) {
      setStartIndex(0);
      setFinishIndex(4);
    }

    return currentIndex
  }
  
    return  { rightClick, leftClick, currentIndex, startIndex, finishIndex }
}

export default useCarouselDirection;