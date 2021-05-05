import React from 'react';
import ModalButton from '../modal/ModalButton';
import NoteIcon from '../icons/NoteIcon';

const CashItem = ({
  amount,
  cashId,
  cashMemo,
  transactionType,
  transactionDate,
  formData,
  setFormData,
  openMemoModal,
  openConfirmModal,
  setCashIdToDelete,
  openEditCashModal,
  isLoadingPortfolioData
}) => {
  const handleOpenEditCashModal = () => {
    setFormData({
      ...formData,
      cashId,
      amount,
      cashMemo,
      transactionDate,
      transactionType
    });
    openEditCashModal();
  }

  const handleOpenConfirmModal = () => {
    setCashIdToDelete(cashId);
    openConfirmModal();
  }

  return (
    <tr className="cash-item">
      <td className="cash-item-type">{transactionType}</td>
      <td className="cash-item-amount">{amount}</td>
      <td className="cash-item-date">{transactionDate.slice(2)}</td>
      <td className={cashMemo?.trim() === '' ? "cash-item-memo-empty" : "cash-item-memo"}>
        <span onClick={() => openMemoModal(cashMemo, cashMemo?.trim() === '')}>
          <NoteIcon />
        </span>
      </td>
      <td className="cash-item-edit">
        <ModalButton
          btnType={'button'}
          btnText={'Edit'}
          btnColor={'warning'}
          isDisabled={isLoadingPortfolioData}
          openModalFunc={handleOpenEditCashModal}
        />
      </td>
      <td className="cash-item-delete">
        <ModalButton
          btnType={'button'}
          btnText={'Delete'}
          btnColor={'danger'}
          isDisabled={isLoadingPortfolioData}
          openModalFunc={handleOpenConfirmModal}
        />
      </td>
    </tr>
  );
}

export default CashItem;
