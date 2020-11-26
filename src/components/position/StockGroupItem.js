import React from 'react';
import PropTypes from 'prop-types';

const StockGroupItem = ({
  stockId,
  price,
  quantity,
  transactionType,
  transactionDate,
  formData,
  openEditModal,
  setFormData
}) => {
  const handleOpenEditModal = () => {
    setFormData({
      ...formData,
      stockId,
      price,
      quantity,
      transactionType,
      transactionDate
    });
    openEditModal();
  }
  return (
    <div className="stock-group-item" onClick={handleOpenEditModal}>
      <span className="stock-group-price">{price}</span>
      <span className="stock-group-quantity">{quantity}</span>
      <span className="stock-group-type">{transactionType}</span>
      <span className="stock-group-date">{transactionDate.slice(2)}</span>
    </div>
  )
}

StockGroupItem.propTypes = {
  stockId: PropTypes.number,
  price: PropTypes.number,
  quantity: PropTypes.number,
  transactionType: PropTypes.string,
  transactionDate: PropTypes.string,
  formData: PropTypes.object,
  openEditModal: PropTypes.func,
  setFormData: PropTypes.func
};

export default StockGroupItem;
