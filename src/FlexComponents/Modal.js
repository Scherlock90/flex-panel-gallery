import React from 'react'

export default class Modal extends React.Component {
    render() {
      const { show, bg, closeModal } = this.props;
      // Custom styles: set visibility and backbround color
      const styles = {
        modal: {
          display: (show) ? null : 'none', 
          backgroundColor: bg || 'rgba(255, 255, 255, 0.8)',       
        }
      };
      
      return (
        <div className="modal-wrapper" style={styles.modal}>
          <span className="glyphicon glyphicon-remove-sign modal-item"
              onClick={this.props.onClose}></span>
          <div className="modal-item">
              { this.props.children}
                  </div>
        </div>
      )
    }
  }

  {/* //This is adding to another component  
  <Modal bg="#222" show={ modalMainOpen } onClose={toggleModal.bind(this) }>
        <img src={pic} />
      </Modal>       */}