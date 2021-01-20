import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import StockGroupItem from './StockGroupItem';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import {
  getStocks,
  getStocksByTickerGroup,
  closePosition
} from '../../actions/stockAction';
import { showAlert } from '../../actions/alertAction';
import { getCompanyInfo } from '../../utils/getCompanyInfo';
import EditTransaction from './EditTransaction';
import CompanyInfo from './CompanyInfo';

const Position = ({
  match,
  stockGroup,
  stockGroupLoading,
  getStocks,
  getStocksByTickerGroup,
  closePosition,
  showAlert
}) => {
  let history = useHistory();
  const PORTFOLIO_ID = match.params.portfolioId;
  const TICKER = match.params.ticker;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    stockId: '',
    ticker: TICKER.toUpperCase(),
    price: '',
    quantity: '',
    transactionType: '',
    transactionDate: ''
  });
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    if (PORTFOLIO_ID && TICKER) {
      getStocksByTickerGroup(PORTFOLIO_ID, TICKER);
    }
  }, [PORTFOLIO_ID, TICKER]);

  useEffect(() => {
    getStocks(PORTFOLIO_ID);
  }, [PORTFOLIO_ID]);

  useEffect(() => {
    if (!stockGroupLoading && stockGroup && stockGroup.length === 0) {
      history.push('/stocks');
    }
  }, [stockGroupLoading, stockGroup]);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  }

  const openInfoModal = () => {
    setIsInfoModalOpen(true);
  }
  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
  }

  const handleClosePosition = async () => {
    if (window.confirm('Do you really want to close this position?')) {
      const closePositionResult = await closePosition(PORTFOLIO_ID, TICKER);
      if (closePositionResult === 0) {
        history.push('/stocks');
        window.location.reload();
      }
      else if (closePositionResult === -1) {
        showAlert('Something went wrong. Please try again!', 'fail');
      }
    }
  }

  useEffect(() => {
    (async () => {
      const companyInfoResult = await getCompanyInfo(TICKER);
      setCompanyInfo(companyInfoResult);
    })();
  }, [TICKER]);

  return (
    <main className="position-main">
      <header className="position-header">
        <span onClick={openInfoModal}>{TICKER.toUpperCase()}</span>
        <span>{companyInfo && companyInfo.companyName}</span>
      </header>
      <Button
        btnType={'button'}
        btnText={'Close position'}
        btnColor={'danger'}
        onClickFunc={handleClosePosition}
      />
      <div className="stock-group-container">
        <header className="stock-group__header">
          Transaction History
      </header>
        <div className="stock-group-table-wrapper">
          <table className="stock-group-table">
            <thead>
              <tr>
                <th className="stock-group-item__type-header">Type</th>
                <th className="stock-group-item__amount-header">price</th>
                <th className="stock-group-item__quantity-header">Quantity</th>
                <th className="stock-group-item__date-header">Date</th>
              </tr>
            </thead>
            <tbody>
              {stockGroup && stockGroup.map(item => (
                <StockGroupItem
                  key={item.stockId}
                  stockId={item.stockId}
                  price={item.price}
                  quantity={item.quantity}
                  transactionType={item.transactionType}
                  transactionDate={new Date(item.transactionDate).toJSON().slice(0, 10)}
                  formData={formData}
                  openEditModal={openEditModal}
                  setFormData={setFormData}
                />))}
            </tbody>
          </table>
        </div>
      </div>
      {isEditModalOpen && (
        <Modal closeModalFunc={closeEditModal}>
          <EditTransaction
            formData={formData}
            setFormData={setFormData}
          />
        </Modal>
      )}
      {isInfoModalOpen && (
        <Modal closeModalFunc={closeInfoModal} overflowY={true}>
          <CompanyInfo companyInfo={companyInfo} />
        </Modal>
      )}
    </main>
  );
}

Position.propTypes = {
  match: PropTypes.object,
  stockGroupLoading: PropTypes.bool,
  getStocksByTickerGroup: PropTypes.func,
  closePosition: PropTypes.func,
  showAlert: PropTypes.func
};

const mapStateToProps = (state) => ({
  stockGroup: state.stock.stockGroup,
  stockGroupLoading: state.stock.stockGroupLoading
});

export default connect(mapStateToProps, {
  getStocksByTickerGroup,
  getStocks,
  closePosition,
  showAlert
})(Position);
