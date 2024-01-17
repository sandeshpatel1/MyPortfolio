// DownloadModal.js

import React from 'react';
import PropTypes from 'prop-types';

const DownloadModal = ({ isOpen, onClose, onConfirmDownload }) => {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    zIndex: '1000', // Ensure it's on top of other elements
  };

  return (
    isOpen && (
      <div style={modalStyle}>
        {/* Your modal content */}
        <p>Do you want to download the resume?</p>
        <button onClick={onConfirmDownload}>OK</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    )
  );
};

DownloadModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirmDownload: PropTypes.func.isRequired,
};

export default DownloadModal;
