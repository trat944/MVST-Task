import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './skeleton.css'; 

export const Skeleton = () => {
  return (
    <div className="skeleton-container">
        <div className="skeleton-spinner">
          <FontAwesomeIcon className='loading-icon' icon={faSpinner} />
          <span>Loading...</span>
        </div>
    </div>
  );
};