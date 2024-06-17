import { useEffect, useState } from 'react';
import { Chart } from './Chart';
import { formatDate } from '@utils/getFormattedTime';
import { Repository } from '@interfaces/repository';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeFork, faSortDown, faStar } from '@fortawesome/free-solid-svg-icons';
import './repoItem.css'

interface Props { 
  repo: Repository
}

export const RepoItem = ({ repo }: Props) => {
  const [formattedTime, setFormattedTime] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (repo.updated_at) {
      const formattedDate = formatDate(new Date(repo.updated_at));
      setFormattedTime(formattedDate);
    }
  }, [repo.updated_at]);

  return (
    <div className='repo-item-container'>
      <div className="repo-specifics">
        <div className="repo-name">
          <span className='repo-title'>{repo.name}</span>
          <span className='repo-visibility'>{repo.visibility}</span>
        </div>
        {repo.description && <p className='repo-description'>{repo.description}</p>}
        <div className="repo-language-forks-update">
          {repo.language && <span>{repo.language}</span>}
          <FontAwesomeIcon icon={faCodeFork} />
          <span>{repo.forks}</span>
          <span>{formattedTime}</span>
        </div>
      </div>

      <div className="star-and-chart">
        <div className="star-container">
          <FontAwesomeIcon icon={faStar} />
          <span>Star</span>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        <div className="chart-container">
          <Chart/>
        </div>
      </div>
    </div>
  );
};