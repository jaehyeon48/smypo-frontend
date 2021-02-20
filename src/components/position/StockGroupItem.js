import React from 'react';

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

export default StockGroupItem;
