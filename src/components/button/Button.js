import React from 'react';

const Button = ({
  btnType,
  btnText,
  btnColor,
  isDisabled = false,
  onClickFunc
}) => {
  const determineColor = (color) => {
    const colors = {
      'white': 'white',
      'primary': 'primary',
      'warning': 'warning',
      'danger': 'danger',
      'lightGray': 'light-gray'
    };

    if (!colors[color]) {
      return 'default';
    } else {
      return colors[color];
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
