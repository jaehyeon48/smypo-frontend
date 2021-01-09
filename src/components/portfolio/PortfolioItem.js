import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Modal from '../modal/Modal';
import Button from '../button/Button';
import {
  editPortfolio,
  deletePortfolio,
  chooseDefaultPortfolio
} from '../../actions/portfolioAction';
import { showAlert } from '../../actions/alertAction';

const PortfolioItem = ({
  portfolio,
  defaultPortfolio,
  chooseDefaultPortfolio,
  editPortfolio,
  deletePortfolio,
  showAlert
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [pfNameToBeEdited, setPfNameToBeEdited] = useState(portfolio.portfolioName);
  const [privacy, setPrivacy] = useState(portfolio.portfolioPrivacy);
  const [isDefault, setIsDefault] = useState(false);
  const [isNameEmptyErr, setIsNameEmptyErr] = useState(false);
  const [isPfNameEmpty, setIsPfNameEmpty] = useState(false);

  useEffect(() => {
    if (portfolio.portfolioId === defaultPortfolio) {
      setIsDefault(true);
    } else {
      setIsDefault(false);
    }
  }, [defaultPortfolio]);

  useEffect(() => {
    if (isNameEmptyErr && pfNameToBeEdited.trim() !== '') {
      setIsPfNameEmpty(false);
    }
    else if (isNameEmptyErr && pfNameToBeEdited.trim() === '') {
      setIsPfNameEmpty(true);
    }
  }, [pfNameToBeEdited, isNameEmptyErr]);


  const openPfEditModal = () => {
    setIsEditModalOpen(true);
  }

  const closeEditModal = () => {
    setIsNameEmptyErr(false);
    setIsPfNameEmpty(false);
    setIsEditModalOpen(false);
  }

  const openDeleteConfirmModal = () => {
    setIsConfirmModalOpen(true);
  }

  const closeDeleteConfirmModal = () => {
    setIsConfirmModalOpen(false);
  }

  const handleEditPfName = (e) => {
    setPfNameToBeEdited(e.target.value);
  }

  const handleEditPortfolio = async () => {
    setIsNameEmptyErr(false);
    setIsPfNameEmpty(false);
    if (pfNameToBeEdited.trim() === '') {
      setIsPfNameEmpty(true);
      setIsNameEmptyErr(true);
    }
    else {
      editPortfolio({
        portfolioId: portfolio.portfolioId,
        newPortfolioName: pfNameToBeEdited,
        newPortfolioPrivacy: privacy
      });
      closeEditModal();
      showAlert('The portfolio has been updated successfully.', 'success');
    }
  }

  const privacyToPrivate = () => {
    setPrivacy('private');
  }

  const privacyToPublic = () => {
    setPrivacy('public');
  }

  const handleChooseDefault = () => {
    if (!isDefault) {
      chooseDefaultPortfolio(portfolio.portfolioId);
    }
  }

  const handleDeletePortfolio = () => {
    deletePortfolio(portfolio.portfolioId);
    showAlert('The portfolio has been deleted successfully.', 'success');
  }

  return (
    <React.Fragment>
      <li className="portfolio-item">
        <div className="portfolio-item-name">
          {portfolio.portfolioName}
        </div>
        <div className={`portfolio-item-privacy
          ${portfolio.portfolioPrivacy === 'public' ? "portfolio--public" : "portfolio--private"}`}>
          {portfolio.portfolioPrivacy}
        </div>
        <div className="portfolio-item-default">
          <span
            className={`portfolio-default-notice ${isDefault ? "pf--default" : "pf--not-default"}`}
            onClick={handleChooseDefault}
          >
            DEFAULT
          </span>
        </div>
        <div className="portfolio-item-actions">
          <Button
            btnType={'button'}
            btnText={'Edit'}
            btnColor={'warning'}
            onClickFunc={openPfEditModal}
          />
          <Button
            btnType={'button'}
            btnText={'Delete'}
            btnColor={'danger'}
            onClickFunc={openDeleteConfirmModal}
          />
          <Button
            btnType={'button'}
            btnText={'Detail'}
            btnColor={'lightGray'}
          />
        </div>
        {isEditModalOpen && (
          <Modal closeModalFunc={closeEditModal}>
            <div className="portfolio-form">
              <input
                type="text"
                value={pfNameToBeEdited}
                onChange={handleEditPfName}
                data-is-empty={pfNameToBeEdited.length === 0}
                className={isPfNameEmpty ? "portfolio-form-field portfolio-form-field-error"
                  : "portfolio-form-field"}
              />
              <label
                className={isPfNameEmpty ? "portfolio-form-label portfolio-form-label-error"
                  : "portfolio-form-label"}
              >Edit Portfolio Name</label>
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
                btnText={'EDIT'}
                btnColor={'warning'}
                onClickFunc={handleEditPortfolio}
                isDisabled={isPfNameEmpty}
              />
            </div>
          </Modal>
        )}
        {isConfirmModalOpen && (
          <Modal closeModalFunc={closeDeleteConfirmModal}>
            <div className="delete-confirm">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
              </svg>
              <p>
                Do you really want to delete
                <span className="to-delete-name">{portfolio.portfolioName}</span>?
              </p>
              <div className="delete-confirm-actions">
                <Button
                  btnType={'button'}
                  btnText={'Delete'}
                  btnColor={'danger'}
                  onClickFunc={handleDeletePortfolio}
                />
                <Button
                  btnType={'button'}
                  btnText={'Cancel'}
                  btnColor={'lightGray'}
                  onClickFunc={closeDeleteConfirmModal}
                />
              </div>
            </div>
          </Modal>
        )}
      </li>
    </React.Fragment>
  );
}

PortfolioItem.propTypes = {
  editPortfolio: PropTypes.func,
  deletePortfolio: PropTypes.func,
  showAlert: PropTypes.func
};

export default connect(null, {
  editPortfolio,
  chooseDefaultPortfolio,
  deletePortfolio,
  showAlert
})(PortfolioItem);