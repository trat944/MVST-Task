import { useEffect, useState } from 'react';
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
  console.log(repo)
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
      </div>
    </div>
  );
};
//I wanted to implement Chart.js for making a chart with the commits of the repo. However, I don´t have access to fetch the commits of each repo. Then I thought about creating a chart with fictional data for the chart, using Math.random to have different and unique charts. However, I have to make compromises due to short time. Just wanted to state that I do know how to make charts (although not exactly like the ones of Github repos).