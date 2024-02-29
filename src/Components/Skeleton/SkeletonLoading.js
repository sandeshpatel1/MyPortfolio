import React from "react";
import "./SkeletonLoading.css";

const SkeletonLoading = () => {
  return (
    <div className="skeleton-loading">
      <div className="skeleton-social-icons">
        {/* Skeleton for horizontal icons */}
        <div className="skeleton-icon"></div>
        <div className="skeleton-icon"></div>
        <div className="skeleton-icon"></div>
        <div className="skeleton-icon"></div>
      </div>
      {/* Skeleton for profile photo */}
      <div className="skeleton-profile-img"></div>
      <div className="skeleton-text">
        {/* Skeleton for name */}
        <div className="skeleton-name"></div>
        {/* Skeleton for username and bio */}
        <div className="skeleton-profile"></div>
        {/* Skeleton for description */}
        <div className="skeleton-description"></div>
        {/* Skeleton for button */}
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
