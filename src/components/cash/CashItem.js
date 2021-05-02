import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
import ConfirmModal from '../modal/ConfirmModal';
import NoteIcon from '../icons/NoteIcon';
import { deleteCash } from '../../actions/cashAction';
import { showAlert } from '../../actions/alertAction';

const CashItem = ({
  amount,
  cashId,
  transactionType,
  transactionDate,
  formData,
  setFormData,
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
      <td className="cash-item-note">
        <NoteIcon />
      </td>
      <td className="cash-item-edit">
        <Button
          btnType={'button'}
          btnText={'Edit'}
          btnColor={'warning'}
          onClickFunc={handleOpenEditCashModal}
        />
      </td>
      <td className="cash-item-delete">
        <Button
          btnType={'button'}
          btnText={'Delete'}
          btnColor={'danger'}
          onClickFunc={openConfirmModal}
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
