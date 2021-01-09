import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PortfolioItem from './PortfolioItem';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import {
  loadPortfolios,
  createPortfolio,
  getDefaultPortfolio
} from '../../actions/portfolioAction';
import { showAlert } from '../../actions/alertAction';

const Portfolios = ({
  loading,
  isAuthenticated,
  portfolioList,
  defaultPortfolio,
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

  useEffect(() => {
    if (isNameEmptyErr && newPortfolioName.trim() !== '') {
      setIsPfNameEmpty(false);
    }
    else if (isNameEmptyErr && newPortfolioName.trim() === '') {
      setIsPfNameEmpty(true);
    }
  }, [newPortfolioName, isNameEmptyErr]);

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

  if (!isAuthenticated && !loading) {
    return <Redirect to="/login" />
  }

  return (
    <React.Fragment>
      <main className="portfolio-container">
        <Button
          btnType="button"
          btnText="Add New Portfolio"
          onClickFunc={openAddModal}
        />
        {portfolioList.length > 0 ? (
          <ul className="portfolio-list">
            {portfolioList.map((portfolio) => (
              <PortfolioItem
                key={portfolio.portfolioId}
                portfolio={portfolio}
                defaultPortfolio={defaultPortfolio}
              />
            ))}
          </ul>
        ) : <div className="no-portfolio-notice">CREATE YOUR FIRST PORTFOLIO!</div>}
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
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" >
                  <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm193.2 152h-82.5c-9-44.4-24.1-82.2-43.2-109.1 55 18.2 100.2 57.9 125.7 109.1zM336 256c0 22.9-1.6 44.2-4.3 64H164.3c-2.7-19.8-4.3-41.1-4.3-64s1.6-44.2 4.3-64h167.4c2.7 19.8 4.3 41.1 4.3 64zM248 40c26.9 0 61.4 44.1 78.1 120H169.9C186.6 84.1 221.1 40 248 40zm-67.5 10.9c-19 26.8-34.2 64.6-43.2 109.1H54.8c25.5-51.2 70.7-90.9 125.7-109.1zM32 256c0-22.3 3.4-43.8 9.7-64h90.5c-2.6 20.5-4.2 41.8-4.2 64s1.5 43.5 4.2 64H41.7c-6.3-20.2-9.7-41.7-9.7-64zm22.8 96h82.5c9 44.4 24.1 82.2 43.2 109.1-55-18.2-100.2-57.9-125.7-109.1zM248 472c-26.9 0-61.4-44.1-78.1-120h156.2c-16.7 75.9-51.2 120-78.1 120zm67.5-10.9c19-26.8 34.2-64.6 43.2-109.1h82.5c-25.5 51.2-70.7 90.9-125.7 109.1zM363.8 320c2.6-20.5 4.2-41.8 4.2-64s-1.5-43.5-4.2-64h90.5c6.3 20.2 9.7 41.7 9.7 64s-3.4 43.8-9.7 64h-90.5z" />
                </svg>
                Public
                </button>
              <button
                type="button"
                className={`${privacy === 'private' ? 'pf-privacy-btn pf-privacy-checked' : 'pf-privacy-btn'}`}
                onClick={privacyToPrivate}
              >
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                  <path fill="currentColor" d="M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48 21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z" />
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

Portfolios.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  portfolioList: PropTypes.array,
  defaultPortfolio: PropTypes.number,
  loadPortfolios: PropTypes.func,
  getDefaultPortfolio: PropTypes.func,
  createPortfolio: PropTypes.func,
  showAlert: PropTypes.func
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  portfolioList: state.portfolio.portfolioList,
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  loadPortfolios,
  getDefaultPortfolio,
  createPortfolio,
  showAlert
})(Portfolios);
