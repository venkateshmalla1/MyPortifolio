import { FiAlertCircle } from "react-icons/fi";
import './index.css';

const FailureView = () => (
  <div className="col-12">
    <div className="failure-view bg-dark text-light shadow-lg">
      <FiAlertCircle className="failure-icon" aria-hidden="true" />
      <h3 className="failure-title">Something went wrong</h3>
      <p className="failure-message">
        Unable to load this section right now. Please check your API server and try again.
      </p>
    </div>
  </div>
);

export default FailureView;
