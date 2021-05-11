import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import PortfolioItem from './PortfolioItem';
import CurrentPortfolioName from './CurrentPortfolioName';
import PortfolioDataSpinner from '../spinners/PortfolioDataSpinner';
import ModalButton from '../modal/ModalButton';
import AddPortfolioModal from './AddPortfolioModal';
import EditPortfolioModal from './EditPortfolioModal';
import ConfirmModal from '../modal/ConfirmModal';
import {
  loadPortfolios,
  chooseDefaultPortfolio,
  getDefaultPortfolio,
  deletePortfolio
} from '../../actions/portfolioAction';
import { showAlert } from '../../actions/alertAction';

const Portfolios = ({
  portfolio,
  stock,
  cash,
  loadPortfolios,
  chooseDefaultPortfolio,
  getDefaultPortfolio,
  deletePortfolio,
  showAlert
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [toDeletePortfolioId, setToDeletePortfolioId] = useState(0);
  const [isLoadingPortfolioData, setIsLoadingPortfolioData] = useState(false);
  const [toBeEditedPfId, setToBeEditedPfId] = useState('');
  const [toBeEditedPfName, setToBeEditedPfName] = useState('');
  const [toBeEditedPfPrivacy, setToBeEditedPfPrivacy] = useState('');

  useEffect(() => {
    if (portfolio.portfolioListStatus === 'initial' ||
      portfolio.portfolioListStatus === 'idle') {
      loadPortfolios();
    }
  }, [portfolio, loadPortfolios]);

  useEffect(() => {
    if (portfolio.defaultPortfolioStatus === 'initial' ||
      portfolio.defaultPortfolioStatus === 'idle') {
      getDefaultPortfolio();
    }
  }, [portfolio, getDefaultPortfolio]);

  useEffect(() => {
    if (portfolio.portfolioListStatus === 'loading' ||
      portfolio.defaultPortfolioStatus === 'loading' ||
      stock.stockStatus === 'loading' ||
      stock.stockGroupStatus === 'loading' ||
      cash.cashListStatus === 'loading' ||
      cash.totalCashStatus === 'loading') {
      setIsLoadingPortfolioData(true);
    } else {
      setIsLoadingPortfolioData(false);
    }
  }, [
    portfolio.portfolioListStatus,
    portfolio.defaultPortfolioStatus,
    stock.stockStatus,
    stock.stockGroupStatus,
    cash.cashListStatus,
    cash.totalCashStatus
  ]);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  }

  const closeAddModal = () => {
    // setIsNameEmptyErr(false);
    // setIsPfNameEmpty(false);
    setIsAddModalOpen(false);
    // setNewPortfolioName('');
  }

  const openEditModal = (pfId, pfName, pfPrivacy) => {
    setToBeEditedPfId(pfId);
    setToBeEditedPfName(pfName);
    setToBeEditedPfPrivacy(pfPrivacy);
    setIsEditModalOpen(true);
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  }

  const openDeleteConfirmModal = (portfolioId) => {
    setToDeletePortfolioId(portfolioId);
    setIsConfirmModalOpen(true);
  }

  const closeDeleteConfirmModal = () => {
    setToDeletePortfolioId(0);
    setIsConfirmModalOpen(false);
  }

  const handleDeletePortfolio = async () => {
    const deleteRes = await deletePortfolio(toDeletePortfolioId);
    if (deleteRes[0] === 0) {
      showAlert('The portfolio has been deleted successfully.', 'success');
      if (deleteRes[1] !== -1) {
        chooseDefaultPortfolio(deleteRes[1]);
      }
    } else {
      showAlert('Something wrong happened. Please try again.', 'error');
    }
    closeDeleteConfirmModal();
  }

  return (
    <React.Fragment>
      <main className="portfolio-main">
        <CurrentPortfolioName />
        <section className="portfolio-list-section">
          <div className="portfolios-btn-container">
            <ModalButton
              btnType="button"
              btnText="Add New Portfolio"
              isDisabled={isLoadingPortfolioData}
              openModalFunc={openAddModal}
            />
          </div>
          <div className="portfolios-container">
            {isLoadingPortfolioData && <PortfolioDataSpinner />}
            <header className="portfolios-container__header">Portfolios</header>
            <div className="portfolios-table-wrapper">
              {portfolio.portfolioList.length > 0 ? (
                <table className="portfolio-table">
                  <thead>
                    <tr>
                      <th className="portfolio-item__name-header">Name</th>
                      <th className="portfolio-item__privacy-header">Privacy</th>
                      <th className="portfolio-item__default-header">Default</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.portfolioList.map((portfolioItem) => (
                      <PortfolioItem
                        key={portfolioItem.portfolioId}
                        thisPortfolio={portfolioItem}
                        defaultPortfolio={portfolio.defaultPortfolio}
                        openEditModal={openEditModal}
                        openConfirmModal={openDeleteConfirmModal}
                        isLoadingPortfolioData={isLoadingPortfolioData}
                      />
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="notice-empty-portfolio-list">
                  <p>Portfolio list is empty.</p>
                </div>)}
            </div>
          </div>
        </section>
      </main>
      {isAddModalOpen && <AddPortfolioModal closeAddModal={closeAddModal} />}
      {isEditModalOpen && <EditPortfolioModal
        closeEditModal={closeEditModal}
        origPfId={toBeEditedPfId}
        origPfName={toBeEditedPfName}
        origPfPrivacy={toBeEditedPfPrivacy}
      />}
      {isConfirmModalOpen && (
        <ConfirmModal
          confirmMsg={'Do you really want to delete this portfolio?'}
          confirmAction={handleDeletePortfolio}
          closeModalFunc={closeDeleteConfirmModal}
        />
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  stock: state.stock,
  cash: state.cash
});

export default connect(mapStateToProps, {
  loadPortfolios,
  chooseDefaultPortfolio,
  getDefaultPortfolio,
  deletePortfolio,
  showAlert
})(Portfolios);
