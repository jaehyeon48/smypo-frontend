import React from 'react';
import PropTypes from 'prop-types';

import './companyInfo.css';

const CompanyInfo = ({
  companyInfo
}) => {
  return (
    <div className="company-info-container">
      <div className="company-info-header">ABOUT {companyInfo.companyName}</div>
      <div className="company-info-description">
        <span>DESCRIPTION</span>
        <span>{companyInfo.description}</span>
      </div>
      <div className="company-info-industry">
        <span>INDUSTRY</span>
        <span>{companyInfo.industry}</span>
      </div>
      <div className="company-info-ceo">
        <span>CEO</span>
        <span>{companyInfo.CEO}</span>
      </div>
      <div className="company-info-address">
        <span>ADDRESS</span>
        <span>{companyInfo.address} {companyInfo.city}, {companyInfo.state}</span>
      </div>
      <a
        href={companyInfo.website}
        target="_blank"
        rel="noreferrer noopener"
        className="btn-company-website"
      >WEBSITE</a>
    </div>
  );
}

CompanyInfo.propTypes = {
  companyInfo: PropTypes.object
};

export default CompanyInfo;