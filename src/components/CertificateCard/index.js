import React from 'react';
import './index.css';

const CertificateCard = ({ certificateDetails }) => {
  const {
    title,
    name,
    issuedBy,
    issued_by,
    issuer,
    issuedOn,
    issued_on,
    issueDate,
    thumbnail,
    image,
    imageUrl,
    image_url,
    verificationUrl,
    verification_url,
    certificateUrl,
    technologiesCovered,
    technologies_covered,
    technologies
  } = certificateDetails;
  const certificateTitle = title || name || 'Untitled Certificate';
  const certificateIssuer = issuedBy || issued_by || issuer;
  const certificateDate = issuedOn || issued_on || issueDate;
  const certificateThumbnail = thumbnail || image || imageUrl || image_url;
  const certificateVerificationUrl = verificationUrl || verification_url || certificateUrl;
  const certificateTechnologies = technologiesCovered || technologies_covered || technologies;
  const technologiesText = Array.isArray(certificateTechnologies) ? certificateTechnologies.join(', ') : certificateTechnologies;

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card bg-dark text-light shadow-lg h-100 certificate-card">
        <img 
          src={certificateThumbnail} 
          alt={certificateTitle} 
          className="card-img-top img-fluid certificate-thumbnail" 
        />
        <div className="card-body d-flex flex-column justify-content-between certificate-card-body">
          <div>
          <h5 className="card-title text-danger">{certificateTitle}</h5>
          <p className="card-text"><strong>Issued by:</strong> {certificateIssuer || 'Not specified'}</p>
          <p className="card-text"><strong>Issued on:</strong> {certificateDate || 'Not specified'}</p>
          <p className="card-text"><strong>Technologies:</strong> {technologiesText || 'Not specified'}</p>
          </div>
          <div className="mt-4">
          <a 
            href={certificateVerificationUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline-danger w-100"
          >
            Verify Certificate
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
