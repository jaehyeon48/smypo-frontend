import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import PortfolioItem from './PortfolioItem';
import CurrentPortfolioName from './CurrentPortfolioName';
import PortfolioDataSpinner from '../spinners/PortfolioDataSpinner';
import ModalButton from '../modal/ModalButton';
import AddPortfolioModal from './AddPortfolioModal';
import {
  loadPortfolios,
  getDefaultPortfolio
} from '../../actions/portfolioAction';

const Portfolios = ({
  portfolio,
  stock,
  cash,
  loadPortfolios,
  getDefaultPortfolio
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoadingPortfolioData, setIsLoadingPortfolioData] = useState(false);

  useEffect(() => {
    if (portfolio.portfolioListStatus !== 'succeeded' &&
      portfolio.portfolioListStatus !== 'loading') {
      loadPortfolios();
    }
  }, [portfolio, loadPortfolios]);

  useEffect(() => {
    if (portfolio.defaultPortfolioStatus !== 'succeeded' &&
      portfolio.defaultPortfolioStatus !== 'loading') {
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
                        portfolio={portfolioItem}
                        defaultPortfolio={portfolio.defaultPortfolio}
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
  getDefaultPortfolio
})(Portfolios);
