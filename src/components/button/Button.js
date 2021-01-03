import React from 'react';

const Button = ({
  btnType,
  btnText,
  btnColor,
  isDisabled = false
}) => {
  const determineColor = (color) => {
    switch (color) {
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
    >
      {btnText}
    </button>
  );
}

export default Button;
