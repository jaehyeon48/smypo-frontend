import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../button/Button';
import Modal from '../modal/Modal';
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
        <Modal closeModalFunc={closeConfirmModal}>
          <div className="delete-confirm">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
            </svg>
            <p>
              Do you really want to delete?
              </p>
            <div className="delete-confirm-actions">
              <Button
                btnType={'button'}
                btnText={'Delete'}
                btnColor={'danger'}
                onClickFunc={handleDeleteCash}
              />
              <Button
                btnType={'button'}
                btnText={'Cancel'}
                btnColor={'lightGray'}
                onClickFunc={closeConfirmModal}
              />
            </div>
          </div>
        </Modal>
      )}
    </tr>
  );
}

CashItem.propTypes = {
  amount: PropTypes.number,
  transactionType: PropTypes.string,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  openEditCashModal: PropTypes.func,
  deleteCash: PropTypes.func,
  showAlert: PropTypes.func
};

const mapStateToProps = (state) => ({
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  deleteCash,
  showAlert
})(CashItem);
