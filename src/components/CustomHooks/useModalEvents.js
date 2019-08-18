import React, {useState} from 'react';

const useModalEvents = () => {
    const [modalMainOpen, setModalMainOpen] = useState(false);
    const [name, setName] = useState('');
    const [txtAbout, setTxtAbout] = useState('');
    const [pic, setPic] = useState('');
    const [grayscale, setGrayscale] = useState(0);
    const [isActive, setActive] = useState(false);

    function toggleModal(name, pic, txtAbout) {
        setModalMainOpen(true)
        setName(name);
        setTxtAbout(txtAbout);
        setPic(require('../../assets/' + pic));
        return pic
      }
    
      function closeModal(modalMainOpen) {
        setModalMainOpen(false)
        setGrayscale(0);
        setActive(false);
        return modalMainOpen
      }
      
      function detailsModal() {
        if (isActive === false) {
          setActive(true);
        } else {
          setActive(false)
        }
      }

      return { 
          toggleModal, 
          closeModal, 
          detailsModal, 
          grayscale, 
          setGrayscale, 
          modalMainOpen, 
          isActive, 
          pic,
          txtAbout,
          name 
        }
}

export default useModalEvents;