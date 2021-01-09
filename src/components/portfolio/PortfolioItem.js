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