import { useState, useEffect } from "react";
import CertificateCard from "../../components/CertificateCard";
import CertificateCardLoadingSkeleton from "../../components/CertificateLoadingSkeleton";
import FailureView from "../../components/FailureView";
import './index.css';

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiConstants.initial);

  useEffect(() => {
    const fetchCertificates = async () => {
      setApiStatus(apiConstants.loading);
      try {
        const getApiUrl = process.env.REACT_APP_BASE_API_URL;
        const response = await fetch(`${getApiUrl}/api/certificates`);
        const data = await response.json();

        if (response.ok) {
          // Add 3-second delay before showing success
          setTimeout(() => {
            setCertificates(data);
            setApiStatus(apiConstants.success);
          }, 3000);
        } else {
          setApiStatus(apiConstants.failure);
        }
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setApiStatus(apiConstants.failure);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <div className="container py-5 certificates-container">
      <h2 className="text-center mb-4 certificates-title">My Certificates</h2>
      <div className="row">
        {apiStatus === apiConstants.loading && (
          <>
            {[...Array(3)].map((_, i) => (
              <CertificateCardLoadingSkeleton key={i} />
            ))}
          </>
        )}
        {apiStatus === apiConstants.success && (
          certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificateDetails={certificate} />
          ))
        )}
        {apiStatus === apiConstants.failure && <FailureView />}
      </div>
    </div>
  );
};

export default Certificates;
