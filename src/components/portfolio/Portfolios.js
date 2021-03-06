import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import PortfolioItem from './PortfolioItem';
import CurrentPortfolioName from './CurrentPortfolioName';
import PortfolioDataSpinner from '../spinners/PortfolioDataSpinner';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import {
  loadPortfolios,
  createPortfolio,
  getDefaultPortfolio
} from '../../actions/portfolioAction';
import { showAlert } from '../../actions/alertAction';

const Portfolios = ({
  portfolio,
  stock,
  cash,
  loadPortfolios,
  getDefaultPortfolio,
  createPortfolio,
  showAlert
}) => {
  useEffect(() => { loadPortfolios() }, [loadPortfolios]);
  useEffect(() => { getDefaultPortfolio() }, [getDefaultPortfolio]);

  const [newPortfolioName, setNewPortfolioName] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [isNameEmptyErr, setIsNameEmptyErr] = useState(false);
  const [isPfNameEmpty, setIsPfNameEmpty] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isLoadingPortfolioData, setIsLoadingPortfolioData] = useState(false);

  useEffect(() => {
    if (isNameEmptyErr && newPortfolioName.trim() !== '') {
      setIsPfNameEmpty(false);
    }
    else if (isNameEmptyErr && newPortfolioName.trim() === '') {
      setIsPfNameEmpty(true);
    }
  }, [newPortfolioName, isNameEmptyErr]);

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

  const handleAddPfName = (e) => {
    setNewPortfolioName(e.target.value);
  }

  const handleAddPortfolio = async () => {
    setIsNameEmptyErr(false);
    setIsPfNameEmpty(false);
    if (newPortfolioName.trim() === '') {
      setIsPfNameEmpty(true);
      setIsNameEmptyErr(true);
    }
    else {
      createPortfolio(newPortfolioName, privacy);
      closeAddModal();
      showAlert('Portfolio was successfully added!', 'success');
    }
  }

  const openAddModal = () => {
    setIsAddModalOpen(true);
  }

  const closeAddModal = () => {
    setIsNameEmptyErr(false);
    setIsPfNameEmpty(false);
    setIsAddModalOpen(false);
    setNewPortfolioName('');
  }

  const privacyToPrivate = () => {
    setPrivacy('private');
  }

  const privacyToPublic = () => {
    setPrivacy('public');
  }

  return (
    <React.Fragment>
      <main className="portfolio-main">
        <CurrentPortfolioName />
        <section className="portfolio-list-section">
          <div className="portfolios-btn-container">
            <Button
              btnType="button"
              btnText="Add New Portfolio"
              onClickFunc={openAddModal}
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
                  {portfolio.portfolioList.map((portfolioItem) => (
                    <PortfolioItem
                      key={portfolioItem.portfolioId}
                      portfolio={portfolioItem}
                      defaultPortfolio={portfolio.defaultPortfolio}
                      isLoadingPortfolioData={isLoadingPortfolioData}
                    />
                  ))}
                </table>
              ) : (
                  <div className="notice-empty-portfolio-list">
                    <p>Portfolio list is empty.</p>
                  </div>)}
            </div>
          </div>
        </section>
      </main>
      {isAddModalOpen &&
        <Modal closeModalFunc={closeAddModal}>
          <div className="portfolio-form">
            <input
              type="text"
              value={newPortfolioName}
              onChange={handleAddPfName}
              data-is-empty={newPortfolioName.length === 0}
              className={isPfNameEmpty ? "portfolio-form-field portfolio-form-field-error"
                : "portfolio-form-field"}
            />
            <label
              className={isPfNameEmpty ? "portfolio-form-label portfolio-form-label-error"
                : "portfolio-form-label"}
            >New Portfolio Name</label>
            <div className="portfolio-privacy-buttons">
              <button
                type="button"
                className={`${privacy === 'public' ? 'pf-privacy-btn pf-privacy-checked' : 'pf-privacy-btn'}`}
                onClick={privacyToPublic}
              >
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M432.3 0C352.8-.2 288 64.5 288 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-64v-46.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-54.6C576 65.8 512 .2 432.3 0zM400 240v224H48V240h352z" />
                </svg>
                Public
                </button>
              <button
                type="button"
                className={`${privacy === 'private' ? 'pf-privacy-btn pf-privacy-checked' : 'pf-privacy-btn'}`}
                onClick={privacyToPrivate}
              >
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z" />
                </svg>
              Private
              </button>
            </div>
            {isPfNameEmpty ? (
              <p className="notice-pf-name-error">Name Is Empty.</p>
            ) : null}
            <Button
              btnType={'button'}
              btnText={'CREATE'}
              onClickFunc={handleAddPortfolio}
              isDisabled={isPfNameEmpty}
            />
          </div>
        </Modal>}
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
  getDefaultPortfolio,
  createPortfolio,
  showAlert
})(Portfolios);
