import React from "react";
import './index.css';

const CertificateLoadingSkeletonView = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card bg-dark text-light shadow-lg h-100 skeleton-card">
        <div className="skeleton-thumbnail"></div>
        <div className="card-body">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  );
};

export default CertificateLoadingSkeletonView;
