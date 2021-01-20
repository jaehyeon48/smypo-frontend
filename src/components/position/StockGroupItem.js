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
    <tr className="stock-group-item" onClick={handleOpenEditModal}>
      <td className="stock-group-item-type">{transactionType}</td>
      <td className="stock-group-item-price">{price}</td>
      <td className="stock-group-item-quantity">{quantity}</td>
      <td className="stock-group-item-date">{transactionDate.slice(2)}</td>
    </tr>
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
