import React from 'react';

import ModalButton from '../modal/ModalButton';
import NoteIcon from '../icons/NoteIcon';

const StockGroupItem = ({
  stockId,
  price,
  quantity,
  stockMemo,
  transactionType,
  transactionDate,
  formData,
  openEditModal,
  openMemoModal,
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
      stockMemo,
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
        <td className={stockMemo?.trim() === '' ? "stock-group-item-memo-empty" : "stock-group-item-memo"}>
          <span onClick={() => openMemoModal(stockMemo, stockMemo?.trim() === '')}>
            <NoteIcon />
          </span>
        </td>
        <td className="stock-group-item-edit">
          <ModalButton
            btnType={'button'}
            btnText={'Edit'}
            btnColor={'warning'}
            openModalFunc={handleOpenEditModal}
          />
        </td>
        <td className="stock-group-item-delete">
          <ModalButton
            btnType={'button'}
            btnText={'Delete'}
            btnColor={'danger'}
            openModalFunc={handleOpenConfirmModal}
          />
        </td>
      </tr>
    </React.Fragment>
  )
}

export default StockGroupItem;
