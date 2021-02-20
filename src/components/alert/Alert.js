import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alert }) => {
  const alertTypeBgColor = (alertType) => {
    switch (alertType) {
      case 'success':
        return 'alert--success';
      case 'warning':
        return 'alert--warning';
      case 'error':
        return 'alert--error';
      default:
        return 'alert--normal';
    }
  }

  return (
    <React.Fragment>
      {alert && alert.isAlertOn && (
        <div className="alert-container">
          <div className={`alert ${alertTypeBgColor(alert.alertType)}`}>{alert.alertMessage}</div>
        </div>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  alert: state.alert
});

export default connect(mapStateToProps)(Alert);
