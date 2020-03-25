import React from 'react';
import { CustomButton } from '../index'

export const ModalContainer = ({
  makeGrey,
  pic,
  closeModal,
  isActive,
  handleDetails,
  txtAbout,
  name,
  buttonStyle,
  setGrayscale,
  setNormal,
}) => {
  return (
    <>
      <div className="container-modal">
        <div className="container-my-modal" >
          <div className="card-image">
            <div className="box">
              <img
                style={makeGrey}
                className="img-modal"
                src={pic}
              />
              <div className={isActive ? 'toggle-main--active' : 'toggle-main'}>
                <button
                  className="place-toggle"
                  onClick={handleDetails}
                >
                   +
                </button>
              </div>
              <div className={isActive ? 'details--active' : 'details'}>
                { txtAbout }
              </div>
            </div>
          </div>
          <div className="little-container-name">
            <div className="name-modal-image">
              { name }
            </div>
          </div>
        </div>
      </div>
      <div style={buttonStyle}>
        <CustomButton
          variant={"contained"}
          color={"primary"}
          onClick={setGrayscale}
          name={"Grayscale"}
        />
        <CustomButton
          variant={"contained"}
          color={"primary"}
          onClick={setNormal}
          name={"Normal"}
        />
        <CustomButton
          variant={"contained"}
          color={"secondary"}
          onClick={closeModal}
          name={"Close Modal"}
        />
      </div>
    </>
  )
}