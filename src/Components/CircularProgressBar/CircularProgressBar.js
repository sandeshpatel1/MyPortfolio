import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CircularProgressBar.css';

const CircularProgressBar = ({ percentage }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progress = percentage;
    const offsetValue = 313 - (progress / 100) * 313;
    setOffset(offsetValue);
  }, [percentage]);

  return (
    <div className="circular-progress" data-aos="fade-left">
      <svg className="svg" viewBox="0 0 100 100">
        <circle className="svg-circle" cx="50" cy="50" r="45"></circle>
        <circle
          className="svg-circle-progress"
          cx="50"
          cy="50"
          r="45"
          style={{ strokeDasharray: `${offset} 313` }}
        ></circle>
      </svg>
      <div className="percentage">
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircularProgressBar;
