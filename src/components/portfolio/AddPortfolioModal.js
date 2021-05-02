import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Modal from '../modal/Modal';
import Button from '../button/Button';
import { createPortfolio } from '../../actions/portfolioAction';
import { showAlert } from '../../actions/alertAction';

const AddPortfolioModal = ({
  closeAddModal,
  createPortfolio,
  showAlert
}) => {
  const [newPortfolioName, setNewPortfolioName] = useState('');
  const [isNameEmptyErr, setIsNameEmptyErr] = useState(false);
  const [isPfNameEmpty, setIsPfNameEmpty] = useState(false);
  const [privacy, setPrivacy] = useState('public');

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

  const privacyToPrivate = () => {
    setPrivacy('private');
  }

  const privacyToPublic = () => {
    setPrivacy('public');
  }

  return (
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
    </Modal>
  );
}

export default connect(null, {
  createPortfolio,
  showAlert
})(AddPortfolioModal);
