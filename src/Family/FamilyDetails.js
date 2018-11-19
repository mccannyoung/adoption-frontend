import React from 'react'
import Modal from '@material-ui/core/Modal'

const FamilyDetails = (props) => {

    return (
        <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.handleClose}
      >
      <div>Hello from {props.family.FamilyName} </div>
      </Modal>
    );
};
