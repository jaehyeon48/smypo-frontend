import React, { useCallback } from 'react';
import Button from '../button/Button';

const ModalButton = ({
  btnType,
  btnText,
  btnColor,
  isDisabled = false,
  openModalFunc
}) => {
  const openModal = useCallback(() => {
    document.body.style.overflow = 'hidden';
    openModalFunc();
  }, [openModalFunc]);
  return (
    <Button
      btnType={btnType}
      btnText={btnText}
      btnColor={btnColor}
      isDisabled={isDisabled}
      onClickFunc={openModal}
    />
  );
}

export default ModalButton;
