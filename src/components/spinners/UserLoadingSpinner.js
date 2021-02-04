import React from 'react';

const UserLoadingSpinner = () => {
  return (
    <div className="user-loading-spinner-wrapper">
      <svg
        className="user-loading-spinner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="50" cy="23" r="13" fill="#e57d6c"
          style={{ animationPlayState: 'running', animationDelay: '0s' }}
        >
          <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23" style={{ animationPlayState: 'running', animationDelay: '0s' }}>
          </animate>
        </circle>
      </svg>
      <p className="user-loading-spinner-text">Loading User Info...</p>
    </div>
  );
}

export default UserLoadingSpinner;
