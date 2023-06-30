import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingIcon = () => {
  return (
    <div className="loading-icon">
      <FaSpinner className="spinner" />
    </div>
  );
};

export default LoadingIcon;
