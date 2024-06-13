import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './skeleton.css'; 
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Skeleton = () => {
  return (
    <div className="skeleton-container">
        <div className="skeleton-spinner">
          <FontAwesomeIcon className='loading-icon' icon={faSpinner} />
          <span>Charging...</span>
        </div>
    </div>
  );
};