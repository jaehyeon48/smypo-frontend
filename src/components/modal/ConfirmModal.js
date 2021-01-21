import React from 'react';
import Modal from './Modal';
import Button from '../button/Button';

const ConfirmModal = ({
  confirmMsg,
  confirmAction,
  closeModalFunc
}) => {
  return (
    <Modal closeModalFunc={closeModalFunc}>
      <div className="delete-confirm-content">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
        </svg>
        <p>
          {confirmMsg}
        </p>
        <div className="delete-confirm-actions">
          <Button
            btnType={'button'}
            btnText={'Cancel'}
            btnColor={'lightGray'}
            onClickFunc={closeModalFunc}
          />
          <Button
            btnType={'button'}
            btnText={'Delete'}
            btnColor={'danger'}
            onClickFunc={confirmAction}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
