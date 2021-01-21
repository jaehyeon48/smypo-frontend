import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';

const StockGroupItem = ({
  stockId,
  price,
  quantity,
  transactionType,
  transactionDate,
  formData,
  openEditModal,
  openConfirmModal,
  setFormData,
  setToDeleteStockId
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

  const handleOpenConfirmModal = () => {
    openConfirmModal();
    setToDeleteStockId(stockId);
  }

  return (
    <React.Fragment>
      <tr className="stock-group-item" >
        <td className="stock-group-item-type">{transactionType}</td>
        <td className="stock-group-item-price">{price}</td>
        <td className="stock-group-item-quantity">{quantity}</td>
        <td className="stock-group-item-date">{transactionDate.slice(2)}</td>
        <td className="stock-group-item-edit">
          <Button
            btnType={'button'}
            btnText={'Edit'}
            btnColor={'warning'}
            onClickFunc={handleOpenEditModal}
          />
        </td>
        <td className="stock-group-item-delete">
          <Button
            btnType={'button'}
            btnText={'Delete'}
            btnColor={'danger'}
            onClickFunc={handleOpenConfirmModal}
          />
        </td>
      </tr>

    </React.Fragment>
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
