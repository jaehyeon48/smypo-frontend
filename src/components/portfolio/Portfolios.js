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
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                </svg>
                Public
                </button>
              <button
                type="button"
                className={`${privacy === 'private' ? 'pf-privacy-btn pf-privacy-checked' : 'pf-privacy-btn'}`}
                onClick={privacyToPrivate}
              >
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
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
