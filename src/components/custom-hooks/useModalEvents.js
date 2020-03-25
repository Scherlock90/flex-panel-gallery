import { useState } from 'react';

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
      setPic(require('../../assets/images/' + pic));
    }

  function closeModal() {
    setModalMainOpen(false)
    setGrayscale(0);
    setActive(false);
  }

  function detailsModal() {
    if (isActive === false) return setActive(true);
    else return setActive(false)
  }

  return {
    grayscale,
    modalMainOpen,
    isActive,
    pic,
    txtAbout,
    name,
    toggleModal,
    closeModal,
    detailsModal,
    setGrayscale,
  }
}

export default useModalEvents;