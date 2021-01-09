import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CashItem from './CashItem';
import Spinner from '../spinner/Spinner';
import DollarSignIcon from '../icons/DollarSignIcon';
import Modal from '../modal/Modal';
import Button from '../button/Button';
import AddCash from './AddCash';
import EditCash from './EditCash';
import { getDefaultPortfolio } from '../../actions/portfolioAction';
import {
  getTotalCash,
  getCash
} from '../../actions/cashAction';

const Cash = ({
  loading,
  isAuthenticated,
  defaultPortfolio,
  cashLoading,
  totalCash,
  cashList,
  getDefaultPortfolio,
  getCash,
  getTotalCash
}) => {
  const [isAddCashModalOpen, setIsAddCashModalOpen] = useState(false);
  const [isEditCashModalOpen, setIsEditCashModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    cashId: '',
    amount: '',
    transactionType: 'deposit',
    transactionDate: new Date().toJSON().slice(0, 10)
  });

  useEffect(() => {
    getDefaultPortfolio();
  }, []);

  useEffect(() => {
    if (defaultPortfolio) {
      getCash(defaultPortfolio);
      getTotalCash(defaultPortfolio);
    }
  }, [defaultPortfolio]);

  useEffect(() => {
    if (cashList.length > 0) {
    }
  }, [cashList]);

  const openAddCashModal = () => {
    setIsAddCashModalOpen(true);
  }

  const closeAddCashModal = () => {
    setIsAddCashModalOpen(false);
  }

  const openEditCashModal = () => {
    setIsEditCashModalOpen(true);
  }

  const closeEditCashModal = () => {
    setIsEditCashModalOpen(false);
  }

  if (!loading && !isAuthenticated) {
    return <Redirect to="/login" />
  }

  return (
    <React.Fragment>
      {!cashLoading ? (
        <main className="cash-main">
          <Button
            btnType={'button'}
            btnText={'Add cash transaction'}
            onClickFunc={openAddCashModal}
          />
          {cashList && cashList.length > 0 ? (
            <React.Fragment>
              <div className="cash-total-amount">
                <span>Total Cash</span>
                <span><DollarSignIcon />{totalCash}</span>
              </div>
              <div className="cash-items">
                {cashList.map((cash) => (
                  <CashItem
                    key={cash.cashId}
                    cashId={cash.cashId}
                    amount={cash.amount}
                    transactionType={cash.transactionType}
                    transactionDate={new Date(cash.transactionDate).toJSON().slice(0, 10)}
                    formData={formData}
                    setFormData={setFormData}
                    openEditCashModal={openEditCashModal}
                  />
                ))}
              </div>
            </React.Fragment>
          ) : (<div className="no-cash-notice">The cash list is empty.</div>)}
          {isAddCashModalOpen && (
            <Modal closeModalFunc={closeAddCashModal}>
              <AddCash closeAddCashModal={closeAddCashModal} />
            </Modal>
          )}
          {isEditCashModalOpen && (
            <Modal closeModalFunc={closeEditCashModal}>
              <EditCash
                closeEditCashModal={closeEditCashModal}
                formData={formData}
                setFormData={setFormData} />
            </Modal>
          )}
        </main>
      ) : (<Spinner />)}
    </React.Fragment>
  );
}

Cash.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  defaultPortfolio: PropTypes.number,
  cashLoading: PropTypes.bool,
  cashList: PropTypes.array,
  totalCash: PropTypes.number,
  getDefaultPortfolio: PropTypes.func,
  getCash: PropTypes.func,
  getTotalCash: PropTypes.func
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  defaultPortfolio: state.portfolio.defaultPortfolio,
  cashLoading: state.cash.cashLoading,
  cashList: state.cash.cashList,
  totalCash: state.cash.totalCash
});

export default connect(mapStateToProps, {
  getDefaultPortfolio,
  getCash,
  getTotalCash
})(Cash);
