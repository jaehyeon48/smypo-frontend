import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Modal from '../modal/Modal';
import Button from '../button/Button';
import UnLockedLockIcon from '../icons/UnLockedLockIcon';
import LockedLockIcon from '../icons/LockedLockIcon';
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
      showAlert('Portfolio was successfully added!', 'success');
      closeAddModal();
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
        <header className="portfolio-form__header">Create New Portfolio</header>
        <label
          className={`portfolio-form-label${isPfNameEmpty ? '--error' : ''}`}
        >New Portfolio Name
        <input
            type="text"
            value={newPortfolioName}
            onChange={handleAddPfName}
            data-is-empty={newPortfolioName.length === 0}
            className={`portfolio-form-field${isPfNameEmpty ? '--error' : ''}`}
          />
        </label>
        <div className="portfolio-privacy-buttons">
          <button
            type="button"
            className={`pf-privacy-btn${privacy === 'public' ? '--checked' : ''}`}
            onClick={privacyToPublic}
          >
            <UnLockedLockIcon />
            Public
          </button>
          <button
            type="button"
            className={`pf-privacy-btn${privacy === 'private' ? '--checked' : ''}`}
            onClick={privacyToPrivate}
          >
            <LockedLockIcon />
            Private
          </button>
        </div>
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
