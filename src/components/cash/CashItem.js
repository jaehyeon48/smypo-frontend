import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../button/Button';
import DollarSignIcon from '../icons/DollarSignIcon';
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
  showAlert
}) => {

  const handleDeleteCash = async () => {
    if (window.confirm('Do you really want to delete the cash transaction record?')) {
      const deleteResult = await deleteCash(cashId);
      if (deleteResult === 0) {
        window.location.reload();
      }
      else {
        showAlert('Something went wrong. Please try again!', 'fail');
      }
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
    <div className="cash-item">
      <div className="cash-item-type">{transactionType}</div>
      <div className="cash-item-amount"><DollarSignIcon/>{amount}</div>
      <div className="cash-item-date">{transactionDate.slice(2)}</div>
      <div className="cash-item-actions">
        <Button
          btnType={'button'}
          btnText={'Edit'}
          btnColor={'warning'}
          onClickFunc={handleOpenEditCashModal}
        />
        <Button
          btnType={'button'}
          btnText={'Delete'}
          btnColor={'danger'}
          onClickFunc={handleDeleteCash}
        />
      </div>
    </div>
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

export default connect(null, {
  deleteCash,
  showAlert
})(CashItem);
