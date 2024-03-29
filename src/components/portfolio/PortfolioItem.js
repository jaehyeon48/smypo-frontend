import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
import ModalButton from '../modal/ModalButton';
import UnLockedLockIcon from '../icons/UnLockedLockIcon';
import LockedLockIcon from '../icons/LockedLockIcon';
import {
  editPortfolio,
  deletePortfolio,
  chooseDefaultPortfolio
} from '../../actions/portfolioAction';
import { showAlert } from '../../actions/alertAction';

const PortfolioItem = ({
  isLoadingPortfolioData,
  thisPortfolio,
  defaultPortfolio,
  chooseDefaultPortfolio,
  openEditModal,
  openConfirmModal,
  deletePortfolio,
  showAlert
}) => {
  const [isDefault, setIsDefault] = useState(false);

  useEffect(() => {
    if (thisPortfolio.portfolioId === defaultPortfolio) {
      setIsDefault(true);
    } else {
      setIsDefault(false);
    }
  }, [thisPortfolio.portfolioId, defaultPortfolio]);

  const openEditModalWrapper = () => {
    openEditModal(
      thisPortfolio.portfolioId,
      thisPortfolio.portfolioName,
      thisPortfolio.portfolioPrivacy
    );
  }

  const openDetailModal = () => { }
  const closeDetailModal = () => { }

  const handleChooseDefault = () => {
    if (!isDefault) {
      chooseDefaultPortfolio(thisPortfolio.portfolioId);
    }
  }

  return (
    <tr className="portfolio-item">
      <td className="portfolio-item-name">
        {thisPortfolio.portfolioName}
      </td>
      <td className="portfolio-item-privacy">
        {thisPortfolio.portfolioPrivacy === 'public' ? (
          <span>
            Public
            <span className="portfolio-item__privacy-icon">
              <UnLockedLockIcon />
            </span>
          </span>
        ) : (
          <span>
            Private
            <span className="portfolio-item__privacy-icon">
              <LockedLockIcon />
            </span>
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
        <ModalButton
          btnType={'button'}
          btnText={'Edit'}
          btnColor={'warning'}
          isDisabled={isLoadingPortfolioData}
          openModalFunc={openEditModalWrapper}
        />
      </td>
      <td className="portfolio-item-delete">
        <ModalButton
          btnType={'button'}
          btnText={'Delete'}
          btnColor={'danger'}
          isDisabled={isLoadingPortfolioData}
          openModalFunc={() => openConfirmModal(thisPortfolio.portfolioId)}
        />
      </td>
      <td className="portfolio-item-detail">
        {/* <ModalButton
          btnType={'button'}
          btnText={'Detail'}
          btnColor={'primary'}
          openModalFunc={openDetailModal}
        /> */}
        <Button
          btnType={'button'}
          btnText={'Detail'}
          btnColor={'primary'}
        />
      </td>

    </tr>
  );
}

export default connect(null, {
  editPortfolio,
  chooseDefaultPortfolio,
  deletePortfolio,
  showAlert
})(PortfolioItem);