import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from '../modal/Modal';
import Button from '../button/Button';
import UnLockedLockIcon from '../icons/UnLockedLockIcon';
import LockedLockIcon from '../icons/LockedLockIcon';

import { editPortfolio } from '../../actions/portfolioAction';
import { showAlert } from '../../actions/alertAction';

const EditPortfolioModal = ({
  closeEditModal,
  origPfId,
  origPfName,
  origPfPrivacy,
  editPortfolio,
  showAlert
}) => {
  const [pfNameToBeEdited, setPfNameToBeEdited] = useState(origPfName);
  const [isPfNameEmpty, setIsPfNameEmpty] = useState(false);
  const [isNameEmptyErr, setIsNameEmptyErr] = useState(false);
  const [privacy, setPrivacy] = useState(origPfPrivacy);

  useEffect(() => {
    if (isNameEmptyErr && pfNameToBeEdited.trim() !== '') {
      setIsPfNameEmpty(false);
    }
    else if (isNameEmptyErr && pfNameToBeEdited.trim() === '') {
      setIsPfNameEmpty(true);
    }
  }, [pfNameToBeEdited, isNameEmptyErr]);

  const handleChangePfName = (e) => {
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
        portfolioId: origPfId,
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

  return (
    <Modal closeModalFunc={closeEditModal}>
      <div className="portfolio-form">
        <header className="portfolio-form__header">Edit Portfolio</header>
        <label
          className={`portfolio-form-label${isPfNameEmpty ? '--error' : ''}`}
        >New Portfolio Name
        <input
            type="text"
            value={pfNameToBeEdited}
            onChange={handleChangePfName}
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
          btnText={'EDIT'}
          btnColor={'warning'}
          onClickFunc={handleEditPortfolio}
          isDisabled={isPfNameEmpty}
        />
      </div>
    </Modal>
  )
}

export default connect(null, {
  editPortfolio,
  showAlert
})(EditPortfolioModal);
