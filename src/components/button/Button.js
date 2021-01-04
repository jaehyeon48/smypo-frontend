import React from 'react';

const Button = ({
  btnType,
  btnText,
  btnColor,
  isDisabled = false,
  onClickFunc
}) => {
  const determineColor = (color) => {
    switch (color) {
      case 'white':
        return 'white';
      case 'warning':
        return 'warning';
      case 'danger':
        return 'danger';
      default:
        return 'default';
    }
  }
  return (
    <button
      className={`button button--${determineColor(btnColor)}`}
      type={btnType}
      disabled={isDisabled}
      onClick={onClickFunc}
    >
      {btnText}
    </button>
  );
}

export default Button;
