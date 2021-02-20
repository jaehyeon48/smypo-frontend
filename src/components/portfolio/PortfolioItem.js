import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Modal from '../modal/Modal';
import ConfirmModal from '../modal/ConfirmModal';
import Button from '../button/Button';
import {
  editPortfolio,
  deletePortfolio,
  chooseDefaultPortfolio
} from '../../actions/portfolioAction';
import { showAlert } from '../../actions/alertAction';

const PortfolioItem = ({
  isLoadingPortfolioData,
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
    <tr className="portfolio-item">
      <td className="portfolio-item-name">
        {portfolio.portfolioName}
      </td>
      <td className="portfolio-item-privacy">
        {portfolio.portfolioPrivacy === 'public' ? (
          <span>
            Public
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="portfolio-privacy-icon">
              <path fill="currentColor" d="M432.3 0C352.8-.2 288 64.5 288 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48h-64v-46.8c0-52.8 42.1-96.7 95-97.2 53.4-.6 97 42.7 97 96v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-54.6C576 65.8 512 .2 432.3 0zM400 240v224H48V240h352z" />
            </svg>
          </span>
        ) : (
            <span>
              Private
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="portfolio-privacy-icon">
                <path fill="currentColor" d="M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z" />
              </svg>
            </span>
          )}
      </td>
      <td className="portfolio-item-default">
        {isDefault ? (
          <span className="portfolio-item__default-text">Default</span>
        ) : (
            <Button
              btnType={'button'}
              btnText={'Set Default'}
              onClickFunc={handleChooseDefault}
              isDisabled={isLoadingPortfolioData}
            />
          )}
      </td>
      <td className="portfolio-item-edit">
        <Button
          btnType={'button'}
          btnText={'Edit'}
          btnColor={'warning'}
          onClickFunc={openPfEditModal}
        />
      </td>
      <td className="portfolio-item-delete">
        <Button
          btnType={'button'}
          btnText={'Delete'}
          btnColor={'danger'}
          onClickFunc={openDeleteConfirmModal}
        />
      </td>
      <td className="portfolio-item-detail">
        <Button
          btnType={'button'}
          btnText={'Detail'}
          btnColor={'blue'}
        />
      </td>
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
              btnText={'EDIT'}
              btnColor={'warning'}
              onClickFunc={handleEditPortfolio}
              isDisabled={isPfNameEmpty}
            />
          </div>
        </Modal>
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          confirmMsg={'Do you really want to delete this portfolio?'}
          confirmAction={handleDeletePortfolio}
          closeModalFunc={closeDeleteConfirmModal}
        />
      )}
    </tr>
  );
}

export default connect(null, {
  editPortfolio,
  chooseDefaultPortfolio,
  deletePortfolio,
  showAlert
})(PortfolioItem);