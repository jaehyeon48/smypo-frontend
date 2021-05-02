import React, { memo, useState } from 'react';
import { connect } from 'react-redux';

import ModalButton from '../modal/ModalButton';
import ConfirmModal from '../modal/ConfirmModal';
import NoteIcon from '../icons/NoteIcon';
import { deleteCash } from '../../actions/cashAction';
import { showAlert } from '../../actions/alertAction';

const CashItem = ({
  amount,
  cashId,
  cashMemo,
  transactionType,
  transactionDate,
  formData,
  setFormData,
  openMemoModal,
  openEditCashModal,
  deleteCash,
  defaultPortfolio,
  showAlert
}) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  }

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  }

  const handleDeleteCash = async () => {
    const deleteResult = await deleteCash(cashId, defaultPortfolio);
    if (deleteResult !== 0) {
      showAlert('Something went wrong. Please try again!', 'error');
    }
  }

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

  return (
    <tr className="cash-item">
      <td className="cash-item-type">{transactionType}</td>
      <td className="cash-item-amount">{amount}</td>
      <td className="cash-item-date">{transactionDate.slice(2)}</td>
      <td className="cash-item-memo">
        <span onClick={() => openMemoModal(cashMemo)}>
          <NoteIcon />
        </span>
      </td>
      <td className="cash-item-edit">
        <ModalButton
          btnType={'button'}
          btnText={'Edit'}
          btnColor={'warning'}
          openModalFunc={handleOpenEditCashModal}
        />
      </td>
      <td className="cash-item-delete">
        <ModalButton
          btnType={'button'}
          btnText={'Delete'}
          btnColor={'danger'}
          openModalFunc={openConfirmModal}
        />
      </td>
      {isConfirmModalOpen && (
        <ConfirmModal
          confirmMsg={'Do you really want to delete the transaction record?'}
          confirmAction={handleDeleteCash}
          closeModalFunc={closeConfirmModal}
        />
      )}
    </tr>
  );
}

const mapStateToProps = (state) => ({
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  deleteCash,
  showAlert
})(CashItem);
