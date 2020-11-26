import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PortfolioItem from './PortfolioItem';
import {
  loadPortfolios,
  getSelectedPortfolio
} from '../../actions/portfolioAction';
import './portfolio.css';

import Modal from '../modal/Modal';
import { createPortfolio } from '../../actions/portfolioAction';
import { showAlert } from '../../actions/alertAction';

const ManagePortfolio = ({
  loading,
  isAuthenticated,
  portfolioList,
  currentPortfolio,
  loadPortfolios,
  getSelectedPortfolio,
  createPortfolio,
  showAlert
}) => {
  useEffect(() => { loadPortfolios() }, [loadPortfolios]);
  useEffect(() => { getSelectedPortfolio() }, [getSelectedPortfolio]);

  const [newPortfolioName, setNewPortfolioName] = useState('');
  const [isNameEmptyErr, setIsNameEmptyErr] = useState(false);
  const [isPfNameEmpty, setIsPfNameEmpty] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddFail, setIsAddFail] = useState(false);

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
    setIsAddFail(false);
    if (newPortfolioName.trim() === '') {
      setIsPfNameEmpty(true);
      setIsNameEmptyErr(true);
    }
    else {
      const isNameDuplicate = await createPortfolio(newPortfolioName);
      if (!isNameDuplicate) {
        closeAddModal();
        showAlert('Portfolio was successfully added!', 'success');
      }
      else {
        setIsAddFail(isNameDuplicate);
      }
    }
  }

  const openAddModal = () => {
    setIsAddModalOpen(true);
  }

  const closeAddModal = () => {
    setIsNameEmptyErr(false);
    setIsPfNameEmpty(false);
    setIsAddFail(false);
    setIsAddModalOpen(false);
    setNewPortfolioName('');
  }

  if (!isAuthenticated && !loading) {
    return <Redirect to="/login" />
  }

  return (
    <React.Fragment>
      <div className="portfolios-container">
        <button className="btn btn-new-portfolio" onClick={openAddModal} >ADD NEW PORTFOLIO</button>
        {portfolioList.length > 0 ? portfolioList.map((portfolio) => (
          <PortfolioItem
            key={portfolio.portfolioId}
            portfolio={portfolio}
            currentPortfolio={currentPortfolio}
          />
        )) : <div className="no-portfolio-notice">CREATE YOUR FIRST PORTFOLIO!</div>}
      </div>
      {isAddModalOpen &&
        <Modal closeModalFunc={closeAddModal}>
          <div className="portfolio-form">
            <label
              className={`portfolio-form-label ${(isAddFail || isPfNameEmpty) && "form-label-error"}`}
            >Portfolio Name: </label>
            <input
              type="text"
              value={newPortfolioName}
              onChange={handleAddPfName}
              className={`portfolio-form-field ${(isAddFail || isPfNameEmpty) && "form-field-error"}`}
            />
            {isAddFail ? (
              <small className="notice-pf-name-error">Name is duplicated!</small>
            ) : null}
            {isPfNameEmpty ? (
              <small className="notice-pf-name-error">Name is Empty!</small>
            ) : null}
            <button
              className="btn portfolio-form-btn pf-add-btn"
              onClick={handleAddPortfolio}
              disabled={isPfNameEmpty}
            >CREATE</button>
          </div>
        </Modal>}
    </React.Fragment>
  );
}

ManagePortfolio.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  portfolioList: PropTypes.array,
  currentPortfolio: PropTypes.number,
  loadPortfolios: PropTypes.func,
  getSelectedPortfolio: PropTypes.func,
  createPortfolio: PropTypes.func,
  showAlert: PropTypes.func
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  portfolioList: state.portfolio.portfolioList,
  currentPortfolio: state.portfolio.currentPortfolio
});

export default connect(mapStateToProps, {
  loadPortfolios,
  getSelectedPortfolio,
  createPortfolio,
  showAlert
})(ManagePortfolio);
