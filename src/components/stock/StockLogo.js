import React from 'react';

const StockLogo = ({ ticker }) => {
  return (
    <img
      src={`https://storage.googleapis.com/iexcloud-hl37opg/api/logos/${ticker}.png`}
      alt=""
      className="stock-logo-img"
    />
  );
}

export default StockLogo;
